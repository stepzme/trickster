# Trickster

Trickster 是一个项目本地的原生 iOS 应用开发流程。它先让用户批准完整产品，再由 Designer 在真实运行的 Simulator MVP 中证明设计方向，最后由 Dev 按可审查的大模块扩展同一个应用。

```sh
npx @sgx22/trickster init
```

流程只有五个阶段：Research、Planning、Design、Dev、Publish。master 协调 Product Researcher、Designer、Implementation Owner 和 Acceptance Reviewer。

Designer 从真实 iOS 产品库中选择最多三个候选，推荐一个 `ui.md` 和可选的 `illustrations.md`。导航和交互来自已批准的 Research、Planning 与共享工作流准则，而不是参考应用。批准后的源文件原样复制，不再合成新的通用项目设计文档。设计证据是实际运行的 MVP，而不是文字报告或成功编译。

每个应用都按固定顺序包含十一项能力：Bluetooth、Downloading Photos、Adding Photos、Using the Camera、Face ID、Microphone Access、Speech Recognition Access、Contacts Access、Calendar Access、Location Access、CallKit。系统权限或认证请求必须真实。只有蓝牙外设/数据、麦克风后处理和语音识别输出可以模拟。CallKit 没有用户权限弹窗，因此是唯一例外。

需要 macOS、Xcode、合适的 iOS Simulator、用于 Simulator 无法完成检查的实体 iPhone，以及 Node.js 20 或更高版本。MIT License。
