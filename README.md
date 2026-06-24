# Макеты «Особое семейное положение»

Актуализировано: 27.05.2026 (по решениям заказчика).

## Просмотр

- Индекс: `index.html`
- PDF: `pdf/osfp-mockups.pdf`
- Онлайн: https://klimovideo.github.io/bratsk-ai-agent-mockups/

## Экраны (17)

| # | Файл | Описание |
|---|---|---|
| 01 | `01-landing.html` | Лендинг |
| 02 | `02-login.html` | Вход |
| 03 | `03-register.html` | Регистрация шаг 1: ИПРА / анкета |
| 04 | `04-onboarding.html` | Регистрация шаг 2: family_id + PIN |
| 05 | `05-home.html` | Главная |
| 06 | `06-chat.html` | Чат (сессия, ИИ-бейдж, поддержка) |
| 07 | `07-documents-upload.html` | Документы: загрузка + ФИО |
| 08 | `08-documents-result.html` | Документы: результат |
| 09 | `09-recommendations.html` | Каталог рекомендаций |
| 10 | `10-recommendation-detail.html` | Деталь меры (QR, документы) |
| 11 | `11-places.html` | Карта 2GIS |
| 12 | `12-place-detail.html` | Карточка организации |
| 13 | `13-profile.html` | Профиль: ИПРА, дети |
| 15 | `15-settings.html` | Настройки |
| 16 | `16-admin-dashboard.html` | Админ: дашборд |
| 17 | `17-admin-knowledge.html` | Админ: база знаний |
| 18 | `18-admin-stats.html` | Админ: статистика, XLSX |

Удалены: `14-history.html`, `19-admin-unanswered.html`.

## Пересборка PDF

```bash
cd mockups && python3 -m http.server 8765 &
python3 pdf/inject-tags.py
bash pdf/build.sh
```
