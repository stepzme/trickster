[English](https://github.com/stepzme/trickster/blob/main/README.md) · [Русский](https://github.com/stepzme/trickster/blob/main/README.ru.md) · [Español](https://github.com/stepzme/trickster/blob/main/README.es.md) · 简体中文

# Trickster

### 面向原生 iOS 的 AI 应用工厂。

将应用构想转化为基于精选设计库的原生 iOS 应用：同时确定产品范围与固定 iOS capability 集合，通过带反馈门的阶段完成实现，独立验证，并交付原创 app icon 和商店截图。

Trickster 在你的代码仓库中协调多个专业 AI 角色。它会读取一个精简的 GitHub 目录，只下载最多三个相关应用的文档，并允许分别选择 UI、UX 与可选插画参考。随后这些来源会被综合为一个统一的本地设计方向，并对实现结果进行独立验收。

## 你将获得

- 可运行的 Xcode 项目和原生 iOS 应用；
- 基于需求说明和现有项目确定的产品范围；
- 为十一项强制 iOS capability 分别提供一项与产品相关的功能；
- 一套统一的设计方向，并记录 UI、UX 与可选插画的来源；
- 保留 iOS 原生行为和无障碍能力、同时完成定制样式的控件；
- 构建、Simulator 运行、交互和视觉检查的证据；
- 基于已审阅 Logoinspo 参考设计的一枚原创 app icon；
- 从已验收构建中逐张确认的一套商店截图。

## 流水线

```text
应用构想
→ 产品定义：范围 + 强制 iOS capabilities
→ GitHub 风格候选
→ UI / UX / 插画组合
→ Core 反馈循环
→ Full 与 Hardening
→ Simulator 验收
→ 商店截图
```

1. **定义产品。** 将核心范围与十一项强制 capability 放在同一阶段设计，并统一为最终范围。
2. **组合参考。** 比较最多三个应用，分别选择一个 UI 来源、一个 UX 来源和可选的插画来源，再综合并确认一个统一方向。
3. **建立产品合同。** 固定页面、状态、阶段边界、资源需求、capability 流程和验收检查。
4. **验证 Core。** 实现主要分区；用户请求时在 Simulator 中展示当前版本的 `PREVIEW`；迭代至 `CORE UI APPROVED`。
5. **完成与加固。** 实现剩余范围，再补齐错误、拒绝、不可用、无障碍与持久化状态。每个阶段都可按用户请求展示 preview。
6. **制作视觉资源。** App icon 与实现并行，使用最新可用图像模型生成并在批准后集成；产品资源在 Hardening 后制作。
7. **独立验证。** 在 Simulator 中以及需要时在实体 iPhone 上构建、安装、运行、操作并检查最终应用。缺失的证据必须标记为 `UNVERIFIED`。
8. **完成商店截图。** 先批准 storyboard，再从已验收构建中逐张生成和确认。

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

然后在 agent 中新建任务，并粘贴类似下面的 brief：

```text
使用 Trickster 创建或大幅修改一个原生 iOS 应用。

应用构想：
目标用户：
核心任务：
必需功能：
不在本次范围内：
约束：
```

描述可以很简短。用户无需列出平台 capability：Trickster 会把固定的十一项列表与核心范围统一，并在开始 UI 工作前引导完成分关注点的参考组合。

## 强制 iOS capabilities

每个新应用或重大修改都必须按照以下固定顺序包含十一项 capability 的产品功能：

1. Bluetooth
2. Downloading Photos
3. Adding Photos
4. Using the Camera
5. Face ID
6. Microphone Access
7. Speech Recognition Access
8. Contacts Access
9. Calendar Access
10. Location Access
11. CallKit

Agent 不得省略、合并、重命名、重排、替换或将任何一项标记为 `N/A`。仅显示权限提示的按钮、虚假设备或虚假通话不算实现。

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

- `design/` 包含已批准的统一设计组合及其来源记录。
- `artifacts/<run-id>/` 包含合同、证据、截图和审核结果。
- `roles/` 与 `workflow/` 定义与具体 agent harness 无关的工厂阶段。
- `adapters/` 将这些阶段连接到 Codex 或其他环境。

再次运行 `init` 会更新受管理的流程文件，同时保留已选择的设计与 run artifacts。

## 设计来源

- **GitHub 风格目录** 列出可用的参考应用。Trickster 只下载候选文档，并把批准的 `provenance.json`、`composition.md`、`ui.md`、`ux.md` 和可选的 `illustrations.md` 保存到 `trickster/design/`。
- **Logoinspo App Icons** 为原创 app icon 方向提供参考。

设计组合不是一组可随意交换的皮肤：每个关注点只有一个来源，最终结果必须像一个统一产品。原生控件负责行为、无障碍、focus 和键盘集成，外观遵循已批准的 `ui.md`。

## 详细阶段

| 阶段 | 负责人 | 必需结果 |
|---|---|---|
| 1. 产品定义 | product-researcher + master gate | 统一范围与十一项产品 capability |
| 2. 参考组合 | design-planner + 用户确认 | 本地综合的 UI、UX 与可选插画来源 |
| 3. 产品合同 | design-planner | 页面、状态、阶段、资源需求和验证计划 |
| 4. Core | implementation-owner + 用户确认 | 主要分区直至 `CORE UI APPROVED` |
| 5. Full | implementation-owner | 剩余范围与 capability 流程 |
| 6. Hardening | implementation-owner | 错误、拒绝、不可用、无障碍与持久化状态 |
| 7. 产品资源 | visual-producer + implementation-owner | Hardening 后批准并集成的资源 |
| 并行. App icon | visual-producer + 用户确认 | 集成前批准的原创方案 |
| 8. 验收 | acceptance-reviewer + master | 独立验证的最终构建和 capability 矩阵 |
| 9. 商店截图 | visual-producer + 用户确认 | 已批准 storyboard 与逐张确认的真实构建截图 |
| 10. 最终整理 | master + 用户确认 | 明确确认结果并清理临时文件 |
| 11. 交付 | master | 可复现证据和最终状态 |

完整执行规则请参阅[主流程](workflow/master-prompt.md)和[编排合同](workflow/orchestration.md)。

## 核心保证

- 风格候选最多包含三个根据目录元数据选出的设计包，并且只下载这些候选的文档。
- 无论 prompt 范围如何，十一项 canonical iOS capabilities 都必须进入合同和实现，且不能标记为 `N/A`。
- 在用户批准一个统一设计组合之前，不开始实现 UI。
- UI、UX 与可选插画可来自不同候选应用，但每个关注点只能有一个来源，禁止随意混合组件。
- 用户批准 Core 前不能开始 Full；每个实现阶段都支持按请求展示 Simulator preview。
- App icon 与每张商店截图都必须经过反馈循环后才能集成或继续。
- 保留控件的原生行为，同时让外观遵循选定的视觉语言。
- 实现角色不能自行验收自己的工作。
- 构建成功本身不等于验收通过。
- 无法使用的工具或缺失的证据会标记为 `UNVERIFIED`，不会被虚构。

## 要求与边界

Trickster 需要 macOS、Xcode、合适的 iOS Simulator runtime、用于验证硬件相关强制 capability 的实体 iPhone 和外设、Node.js 20 或更高版本，以及能够读取已安装指令并使用项目工具的 agent 环境。

用于实体设备 capability 验证的签名属于验收的一部分。Release archive、App Store 提交和生产部署仍属于独立任务。所需外部服务必须真实连接，否则标记为 `UNVERIFIED`。

Trickster 会主动拒绝全局安装。请在目标项目内使用 `npx` 作为临时 launcher。

## 项目文档

- [主流程](workflow/master-prompt.md)
- [角色编排](workflow/orchestration.md)
- [强制 iOS capabilities](workflow/ios-capabilities.md)
- [参考组合](workflow/style-reference.md)
- [实现](workflow/implementation.md)
- [Core](workflow/implementation-core.md)
- [Full](workflow/implementation-full.md)
- [Hardening](workflow/implementation-hardening.md)
- [验收](workflow/acceptance.md)
- [端到端验证](workflow/verification.md)

外部文档：

- [Apple：在 Simulator 中运行应用](https://developer.apple.com/documentation/Xcode/running-your-app-on-simulated-or-physical-devices)
- [Apple：App icons](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Apple：截图规格](https://developer.apple.com/help/app-store-connect/reference/app-information/screenshot-specifications)
