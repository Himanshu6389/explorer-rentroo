# 🚗 Explorer Rentroo

A modern **car rental web application** built with React and Vite. Explorer Rentroo allows users to explore available cars, view car details, manage bookings, and provides an owner dashboard for managing rental cars.

## 🌐 Live Demo

**Live Demo:** [Add your deployed URL here](https://your-live-demo-url.vercel.app)

> After deploying the project on Vercel, Netlify, or another hosting platform, replace the URL above with your actual live-demo link.

## ✨ Features

- 🏠 Responsive home page
- 🚘 Browse available rental cars
- 🔎 Car listings and car-detail pages
- 📅 Booking section
- 👤 User authentication with Clerk
- 🧑‍💼 Owner dashboard
- ➕ Add cars from the owner dashboard
- 📋 View/manage listed cars
- 📝 Blog section
- 📞 Contact page
- 📱 Responsive UI
- ⚡ Fast development and production builds with Vite

## 🛠️ Tech Stack

- **React 19**
- **Vite**
- **React Router**
- **Tailwind CSS**
- **Clerk Authentication**
- **Swiper**
- **JavaScript (JSX)**
- **ESLint**

## 📁 Project Structure

```text
EXPLORER RENTROO/
└── client/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   └── owner/
    │   ├── pages/
    │   │   └── owner/
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── index.html
    ├── package.json
    └── vite.config.js
```

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/explorer-rentroo.git
cd explorer-rentroo/client
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create the environment file

Create a `.env` file inside the `client` folder:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

**Do not upload your `.env` file to GitHub.**

The project uses a Clerk publishable key for authentication. If you use your own Clerk application, create the key from your Clerk dashboard.

### 4. Start the development server

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

## 📦 Production Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## ☁️ Deploy for a Live Demo

### Option 1 — Vercel

1. Push the project to GitHub.
2. Sign in to Vercel with GitHub.
3. Import your GitHub repository.
4. Set the **Root Directory** to:

```text
client
```

5. Build command:

```text
npm run build
```

6. Output directory:

```text
dist
```

7. Add this environment variable in Vercel:

```text
VITE_CLERK_PUBLISHABLE_KEY
```

8. Deploy the project.
9. Copy the generated Vercel URL and replace the **Live Demo** link at the top of this README.

### Option 2 — Netlify

1. Push the project to GitHub.
2. Import the repository into Netlify.
3. Set the base directory to:

```text
client
```

4. Build command:

```text
npm run build
```

5. Publish directory:

```text
client/dist
```

6. Add the environment variable:

```text
VITE_CLERK_PUBLISHABLE_KEY
```

7. Deploy and copy the generated website URL into the Live Demo section.

## 📤 Correct Way to Upload This Project to GitHub

If your project ZIP is very large, **do not upload `node_modules` to GitHub**.

Your uploaded project should NOT contain:

```text
node_modules/
dist/
.env
```

Your project already has a `.gitignore` that excludes `node_modules`, `dist`, and local files. Keep that file.

### Recommended method: Git + GitHub

Open a terminal inside the **project root** and run:

```bash
git init
git add .
git commit -m "Initial commit"
```

Create a new empty repository on GitHub, then connect it:

```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/explorer-rentroo.git
git push -u origin main
```

### Important

Before running `git add .`, make sure `.env` is ignored.

You can check what Git will upload with:

```bash
git status
```

If `.env` or `node_modules` appears in the files to be committed, stop and fix `.gitignore` before pushing.

## 🧹 If You Only Have the ZIP File

Because the uploaded project contains `node_modules`, the ZIP is much larger than necessary.

Do this before uploading to GitHub:

1. Extract the ZIP.
2. Delete the `client/node_modules` folder.
3. Delete the `client/dist` folder if it exists.
4. Keep the `client/package.json` and `client/package-lock.json` files.
5. Keep `.gitignore`.
6. Do **not** upload `.env`.
7. Initialize Git in the project root.
8. Push the project using the Git commands above.

GitHub will not need `node_modules` because anyone cloning the project can recreate it with:

```bash
npm install
```

## 🔐 Environment Variables

The application uses:

```text
VITE_CLERK_PUBLISHABLE_KEY
```

Keep environment-specific configuration in `.env` and add the same variable through your deployment provider's environment-variable settings.

Never commit secret keys, passwords, private API keys, or other credentials.

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 👨‍💻 Author

**Your Name**

- GitHub: [Your GitHub Profile](https://github.com/YOUR-USERNAME)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/)

## ⭐ Show Your Support

If you like this project, consider giving it a ⭐ on GitHub.
