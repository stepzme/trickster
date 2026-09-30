[English](https://github.com/stepzme/trickster/blob/main/README.md) · Русский · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · [简体中文](https://github.com/stepzme/trickster/blob/main/README.zh-CN.md)

# Trickster

### AI-фабрика нативных iOS-приложений.

Превращает идею приложения в нативный iOS-продукт на основе курируемой дизайн-базы: одновременно определяет scope и фиксированный набор iOS capabilities, проектирует, реализует через feedback-гейты, проверяет и завершает результат оригинальной app icon и store screenshots.

Trickster оркестрирует специализированные AI-роли внутри репозитория. Он читает обогащённый GitHub-каталог с нормализованными категориями и summary для UI, UX, navigation, core flows и illustrations, загружает документы максимум трёх релевантных приложений и разрешает отдельно выбрать UI-, UX- и опционально illustration-референс. Затем они синтезируются в одно целостное дизайн-направление, а реализованный результат проверяется независимо.

## Что получается на выходе

- работающий Xcode-проект и нативное iOS-приложение;
- продуктовый scope, основанный на задании и существующем проекте;
- production-ready local-first хранение на SwiftData и файлах с автоматической локальной идентичностью и без собственного backend;
- одна связанная с продуктом функция для каждой из одиннадцати обязательных iOS capabilities;
- одно целостное дизайн-направление с явным provenance для UI, UX и опциональных иллюстраций;
- стилизованные контролы, сохраняющие нативное поведение и доступность iOS;
- доказательства сборки, запуска, взаимодействия и визуальной проверки в Simulator;
- одна оригинальная app icon по просмотренным Logoinspo-референсам;
- один покадрово согласованный комплект store screenshots из принятой сборки.

## Пайплайн

```text
Идея приложения
→ product definition: scope + обязательные iOS capabilities
→ shortlist по GitHub-каталогу
→ композиция UI / UX / illustrations
→ Core с feedback loop
→ Full + LOCAL DATA READY
→ product assets и icon integration
→ Hardening финального UI
→ приёмка в Simulator
→ store screenshots
```

1. **Product definition.** Core scope, local data architecture и все одиннадцать обязательных capabilities формируются вместе, после чего сводятся в один финальный scope.
2. **Композиция референсов.** Из shortlist выбираются один UI-источник, один UX-источник и опционально один illustration-источник. Они синтезируются в единое направление и согласуются с пользователем.
3. **Контракт продукта.** Фиксируются экраны, состояния, границы фаз, требования к ассетам, capability-сценарии и проверки приёмки.
4. **Core implementation.** Реализуются основные разделы; по запросу агент запускает Simulator и показывает текущий `PREVIEW`; направление дорабатывается до `CORE UI APPROVED`.
5. **Full implementation.** После согласования Core реализуется остаточный scope и все обязательные capability flows, runtime-моки заменяются SwiftData, файлами или реальными системными API и фиксируется `LOCAL DATA READY`. Preview остаётся доступен по запросу.
6. **Визуальные материалы.** App icon создаётся параллельно последней доступной image-моделью. После Full создаются product assets; в код внедряются только утверждённые icon и assets.
7. **Hardening финального UI.** Проверяются ошибки, отказы, недоступность, accessibility, persistence, compact layout, локали и регрессии уже интегрированных ассетов.
8. **Независимая проверка.** Финальное приложение собирается, устанавливается, запускается и проверяется в Simulator и на физическом iPhone там, где это обязательно. Недоступные доказательства остаются `UNVERIFIED`.
9. **Store screenshots.** Сначала согласуется storyboard, затем каждый кадр из принятой сборки генерируется и согласуется отдельно.

Если выбранный agent harness поддерживает делегирование, Trickster использует несколько сфокусированных ролей. В другой среде те же контракты выполняются последовательно.

## Быстрый старт

Запусти из корня существующего Git-, Xcode-, Swift Package- или XcodeGen-проекта:

```sh
npx @sgx22/trickster init
```

По умолчанию используется Codex adapter. Проверь локальную установку:

```sh
npx @sgx22/trickster doctor
```

После этого создай новую задачу для агента и вставь бриф по этому шаблону:

```text
Используя Trickster, создай или существенно измени нативное iOS-приложение.

Идея:
Пользователь:
Основная задача:
Обязательные функции:
Вне текущего scope:
Ограничения:
```

Описание может быть коротким. Пользователю не нужно перечислять системные возможности: Trickster сводит фиксированный набор из одиннадцати iOS capabilities с core scope, при необходимости уточняет один вопрос, меняющий границы продукта, и проводит через композицию референсов до начала UI-работы. Установленные project instructions активируют capability-, дизайн-, feedback- и acceptance-gates.

## Обязательные iOS capabilities

Каждое новое или существенно изменяемое приложение должно включать осмысленную продуктовую функцию для каждого пункта строго в этом порядке:

1. Bluetooth
2. Скачивание фото
3. Добавление фото
4. Использование камеры
5. Face ID
6. Доступ к микрофону
7. Доступ к распознаванию речи
8. Доступ к контактам
9. Доступ к календарю
10. Доступ к геолокации
11. CallKit

Агент не может пропустить, объединить, переименовать, переставить, заменить или пометить пункт `N/A`. Первые десять capabilities требуют реального поведения: permission-only кнопка или фальшивое устройство не считаются реализацией. Только CallKit использует честный режим `INTERFACE_ONLY` без фиктивного звонка, собеседника, connected state, signaling или media transport.

Для другого agent harness:

```sh
npx @sgx22/trickster init --harness generic
```

Сопоставь операции оркестрации со своей средой по `trickster/adapters/generic.md`.

## Как устроена установка

Trickster устанавливается внутрь текущего проекта, а не глобально:

```text
trickster/
├── AGENTS.md
├── HARNESS
├── roles/
├── adapters/
├── workflow/
├── templates/
├── design/
└── artifacts/
```

- `design/` содержит согласованную целостную композицию дизайна и provenance её источников.
- `artifacts/<run-id>/` содержит контракты, доказательства, скриншоты и результаты проверки.
- `roles/` и `workflow/` задают этапы фабрики независимо от конкретного agent harness.
- `adapters/` связывают эти этапы с Codex или другой средой.

Повторный `init` обновляет управляемые документы процесса, сохраняя выбранный дизайн и run artifacts.

## Источники дизайна

- **Обогащённый GitHub-каталог стилей** перечисляет приложения-референсы вместе с нормализованными категориями и summary их UI, UX, navigation, core flows и illustration language. Trickster загружает документы только для shortlist, а согласованные `provenance.json`, `composition.md`, `ui.md`, `ux.md` и опциональный `illustrations.md` сохраняет в `trickster/design/`.
- **Logoinspo App Icons** используется как источник референсов для оригинального направления app icon.

Композиция — не набор взаимозаменяемых скинов. У каждого аспекта есть один источник, а итог должен восприниматься единым продуктом. Нативные контролы обеспечивают поведение, доступность, focus и работу с клавиатурой, а внешний вид следует согласованному `ui.md`.

## Подробные этапы

| Этап | Владелец | Обязательный результат |
|---|---|---|
| 1. Product definition | product-researcher + gate мастера | Согласованный local-first scope и одиннадцать продуктовых capabilities |
| 2. Композиция референсов | design-planner + подтверждение пользователя | UI, UX и опциональные illustrations сведены в одно направление |
| 3. Контракт продукта | design-planner | Экраны, состояния, фазы, требования к ассетам и план проверки |
| 4. Core implementation | implementation-owner + подтверждение пользователя | Основные разделы до `CORE UI APPROVED` |
| 5. Full implementation | implementation-owner | Остаточный scope, capability flows и `LOCAL DATA READY` |
| 6. Product assets | visual-producer + implementation-owner | Ассеты после `LOCAL DATA READY`, согласование и внедрение вместе с утверждённой icon |
| 7. Hardening | implementation-owner | Ошибки, отказы, недоступность, accessibility, persistence и регрессии финальных ассетов |
| Параллельно. App icon | visual-producer + подтверждение пользователя | Концепция последней image-моделью, согласованная до внедрения |
| 8. Приёмка | acceptance-reviewer + master | Независимо проверенная сборка и capability-матрица |
| 9. Store screenshots | visual-producer + покадровое подтверждение | Storyboard и каждый кадр из принятой сборки |
| 10. Финализация | master + подтверждение пользователя | Явное подтверждение результата и очистка временных файлов |
| 11. Передача | master | Воспроизводимые доказательства и итоговый статус |

Точные правила исполнения находятся в [главном процессе](workflow/master-prompt.md) и [контракте оркестрации](workflow/orchestration.md).

## Основные гарантии

- Shortlist содержит не более трёх пакетов, выбранных по метаданным каталога; загружаются документы только этих кандидатов.
- Все одиннадцать канонических iOS capabilities входят в контракт и реализацию независимо от scope промпта; ни одну нельзя пометить `N/A`.
- Каждое приложение local-first: SwiftData хранит durable product data, файлы — бинарные данные, локальная идентичность не требует аккаунта, а runtime-моки недоступны в Release.
- Только CallKit разрешён в явном режиме `INTERFACE_ONLY`.
- Для ASO можно воспроизводимо заполнять реальные SwiftData и файловое хранилище демонстрационными данными, но нельзя заменять production repository моками.
- UI не реализуется, пока пользователь не согласовал одну целостную композицию дизайна.
- UI, UX и опциональные illustration-референсы могут происходить из разных shortlisted apps, но у каждого аспекта один источник; произвольное смешивание компонентов запрещено.
- Нативное поведение контролов сохраняется, а внешний вид следует согласованному визуальному языку.
- Full implementation не начинается до согласования Core; на каждой implementation-фазе пользователь может запросить Simulator preview.
- App icon и каждый store screenshot проходят feedback loop до внедрения или перехода дальше.
- Исполнитель реализации не может сам принять свою работу.
- Успешная сборка сама по себе не является приёмкой.
- Недоступные инструменты и доказательства помечаются `UNVERIFIED`, а не подменяются предположениями.

## Требования и границы

Для Trickster нужны macOS, Xcode, подходящий iOS Simulator runtime, физический iPhone и необходимые периферийные устройства для обязательной проверки hardware-dependent capabilities, Node.js 20 или новее и агентная среда, способная читать установленные инструкции и работать с инструментами проекта. Для нового исследования референсов нужен доступ к raw-файлам GitHub-репозитория Trickster; существующий проект продолжает использовать локально сохранённую согласованную композицию.

Подписание для проверки десяти `REAL` capabilities на физическом устройстве входит в приёмку. Release archive и публикация в App Store остаются отдельными задачами выпуска. Trickster не создаёт собственный backend, серверные аккаунты, Sign in with Apple, CloudKit или синхронизацию; продукт, которому они фундаментально необходимы, выходит за стандартную local-first границу.

Глобальная установка намеренно запрещена. Используй `npx` как временный launcher внутри целевого проекта.

## Документация проекта

- [Главный процесс](workflow/master-prompt.md)
- [Оркестрация ролей](workflow/orchestration.md)
- [Обязательные iOS capabilities](workflow/ios-capabilities.md)
- [Композиция референсов](workflow/style-reference.md)
- [Реализация](workflow/implementation.md)
- [Core implementation](workflow/implementation-core.md)
- [Full implementation](workflow/implementation-full.md)
- [Hardening](workflow/implementation-hardening.md)
- [Приёмка](workflow/acceptance.md)
- [End-to-end проверка](workflow/verification.md)

Внешняя документация:

- [Apple: запуск приложения в Simulator](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple: app icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple: требования к скриншотам](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
