[English](https://github.com/stepzme/trickster/blob/main/README.md) · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · 简体中文

# Trickster

### 面向原生 iOS 的 AI 应用工厂。

将应用构想转化为基于精选设计库的原生 iOS 应用：确定产品范围、完成设计与实现、通过 Simulator 验证，并交付原创 app icon 和 ASO 截图。

Trickster 在你的代码仓库中协调多个专业 AI 角色。它会读取一个精简的 GitHub 目录，只下载最多三个相关风格的文档，要求用户只选择一个并将其保存到项目中，随后对实现结果进行独立验收。

## 你将获得

- 可运行的 Xcode 项目和原生 iOS 应用；
- 基于需求说明和现有项目确定的产品范围；
- 从 GitHub 目录中选择并保存在本地的一套视觉语言；
- 保留 iOS 原生行为和无障碍能力、同时完成定制样式的控件；
- 构建、Simulator 运行、交互和视觉检查的证据；
- 基于已审阅 Logoinspo 参考设计的一枚原创 app icon；
- 从已验收构建中生成的一套 ASO 截图。

## 流水线

```text
应用构想
→ 产品范围
→ GitHub 风格候选
→ 选择一种风格
→ 原生实现
→ Simulator 验收
→ app icon 与 ASO 截图
```

1. **定义产品。** 明确需求范围、边界，以及真正需要用户决定的问题。
2. **比较相关风格。** 读取 GitHub 目录，根据元数据选择最多三个候选，并且只下载这些候选的文档。
3. **选择唯一方向。** 在 UI 实现前必须只选择一个设计包；不能合并设计包，也不能为不同页面使用不同设计包。
4. **建立产品合同。** 固定页面、状态、流程、资源和验收检查。
5. **构建应用。** 先实现并视觉检查一条纵向核心流程，再完成全部已确认范围。
6. **独立验证。** 在 Simulator 中构建、安装、运行、操作并检查最终应用。缺失的证据必须标记为 `UNVERIFIED`。
7. **完成商店素材。** 创建原创 app icon，并在应用验收后从真实构建中制作 ASO 截图。

当当前 agent harness 支持委派时，Trickster 会使用多个聚焦角色；不支持时，则按相同合同顺序执行。

## 快速开始

在现有 Git、Xcode、Swift Package 或 XcodeGen 项目的根目录中运行：

```sh
npx @sgx22/trickster init
```

默认使用 Codex adapter。检查本地安装：

```sh
npx @sgx22/trickster doctor
```

然后让你的 agent 使用 Trickster 创建或大幅修改 iOS 应用。安装到项目中的指令会激活流水线，并执行设计确认和验收门槛。

若使用其他 agent harness：

```sh
npx @sgx22/trickster init --harness generic
```

按照 `trickster/adapters/generic.md` 将编排操作映射到对应环境。

## 安装方式

Trickster 安装在当前项目中，而不是全局安装：

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

- `design/` 包含当前产品唯一已确认的风格包。
- `artifacts/<run-id>/` 包含合同、证据、截图和审核结果。
- `roles/` 与 `workflow/` 定义与具体 agent harness 无关的工厂阶段。
- `adapters/` 将这些阶段连接到 Codex 或其他环境。

再次运行 `init` 会更新受管理的流程文件，同时保留已选择的设计与 run artifacts。

## 设计来源

- **GitHub 风格目录** 列出可用的参考应用。Trickster 只下载候选包的文档，并把选中的 `source.json`、`ui.md`、`ux.md` 和可选的 `illustrations.md` 保存到 `trickster/design/`。
- **Logoinspo App Icons** 为原创 app icon 方向提供参考。

风格包并不是简单换肤。原生控件可以负责行为、无障碍、focus 和键盘集成，但当参考定义了独特视觉语言时，控件外观必须明确继承 `ui.md`。

## 详细阶段

| 阶段 | 负责人 | 必需结果 |
|---|---|---|
| 1. 范围 | product-researcher | 明确的范围状态和待解决问题 |
| 2. 风格选择 | design-planner + 用户确认 | 最多三个 GitHub 候选，并在本地保存一个设计包 |
| 3. 产品合同 | design-planner | 页面、状态、流程、资源和验证计划 |
| 4. 产品资源 | visual-producer（需要时） | 已验证的图像或合理的 `N/A` |
| 5. 实现 | implementation-owner | 纵向核心流程以及完整的约定范围 |
| 6. App icon | visual-producer | 安装到应用中的一个原创方案 |
| 7. 验收 | acceptance-reviewer + master | 独立验证的最终构建 |
| 8. ASO 截图 | visual-producer | 基于已验收构建真实页面的一套截图 |
| 9. 最终整理 | master + 用户确认 | 明确确认结果并清理临时文件 |
| 10. 交付 | master | 可复现证据和最终状态 |

完整执行规则请参阅[主流程](workflow/master-prompt.md)和[编排合同](workflow/orchestration.md)。

## 核心保证

- 风格候选最多包含三个根据目录元数据选出的设计包，并且只下载这些候选的文档。
- 在用户只选择一个设计包之前，不开始实现 UI。
- 设计包不能合并；选中的设计包是唯一的设计上下文。
- 保留控件的原生行为，同时让外观遵循选定的视觉语言。
- 实现角色不能自行验收自己的工作。
- 构建成功本身不等于验收通过。
- 无法使用的工具或缺失的证据会标记为 `UNVERIFIED`，不会被虚构。

## 要求与边界

Trickster 需要 macOS、Xcode、合适的 iOS Simulator runtime、Node.js 20 或更高版本，以及能够读取已安装指令并使用项目工具的 agent 环境。首次选择风格时需要访问 Trickster GitHub 仓库中的 raw 文件；现有项目会继续使用已保存在本地的设计包。

签名、release archive、真机验证、App Store 提交以及外部生产基础设施属于独立发布任务，除非明确包含在产品范围中。

Trickster 会主动拒绝全局安装。请在目标项目内使用 `npx` 作为临时 launcher。

## 项目文档

- [主流程](workflow/master-prompt.md)
- [角色编排](workflow/orchestration.md)
- [风格选择](workflow/style-reference.md)
- [实现](workflow/implementation.md)
- [验收](workflow/acceptance.md)
- [端到端验证](workflow/verification.md)

外部文档：

- [Apple：在 Simulator 中运行应用](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple：App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple：截图规格](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
