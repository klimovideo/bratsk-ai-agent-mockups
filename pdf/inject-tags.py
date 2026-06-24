#!/usr/bin/env python3
"""Добавляет .print-tag в каждый макет (видимый только при печати в PDF)."""
from __future__ import annotations
import re
from pathlib import Path

MOCKUPS = Path(__file__).resolve().parent.parent

TAGS: list[tuple[str, str, str, str]] = [
    ("01-landing.html",                "01", "Лендинг",                 "Что умеет сервис, кому подходит, CTA «Начать»"),
    ("02-login.html",                  "02", "Вход",                    "family_id + PIN"),
    ("03-register.html",               "03", "Регистрация — профиль",   "Шаг 1: ИПРА / анкета, подпрофили детей"),
    ("04-onboarding.html",             "04", "Регистрация — family_id",   "Шаг 2: постоянный идентификатор и PIN"),
    ("05-home.html",                   "05", "Главная",                 "Проактивные рекомендации, быстрый старт чата"),
    ("06-chat.html",                   "06", "Чат с навигатором",       "Сессия без истории, ИИ-бейдж, fallback на поддержку"),
    ("07-documents-upload.html",       "07", "Документы — загрузка",    "ФИО, выбор ребёнка, без хранения файла"),
    ("08-documents-result.html",       "08", "Документы — результат",   "Summary, экспорт PDF/текст, пометка ИИ"),
    ("09-recommendations.html",        "09", "Каталог рекомендаций",    "Персональные меры поддержки"),
    ("10-recommendation-detail.html",  "10", "Деталь меры поддержки",   "Шаги, QR-код, примеры документов"),
    ("11-places.html",                 "11", "Карта организаций",       "2GIS · фильтры, список, маркеры"),
    ("12-place-detail.html",           "12", "Карточка организации",    "Контакты, услуги, маршрут"),
    ("13-profile.html",                "13", "Профиль семьи",           "ИПРА, подпрофили детей, редактирование"),
    ("15-settings.html",               "15", "Настройки",               "Доступность, удаление данных"),
    ("16-admin-dashboard.html",        "16", "Админ · Дашборд",         "KPI, аудит-лог, статус БЗ"),
    ("17-admin-knowledge.html",        "17", "Админ · База знаний",     "Материалы, статусы, аудит действий"),
    ("18-admin-stats.html",            "18", "Админ · Статистика",      "Агрегаты, выгрузка XLSX"),
]

START = "<!-- print-tag:start -->"
END = "<!-- print-tag:end -->"


def _build_tag(num: str, title: str, desc: str) -> str:
    return (
        f"{START}\n"
        f'  <div class="print-tag" role="presentation">\n'
        f'    <span><span class="num">{num}</span> &nbsp; {title}</span>\n'
        f'    <span class="desc">{desc}</span>\n'
        f"    <span>Особое семейное положение · макеты</span>\n"
        f"  </div>\n"
        f"  {END}"
    )


def _inject(file_path: Path, tag_html: str) -> None:
    content = file_path.read_text(encoding="utf-8")
    pattern = re.compile(re.escape(START) + r".*?" + re.escape(END), re.DOTALL)
    if pattern.search(content):
        new_content = pattern.sub(tag_html, content)
    else:
        new_content = re.sub(
            r"(<body[^>]*>)",
            lambda m: m.group(1) + "\n  " + tag_html,
            content,
            count=1,
        )
    file_path.write_text(new_content, encoding="utf-8")


def main() -> None:
    for filename, num, title, desc in TAGS:
        target = MOCKUPS / filename
        if not target.exists():
            print(f"!! отсутствует: {filename}")
            continue
        _inject(target, _build_tag(num, title, desc))
        print(f"ok  {filename}")


if __name__ == "__main__":
    main()
