# Adapter: Codex

Этот adapter реализует [универсальный контракт](contract.md) средствами Codex.

## Загрузка проекта

- Корневой `AGENTS.md` направляет Codex к `trickster/AGENTS.md`.
- До выбора Codex загружает raw GitHub-каталог и документы до трёх кандидатов по `trickster/workflow/style-reference.md`; после выбора использует только `trickster/design/`.
- После установки перезапусти Codex, если инструкции проекта уже были загружены в текущей сессии.

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
- Доступен raw GitHub URL каталога либо в проекте уже сохранён полный `trickster/design/`.
- Доступны shell, Xcode, Simulator, UI interaction и просмотр изображений.
- Если заявлен delegated mode, пробный субагент создаётся, завершается и возвращает handoff.
