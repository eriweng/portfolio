# Portfolio Website (Eri Weng)

這是一個展示個人作品、技能與經歷的現代化作品集網站。採用 Cyberpunk / Futuristic 設計風格，強調沈浸式互動體驗與精確的 UI/UX 呈現。

🔗 **Live Demo**: [https://eriweng.github.io/portfolio/](https://eriweng.github.io/portfolio/)

## ✨ 特色功能 (Features)

- **🎨 前衛視覺設計 (Cyberpunk UI)**
  - 掃描線 (Scanlines)、霓虹光暈與動態背景效果。
  - **日/夜間模式 (Dark/Light Mode)**：支援一鍵切換，並自動偵測系統偏好。
  - **Spotlight 互動**：跟隨滑鼠的動態光源效果。

- **🌐 多語系支援 (i18n)**
  - 完整支援 **英文 (EN)**、**繁體中文 (繁)** 與 **簡體中文 (简)**。
  - 自動語言偵測與切換。

- **📱 完全響應式 (Responsive)**
  - 針對 Mobile, Tablet, Desktop 最佳化佈局。
  - 手機版側邊滑動選單。

- **⚡️ 現代化技術堆疊**
  - 使用 **React 19** + **Vite** 打造極速體驗。
  - **Tailwind CSS v4** 驅動樣式系統。
  - **Lucide React** 圖標庫。
  - **GSAP / CSS Animations** 實現流暢動效。

## 🛠️ 技術堆疊 (Tech Stack)

- **Core**: React, Vite
- **Styling**: Tailwind CSS v4, PostCSS
- **Internationalization**: i18next, react-i18next
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 🚀 本地開發 (Development)

1.  **Clone the repository**
    ```bash
    git clone https://github.com/eriweng/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 專案結構 (Structure)

```
src/
├── components/      # UI 組件 (Hero, Navbar, About...)
├── locales/         # i18n 翻譯檔 (en, zh-TW, zh-CN)
├── i18n.js          # i18n 配置
├── index.css        # 全域樣式與 Tailwind 主題變數
├── App.jsx          # 主應用程式入口
└── main.jsx         # React 渲染入口
```

## 📝 License

This project is open sourced under the MIT license.
