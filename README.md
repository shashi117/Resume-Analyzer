# 📄 AI Resume Analyzer

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)

**AI Resume Analyzer** is a modern, full-stack web application designed to help users optimize their resumes using the power of Artificial Intelligence. Built with performance and user experience in mind, it leverages the latest web technologies to provide instant feedback and analysis.

---

## ✨ Key Features

- **🤖 AI-Powered Analysis**: Get detailed insights and scoring for your resume.
- **📄 PDF Support**: Seamlessly upload and parse standard PDF resumes using `pdfjs-dist`.
- **⚡ Interactive Dashboard**: Real-time visualization of your resume's strengths and weaknesses.
- **🔒 Secure Authentication**: Robust user management and protection.
- **🎨 Modern UI/UX**: A beautiful, responsive interface built with Tailwind CSS v4 and React 19.
- **🚀 High Performance**: Powered by React Router 7 for lightning-fast server-side rendering and routing.

---

## 🛠️ Tech Stack

- **Framework**: [React Router 7](https://reactrouter.com/) (SSR, HMR)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **PDF Handling**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **File Upload**: [React Dropzone](https://react-dropzone.js.org/)
- **Tooling**: [Vite](https://vitejs.dev/)

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

- **Node.js**: Version 18 or higher is recommended.
- **npm**: Comes with Node.js.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/ai-resume-analyzer.git
cd ai-resume-analyzer
```

### 2. Install Dependencies

Install all the necessary packages using npm:

```bash
npm install
```

### 3. Environment Configuration

(Optional) If your application requires external API keys (e.g., for the AI service), create a `.env` file in the root directory:

```bash
touch .env
```

_Add your environment variables here._

### 4. Start the Development Server

Launch the application in development mode with Hot Module Replacement (HMR):

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser to see the app in action.

---

## 📜 Available Scripts

| Command             | Description                            |
| :------------------ | :------------------------------------- |
| `npm run dev`       | Starts the development server.         |
| `npm run build`     | Builds the application for production. |
| `npm run start`     | Preview the production build locally.  |
| `npm run typecheck` | Runs TypeScript type checking.         |

---

## 📂 Project Structure

```text
ai-resume-analyzer/
├── app/
│   ├── components/      # Reusable UI components
│   ├── routes/          # Application routes (pages)
│   ├── root.tsx         # Root layout and context
│   └── app.css          # Global styles
├── public/              # Static assets
├── types/               # TypeScript type definitions
├── react-router.config.ts # Router configuration
├── vite.config.ts       # Vite configuration
└── package.json         # Project dependencies and scripts
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
