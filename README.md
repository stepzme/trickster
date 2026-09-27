# Trickster — project-scoped pipeline разработки iOS-приложений

Версия комплекта: 0.6.1. Trickster устанавливает в существующий проект локальный, независимый от agent harness процесс: исследование продукта, SCRN-референсы, выбор одного пакета из собственной базы стилей, реализация, проверка в Simulator, app icon и ASO screenshots.

## Установка

Запусти из корня существующего Git/Xcode/Swift Package/XcodeGen-проекта:

```sh
npx @sgx22/trickster init
```

По умолчанию устанавливается Codex adapter. Для другого harness:

```sh
npx @sgx22/trickster init --harness generic
```

Команда запускает пакет временно через npm cache. Глобальная установка запрещена. В проекте создаются:

```text
trickster/
├── AGENTS.md
├── HARNESS
├── roles/
├── adapters/
├── workflow/
├── templates/
├── styles/
├── design/
└── artifacts/
```

`styles/` — поставляемая база пакетов приложений Screen Gallery. `design/` — рабочая копия одного подтверждённого пакета текущего продукта. Повторный `init` обновляет управляемый процесс и базу, но сохраняет рабочий пакет и run artifacts.

В режиме `codex` installer также добавляет ограниченный указатель в корневой `AGENTS.md` и project-scoped `.codex/config.toml`. В режиме `generic` эти Codex-файлы не создаются: подключение выполняется по `trickster/adapters/generic.md`. При переключении на generic установщик удаляет только собственные managed-блоки Codex.

## Источники

- SCRN MCP обязателен для исследования реальных экранов и сценариев.
- Локальная база `trickster/styles/` предоставляет `source.json`, `ui.md`, `ux.md` и опциональный `illustrations.md` для каждого приложения.
- [Logoinspo App Icons](https://logoinspo.com/icons) используется для референсов app icon.
- SCRN использует OAuth выбранного harness; данные авторизации в проект не записываются.

Для Codex при необходимости выполни:

```sh
codex mcp login screen_gallery
```

Готовность SCRN доказывается реальным запросом, который возвращает изображения.

## Проверка установки

```sh
npx @sgx22/trickster doctor
```

`doctor` читает `trickster/HARNESS` и проверяет общие файлы, role contracts, adapter и локальную базу стилей. Для Codex он дополнительно проверяет CLI и project config. Рабочий пакет в `trickster/design/` не требуется до старта задачи: `design-planner` выбирает один пакет внутри процесса, а мастер обязан получить подтверждение пользователя до проектирования UI. MCP, показ изображений и делегирование проверяются реальными действиями уже в сессии выбранного harness.

## Этапы процесса

| Этап | Владелец | Документ | Обязательный результат |
|---|---|---|---|
| 1 | product-researcher | [Scope](workflow/scope.md) | Явный статус и пробелы функционального объёма |
| 2 | product-researcher | [SCRN research](workflow/scrn-research.md) | Релевантная категория, просмотренные изображения, baseline при необходимости |
| 3 | design-planner + master gate | [Style reference](workflow/style-reference.md) | Один локальный пакет и явное подтверждение пользователя |
| 4 | design-planner | [Product contract](workflow/product-contract.md) | Экраны, состояния, сценарии и план проверки |
| 5 | visual-producer при необходимости | [Assets](workflow/assets.md) | Asset manifest и проверенные изображения либо N/A |
| 6 | implementation-owner | [Implementation](workflow/implementation.md) | Вертикальный сценарий и полный согласованный scope |
| 7 | visual-producer | [App icon](workflow/app-icon.md) | Одна оригинальная концепция по Logoinspo-референсам |
| 8 | acceptance-reviewer + master | [Acceptance](workflow/acceptance.md) | Независимо проверенная финальная сборка |
| 9 | visual-producer | [ASO screenshots](workflow/aso-screenshots.md) | Один комплект из реальных экранов принятой сборки |
| 10 | master | [Delivery](workflow/delivery.md) | Итоговый отчёт и воспроизведение |

[Master process](workflow/master-prompt.md) связывает этапы, а [orchestration.md](workflow/orchestration.md) задаёт универсальные операции, handoff и владение файлами. Role contracts находятся в `roles/`, а привязка к среде — в `adapters/`. [UX](workflow/ux.md) и [iOS](workflow/ios.md) действуют сквозным образом.

## Основные правила

- SCRN MCP используется в каждом создании или существенном изменении приложения.
- Если scope не определён, product-researcher восстанавливает baseline по приложениям той же категории, исключая незапрошенные backend и integration-функции.
- Design-planner выбирает один полный пакет из `styles/`, а мастер ждёт подтверждения до UI-работы.
- `ui.md` задаёт визуальный язык, `ux.md` — характер сценариев; `illustrations.md` применяется только когда существует.
- Если `illustrations.md` отсутствует, но продукту нужна графика, создаётся один оригинальный стиль, гармонирующий с `ui.md`.
- На каждом этапе создаётся одно решение, а не набор вариантов.
- Только один исполнитель одновременно владеет общими Xcode-файлами или Simulator.
- App icon создаётся после экранов приложения и проверяется в финальной сборке; ASO создаётся после её приёмки.
- Наличие текста инструкции не считается доказательством выполнения этапа.

## Проверка нового процесса

Изолированная end-to-end проверка описана в [workflow/verification.md](workflow/verification.md). Она должна отдельно подтвердить установку базы, выбор и confirmation gate пакета, run snapshot, реализацию, независимую приёмку, app icon и ASO.

## Документация

- [OpenAI: Model Context Protocol](https://learn.chatgpt.com/docs/extend/mcp).
- [OpenAI: Multi-agent](https://developers.openai.com/api/docs/guides/agents-api/multi-agent).
- [Apple: запуск на симуляторе и устройстве](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices).
- [Apple: app icons](https://developer.apple.com/design/human-interface-guidelines/app-icons).
- [Apple: screenshot specifications](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications).
