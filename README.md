# Stev5 Personal Homepage & Journal

A static GitHub Pages site for `Stev5`, built as a dark, premium personal homepage and journal focused on backend systems, practical AI engineering, selected work, and field notes from real delivery.

## Overview

- Static stack: `HTML + CSS + JavaScript`
- Primary entry: `index.html`
- Journal hub: `journal/index.html`
- Deployment target: GitHub Pages from the repository root

## Project Structure

- `index.html`: homepage and selected work
- `journal/`: journal index and article pages
- `assets/css/styles.css`: shared visual system, layout, and motion
- `assets/js/script.js`: reveal effects, section state, year sync, and reduced-motion support
- `assets/img/logos/`: curated technology logos used on the homepage
- `assets/img/favicon.svg`: site favicon
- `assets/img/og-cover.svg`: social sharing cover
- `assets/site.webmanifest`: site manifest

## Local Preview

Run the site from the repository root:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

## Publishing To GitHub Pages

1. Push the repository to GitHub.
2. In repository settings, open `Pages`.
3. Set the source to `Deploy from a branch`.
4. Select branch `main` and folder `/ (root)`.
5. After deployment, visit `https://steve0ne.github.io/`.

## Maintenance Notes

- This repository only tracks publishable site assets.
- Local workflow directories such as `.codex/` and `openspec/` are ignored for public publishing.
- Homepage content can be updated directly in `index.html`.
- Journal content can be updated directly in `journal/index.html` and `journal/posts/*.html`.

## License

MIT. See [LICENSE](./LICENSE).

---

# Stev5 个人主页与 Journal

这是一个部署到 GitHub Pages 的静态站点，用来承载 `Stev5` 的个人主页与 Journal。整体风格为暗色、高级、克制，重点展示精选项目、工程结果，以及围绕后端系统与 AI 工程实践的文章记录。

## 项目说明

- 技术栈：`HTML + CSS + JavaScript`
- 首页入口：`index.html`
- Journal 入口：`journal/index.html`
- 发布方式：直接从仓库根目录部署到 GitHub Pages

## 目录结构

- `index.html`：个人主页与精选案例
- `journal/`：Journal 索引页与文章详情页
- `assets/css/styles.css`：共享视觉系统、布局和动效样式
- `assets/js/script.js`：滚动显隐、导航状态、年份同步与减少动态效果支持
- `assets/img/logos/`：首页使用的技术 logo
- `assets/img/favicon.svg`：站点 favicon
- `assets/img/og-cover.svg`：社交分享封面
- `assets/site.webmanifest`：站点 manifest

## 本地预览

在仓库根目录执行：

```bash
python3 -m http.server 8080
```

然后在浏览器中打开 [http://localhost:8080](http://localhost:8080)。

## 发布到 GitHub Pages

1. 将仓库推送到 GitHub。
2. 打开仓库设置中的 `Pages`。
3. 选择 `Deploy from a branch`。
4. 分支选择 `main`，目录选择 `/ (root)`。
5. 等待发布完成后访问 `https://steve0ne.github.io/`。

## 维护说明

- 仓库只保留对外发布需要的站点资源。
- `.codex/`、`openspec/` 等本地工作流目录已被忽略，不参与公开发布。
- 首页内容直接维护在 `index.html`。
- Journal 内容直接维护在 `journal/index.html` 与 `journal/posts/*.html`。

## 许可

采用 MIT 许可证，详见 [LICENSE](./LICENSE)。
