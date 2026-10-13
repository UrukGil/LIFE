RESET v0.4 — 可直接上传的静态网页版本

本目录不需要 npm、Node.js 或构建命令。

Cloudflare Pages Direct Upload：
1. 登录 Cloudflare Dashboard。
2. 打开 Workers & Pages，创建 Pages 项目，选择 Direct Upload（上传静态文件）。
3. 上传本目录中的所有文件与 icons 文件夹的内容（建议先压缩本目录，再按控制台提示上传，或使用支持目录上传的界面）。
4. 部署后使用 Cloudflare 提供的 HTTPS 地址访问。

如果使用拖拽上传，确保 index.html 位于部署目录根部，而不是额外嵌套一层文件夹。

数据安全：记录只保存在当前浏览器的 localStorage 中，没有云数据库或自动同步。每周从应用的数据页面导出 JSON。不要把 JSON 备份上传到公开仓库。
