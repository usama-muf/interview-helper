# 🚀 Interview Helper

A sleek, mobile-responsive React application designed to help you organize and review technical interview questions. Built with a premium 3-pane macOS Notes-style layout, this app makes studying topics like Spring Boot, Java, Kafka, and more a breeze.

![Screenshot placeholder](https://via.placeholder.com/800x400.png?text=Interview+Helper+Preview)

## 🌐 Live Demo

Access the live application here: **[https://usama-muf.github.io/interview-helper/](https://usama-muf.github.io/interview-helper/)**

## ✨ Features

- **3-Pane Layout**: An intuitive desktop layout (Topics Sidebar ➔ Question List ➔ Markdown Viewer).
- **Mobile Responsive**: Smartly collapses into a single-pane view with easy "Back" navigation for studying on your phone.
- **Markdown Support**: Questions and answers are written in simple Markdown (`.md`) files with YAML frontmatter. Code blocks, lists, and formatting are fully supported.
- **Premium Dark Theme**: Built with a modern, glassmorphic UI, smooth hover animations, and deep contrast for late-night studying.

## 🛠 Tech Stack

- **React 19**
- **Vite**
- **React Markdown** (for rendering rich text)
- **Vanilla CSS** (with custom properties)
- **Lucide React** (icons)
- **GitHub Pages** (deployment)

## 📝 How to Add New Questions

The app reads questions dynamically from the `src/data` directory. 

To add a new question, simply create a new Markdown (`.md`) file inside the corresponding topic and subtopic folders:

```text
src/
└── data/
    └── SpringBoot/
        └── Transactions/
            └── my-new-question.md
```

**Required File Format:**
Every file must start with YAML frontmatter (for the card title and preview), followed by the full markdown content.

```markdown
---
title: What is the @Transactional annotation?
shortAnswer: It defines the scope of a single database transaction.
---

## Detailed Answer
The `@Transactional` annotation in Spring Boot is used to...

```java
@Transactional
public void saveUser() { ... }
```
```

## 🚀 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/usama-muf/interview-helper.git
   cd interview-helper
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

## 🚀 Deploying Changes

If you add new questions or make code changes, you can automatically publish them to the live site.

1. Commit and push your code to the `main` branch.
   ```bash
   git add .
   git commit -m "Add new interview questions"
   git push origin main
   ```
2. Run the deploy script to update GitHub Pages:
   ```bash
   npm run deploy
   ```
