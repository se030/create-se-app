# create-se-app

bin script to create a productive scaffold for a web client project

```bash
npx create-se-app [project name]
```

```bash
npx create-se-app
npm create se-app
yarn create se-app
```

## template

current template is based on vite + React + TypeScript, and provides various setups for a productive development and cooperation

✔️ default `.prettierrc` and `.eslintrc` including module `import/order` rules

✔️ `husky pre-commit hook` to automatically lint codes before commit

✔️ `@` absolute path configuration for `./src` directory

✔️ `@types` directory as tsconfig typeRoots

✔️ other client-necessary modules such as `reset.css` and `react-router-dom`

```bash
.
├── index.html
├── package.json
├── public
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── @types
│   │   └── index.d.ts
│   ├── apis
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── styles
│   │   └── reset.css
│   └── utils
├── tsconfig.json
├── tsconfig.node.json
├── tsconfig.path.json
└── vite.config.ts
```

<br />

✨ You can create your own create- package by:

1. Fork / clone this repository

2. Replace the `template` directory with your project boilerplate

3. Rewrite `package.json` and npm publish it
