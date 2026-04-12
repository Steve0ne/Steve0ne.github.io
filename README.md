# 熊书豪个人主页（极客风改版）

## 项目结构

- `index.html`：主页结构
- `assets/css/styles.css`：视觉系统、分层动效、响应式样式
- `assets/js/script.js`：滚动显隐、导航激活、动态状态与动效强度控制

## 本地预览

在项目目录执行：

```bash
cd homepage
python3 -m http.server 8080
```

浏览器打开 `http://localhost:8080`。

## 发布前检查清单

发布前建议逐项确认：

1. 首屏 3 秒内可识别姓名、方向和主行动按钮。
2. 顶部导航锚点可跳转到 ABOUT/SKILLS/PROJECTS/AWARDS/CONTACT。
3. 邮箱和 GitHub 外链可访问。
4. 移动端（窄屏）无文本溢出，按钮可点击。
5. `prefers-reduced-motion` 下持续动画可降级（系统减少动态效果时页面应变静态）。

## 发布到 GitHub Pages

1. 同步站点文件到 `Steve0ne.github.io` 仓库根目录（保留 `.git`）。
2. 提交并推送：

```bash
git add -A
git commit -m "feat: enhance homepage visuals and motion layering"
git push origin main
```

3. 等待 GitHub Pages 发布后访问 `https://steve0ne.github.io/`。

## 快速回滚（发布异常）

若新版本上线后出现严重样式或交互问题，可快速回滚：

```bash
# 查看最近提交
git log --oneline -n 5

# 回退到上一个稳定提交（示例）
git revert <bad_commit_sha>
git push origin main
```

如需回退多个提交，优先连续执行 `git revert` 生成回滚提交，避免改写远端历史。
