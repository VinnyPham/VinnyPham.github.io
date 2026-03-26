# Vinny — Portfolio

A dark, minimal developer portfolio built with **Next.js 14**, **TypeScript**, and **CSS Modules**.

---

## 🚀 Getting Started

### 1. Bootstrap a new Next.js app

```bash
npx create-next-app@latest portfolio \
  --typescript \
  --app \
  --no-tailwind \
  --eslint \
  --src-dir \
  --import-alias "@/*"
```

### 2. Replace the generated `src/` with the files from this project

Copy everything from this repo's `src/` into your new project's `src/`.

### 3. Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css         # Global styles, CSS variables, fonts
│   ├── layout.tsx          # Root layout (Navbar + children)
│   └── page.tsx            # Home page — assembles all sections
│
├── components/             # Reusable UI utilities
│   ├── Button.tsx          # primary | outline | ghost variants
│   ├── Button.module.css
│   ├── Card.tsx            # Hoverable card with optional accent border
│   ├── Card.module.css
│   ├── Navbar.tsx          # Sticky scroll-aware nav, mobile hamburger
│   └── Navbar.module.css
│
└── sections/               # Full-width page sections
    ├── Hero.tsx            # Full-screen hero with blinking cursor
    ├── Hero.module.css
    ├── About.tsx           # Bio + info sidebar
    ├── About.module.css
    ├── Skills.tsx          # Tech tag grid + proficiency breakdown
    ├── Skills.module.css
    ├── Projects.tsx        # Featured project + 5-card grid
    ├── Projects.module.css
    ├── Contact.tsx         # Contact form + socials + footer
    └── Contact.module.css
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Secondary BG | `#111111` |
| Card BG | `#141414` |
| Accent | `#5cffb0` |
| Display Font | Syne (800) |
| Mono Font | DM Mono |

---

## ✏️ Customization

Before deploying, update the following:

- **`Navbar.tsx`** — GitHub URL
- **`Hero.tsx`** — your GitHub + email links
- **`Projects.tsx`** — your real project URLs + descriptions
- **`Contact.tsx`** — your email, GitHub, LinkedIn URLs
- **Contact form** — wire to [Formspree](https://formspree.io/), [EmailJS](https://www.emailjs.com/), or a custom API route

---

## 🐳 Deployment

This project is ready for **Dockerization** and **AWS deployment** (EC2 + ECR):

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
EXPOSE 3000
CMD ["npm", "start"]
```
