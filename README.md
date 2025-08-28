# hamzayarkhan_portfolio

A basic portfolio scaffold built with Vite, React, TypeScript, Tailwind CSS, and shadcn/ui (Radix UI). It includes sensible defaults for routing, theming, forms/validation, charts, and a fast dev/build workflow.

Stack
Build tool: Vite (dev, build, preview)

UI: React 18 + TypeScript

Styling: Tailwind CSS + tailwindcss-animate + tailwind-merge

UI components: shadcn/ui + Radix primitives (dialogs, menus, tooltips, etc.)

Icons: lucide-react

Routing: react-router-dom

Forms: react-hook-form + zod + @hookform/resolvers

State/data: @tanstack/react-query (optional for fetching/caching)

Theming: next-themes (applied for React SPA theming)

Extras: Embla carousel, Recharts, cmdk, sonner toasts, EmailJS for contact

Getting started
Install

npm install

Run dev server

npm run dev

Open the printed local URL (usually http://localhost:5173)

Lint (optional)

npm run lint

Build for production

npm run build

Output goes to dist/

Preview production build

npm run preview

Scripts
dev: starts Vite dev server

build: creates a production build

build:dev: development-mode build (useful for quick tests)

lint: runs eslint

preview: serves the built dist folder

Project structure (suggested)
index.html: Vite entry HTML

src/

main.tsx: app entry

App.tsx: root component/layout

routes/: route components and route config

components/: shared UI and shadcn wrappers

lib/: utility helpers (e.g., cn, constants)

features/: domain-specific sections (e.g., projects, contact)

styles/: Tailwind globals (if used)

public/: static assets

tailwind.config.js / postcss.config.js: Tailwind setup

tsconfig.json: TypeScript config

vite.config.ts: Vite config

eslint config files

Styling and UI
Tailwind is preconfigured; use utility classes for layout and spacing.

shadcn/ui components rely on Radix primitives; compose accessible UI quickly.

tailwind-merge helps resolve conflicting Tailwind classes.

tailwindcss-animate provides small animation utilities.

Forms and validation
Use react-hook-form for forms and zod schemas for validation.

Add @hookform/resolvers to bridge zod with react-hook-form.

Example pattern:

Define zod schema (e.g., contact form).

Use useForm with zodResolver(schema).

Display errors under inputs.

Routing
react-router-dom is installed for SPA navigation.

Suggested pattern:

routes/index.tsx for route definitions

Lazy-load page components where helpful

Theming
next-themes enables light/dark system-aware themes.

Wrap the app with ThemeProvider and use a toggle tied to class strategy.

Data fetching (optional)
@tanstack/react-query is included for caching and async states.

Wrap the app with QueryClientProvider if using server data.

Contact integration (optional)
@emailjs/browser can send messages directly from the contact form.

Store public keys in environment variables; never commit secrets.

Add a .env (e.g., VITE_EMAILJS_PUBLIC_KEY=...) and reference import.meta.env.

Charts and extras (optional)
Recharts for simple data viz.

Embla carousel for lightweight carousels.

cmdk for a command palette experience.

sonner for toast notifications.

Environment variables
Create a .env (local only) for any keys:

VITE_* variables are exposed to the client.

Example:

VITE_EMAILJS_PUBLIC_KEY=...

VITE_EMAILJS_SERVICE_ID=...

VITE_EMAILJS_TEMPLATE_ID=...

Never commit actual secrets; add .env to .gitignore.

Deployment
Static hosting: Build and upload dist/ to any static host (Netlify, Cloudflare Pages, GitHub Pages).

Vercel/Netlify: Connect repo; auto-builds on push with default Vite settings.

Ensure correct base path if deploying to a subpath (configure base in vite.config.ts if needed).

Commands (quick reference)
Start: npm run dev

Build: npm run build

Preview: npm run preview

Lint: npm run lint


Notes
This is a basic starter: remove unused packages to keep the bundle lean.

For shadcn/ui, generate only the components actually needed and delete extras.

Keep images optimized and prefer modern formats where possible.
