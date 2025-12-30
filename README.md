# Lusho's Portfolio

Personal portfolio built with **React**, **TypeScript** and **Vite**, showcasing frontend development skills, clean architecture, and a secure contact form implementation.

The project focuses on performance, simplicity, and good development practices rather than unnecessary complexity.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Styled components
- Internationalization (EN / ES)

### Backend
- Vercel Serverless Functions
- Node.js runtime

### Third-party Services
- Brevo (Sendinblue) – transactional email service

---

## ✨ Features

- Responsive portfolio layout
- Multi-language support
- Contact form with real email delivery
- Secure backend integration (API keys are never exposed on the client)
- Form validation and user feedback
---

## 🔐 Contact Form – Security Approach

The contact form does **not** communicate directly with third-party services from the frontend.

Instead, form submissions are sent to a **serverless function deployed on Vercel**, which securely handles the request and communicates with the Brevo API using environment variables.

This approach ensures:
- Sensitive API keys are never exposed in the browser
- A clean separation between client and server responsibilities
- A production-ready and scalable solution, even for a small project

---