# RESET v0.4 — 个人财务与身体习惯追踪

这是一个可运行、可继续开发的完整前端工程，而不只是单文件 HTML。它保留 v0.4 的记账、工资/外快收入、还款、体重、运动、习惯打卡、周汇总与 JSON 备份/恢复功能，并补上 PWA manifest 和 Service Worker 应用壳。

## 技术结构

- `index.html`：应用入口
- `src/main.js`：应用交互与数据逻辑
- `src/style.css`：界面样式
- `public/manifest.webmanifest`：添加到 Android 主屏幕所需的 Web App manifest
- `public/sw.js`：静态资源缓存和离线应用壳
- `public/icons/`：应用图标
- `deploy-ready/`：不需要构建工具、可直接上传到静态托管平台的版本
- `vite.config.js`、`package.json`：开发与构建配置

## 本地运行

需要安装 Node.js（建议当前 LTS 版本）。在项目根目录打开终端：

```bash
npm install
npm run dev
```

终端会显示本地网址。开发服务器默认监听 `0.0.0.0`，电脑和手机连接同一 Wi-Fi 时，可在手机 Chrome 访问终端显示的局域网地址。开发环境的 Service Worker 注册路径和 PWA 安装行为以实际浏览器为准。

正式构建：

```bash
npm run build
npm run preview
```

构建产物位于 `dist/`。静态托管时发布 `dist/` 内容，而不是整个源码目录。

## 部署到 Cloudflare Pages（可选）

**最简单：直接上传 `deploy-ready/`。** 这个目录已包含浏览器直接运行的静态文件，不需要安装 Node.js 或执行构建命令。创建 Cloudflare Pages 项目时选择 Direct Upload，上传 `deploy-ready/` 里的全部文件，确保 `index.html` 位于发布目录根部。Cloudflare Pages 支持上传预构建的静态资源，且静态资源请求在免费和付费计划中均免费。官方说明：[Pages 概览](https://developers.cloudflare.com/pages/) 和 [静态资源计费说明](https://developers.cloudflare.com/pages/functions/pricing/)。

如果你希望以后从源码自动部署：
1. 将整个工程推送到你自己的 Git 仓库。
2. 在 Cloudflare Dashboard 打开 Workers & Pages，创建 Pages 项目并连接仓库。
3. Framework preset 选择 Vite，Build command 填 `npm run build`，Build output directory 填 `dist`。
4. 部署后用生成的 HTTPS 地址在 Android Chrome 打开。
5. Chrome 菜单 `⋮` → `安装应用` 或 `添加到主屏幕`。

也可以部署到其他支持静态文件的 HTTPS 主机。不要把用户数据备份文件放入代码仓库。

## 数据存储与隐私边界（请务必阅读）

- 当前数据逻辑沿用 v0.4 的 `localStorage`，数据保存在当前浏览器的当前 origin 下。
- 没有账号系统、云数据库或跨设备同步。把网页托管到 HTTPS 并不会自动把记录备份到云端。
- 不要使用隐私/无痕模式记录日常数据；不要随意清理站点数据。
- 同一个主机名、协议和端口是同一个 origin。更换域名、协议、端口，或从 `file://` 切换到 `https://`，浏览器本地存储不会自动迁移。
- 每周从应用的“数据”页面导出 JSON，并把备份保存在手机之外的安全位置。恢复前先导出当前数据。
- Service Worker 只缓存静态应用资源，不缓存 JSON 导出文件，也不提供数据恢复保障。
- 如果要在不同设备间同步，需要另行开发带认证的后端/云数据库；不要把财务记录直接提交到公开 Git 仓库。

## 当前版本边界

这是个人使用的前端原型。上线后应先用测试记录验证新增、编辑、删除、刷新、导出和恢复流程，再开始录入真实财务数据。更新应用版本前务必导出备份。
