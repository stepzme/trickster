# Adapter: Codex

Этот adapter реализует [универсальный контракт](contract.md) средствами Codex.

## Загрузка проекта и MCP

- Корневой `AGENTS.md` направляет Codex к `trickster/AGENTS.md`.
- Project-scoped `.codex/config.toml` подключает SCRN MCP.
- Локальная база визуальных направлений находится в `trickster/styles/` и не требует отдельного MCP.
- После установки перезапусти Codex, доверь проект и проверь SCRN запросом, который возвращает изображения.

## Операции оркестрации

| Операция | Codex tool |
|---|---|
| `SPAWN(role, task)` | `spawn_agent` с stable ID роли; передать только нужный контекст |
| `WAIT(role)` | `wait_agent` |
| `CONTINUE(role, task)` | `followup_task` тому же исполнителю |
| `MESSAGE(role, information)` | `send_message` |
| `STOP(role)` | `interrupt_agent` |

Создавай исполнителей как субагентов текущей задачи, а не как отдельные пользовательские задачи. По возможности используй `fork_turns="none"` или минимальную историю и передавай входы явно. Пользовательские вопросы и обязательные подтверждения всегда остаются у мастера.

Если collaboration tools недоступны, исполняй роли последовательно по [generic adapter](generic.md) и зафиксируй `sequential fallback` в review.md.

## Проверка adapter

- `codex` доступен в PATH.
- `.codex/config.toml` загружен из доверенного проекта.
- В `trickster/styles/` доступен хотя бы один полный пакет `source.json`, `ui.md`, `ux.md`.
- SCRN возвращает и позволяет просмотреть изображения.
- Доступны shell, Xcode, Simulator, UI interaction и просмотр изображений.
- Если заявлен delegated mode, пробный субагент создаётся, завершается и возвращает handoff.
