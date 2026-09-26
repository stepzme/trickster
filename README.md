# Trickster — project-scoped pipeline разработки iOS-приложений

Версия комплекта: 0.3. Trickster устанавливает в существующий проект локальный процесс для Codex: исследование продукта, SCRN-референсы, подтверждённый DesignMD, реализация, проверка в Simulator, app icon и ASO screenshots.

## Установка

Запусти из корня существующего Git/Xcode/Swift Package/XcodeGen-проекта:

```sh
npx @sgx22/trickster@pilot init
```

Команда запускает пакет временно через npm cache. Глобальная установка запрещена. В проекте создаются:

```text
trickster/
├── AGENTS.md
├── workflow/
├── templates/
├── design/
├── runtime/
└── artifacts/
```

Installer также добавляет ограниченный указатель в корневой `AGENTS.md`, project-scoped `.codex/config.toml` и правила `.gitignore`. Повторный запуск обновляет процесс, но сохраняет выбранный `trickster/design/DESIGN.md` и пользовательские файлы вне управляемых блоков.

## Подключения

- DesignMD MCP предоставляет конкретный `DESIGN.md`.
- SCRN MCP обязателен для исследования реальных экранов и сценариев.
- [Logoinspo App Icons](https://logoinspo.com/icons) используется для референсов app icon.
- DesignMD key хранится в `trickster/.secrets/designmd-api-key` с правами `0600` и исключается из Git.
- SCRN использует OAuth Codex; данные авторизации в проект не записываются.

Во время интерактивного `init` установщик предлагает открыть страницу DesignMD key и принимает ключ скрытым вводом. Для автоматического запуска ключ можно передать через `DESIGNMD_API_KEY`.

## Проверка установки

```sh
npx @sgx22/trickster@pilot doctor
```

`doctor` проверяет Codex, project config, DesignMD key и локальный runtime. Выбранный `DESIGN.md` не требуется до старта задачи: агент выбирает его внутри процесса и обязан получить подтверждение пользователя до проектирования UI.

После `init` перезапусти Codex, доверь проект и при необходимости выполни:

```sh
codex mcp login screen_gallery
```

Готовность SCRN доказывается реальным запросом, который возвращает изображения.

## Этапы процесса

| Этап | Документ | Обязательный результат |
|---|---|---|
| 1 | [Scope](workflow/scope.md) | Явный статус и пробелы функционального объёма |
| 2 | [SCRN research](workflow/scrn-research.md) | Релевантная категория, просмотренные изображения, baseline при необходимости |
| 3 | [DesignMD](workflow/designmd.md) | Один проверенный дизайн и явное подтверждение пользователя |
| 4 | [Product contract](workflow/product-contract.md) | Экраны, состояния, сценарии и план проверки |
| 5 | [Assets](workflow/assets.md) | Asset manifest и проверенные продуктовые изображения либо N/A |
| 6 | [Implementation](workflow/implementation.md) | Вертикальный сценарий и полный согласованный scope |
| 7 | [App icon](workflow/app-icon.md) | Одна оригинальная концепция по Logoinspo-референсам |
| 8 | [Acceptance](workflow/acceptance.md) | Финальная сборка с иконкой, запуск, сценарии и визуальные доказательства |
| 9 | [ASO screenshots](workflow/aso-screenshots.md) | Один комплект из реальных экранов принятой сборки |
| 10 | [Delivery](workflow/delivery.md) | Итоговый отчёт и воспроизведение |

[Master process](workflow/master-prompt.md) связывает этапы. [UX](workflow/ux.md) и [iOS](workflow/ios.md) действуют сквозным образом. Допустимые категории SCRN зафиксированы в [scrn-categories.md](workflow/scrn-categories.md).

## Основные правила

- SCRN MCP используется в каждом создании или существенном изменении приложения.
- Если scope не определён, агент восстанавливает baseline по приложениям той же категории, исключая незапрошенные backend и integration-функции.
- Агент выбирает один DesignMD и ждёт подтверждения до UI-работы.
- На каждом этапе создаётся одно решение, а не набор вариантов.
- App icon создаётся после экранов приложения и проверяется в финальной сборке; ASO создаётся после её приёмки.
- Наличие текста инструкции не считается доказательством выполнения этапа.

## Повторный пилот

Первый pilot run подтвердил сборку и полезность прямого DesignMD, но выявил слабую трассируемость MCP-источника, чрезмерно компактный scope и отсутствие Store assets. Повторный пилот должен проверить новые stage gates по [pilot.md](workflow/pilot.md).

## Документация

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp).
- [Apple: запуск на симуляторе и устройстве](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices).
- [Apple: app icons](https://developer.apple.com/design/human-interface-guidelines/app-icons).
- [Apple: screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications).
