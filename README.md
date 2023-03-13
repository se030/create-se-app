# create-se-app

bin script to create a productive scaffold for a web client project

```bash
yarn create se-app
yarn create se-app <project name>

npm create se-app
npm create se-app <project name>
```

```bash
npx create-se-app
npx create-se-app <project name>
```

## template

current template is based on vite + React + TypeScript, and provides various setups for a **productive development and cooperation 🧑‍💻👬**

✔️ default `.prettierrc` and `.eslintrc` including module `import/order` rules

✔️ `husky pre-commit hook` to automatically lint codes before commit

✔️ `@` absolute path configuration for `./src` directory

✔️ `@types` directory as tsconfig typeRoots

✔️ other client-necessary modules such as `reset.css` and `react-router-dom`

✔️ default github Issue, PR templates and issue-label-manager-action

```bash
template
├── .github
├── .husky
├── .eslintrc
├── .prettierrc
│
├── index.html
├── package.json
├── public
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── @types
│   ├── apis
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── pages
│   ├── routes
│   ├── styles
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

<br />

## Additional settings (manual and optional)

1. Modify `.<lint>rc`, `ISSUE_TEMPLATE`, `PULL_REQUEST_TEMPLATE`, and `labels.json` according to your team's preference.

2. Both `tsconfig.path.json` and `vite.config.ts` need to be configured when adding absolute path aliases.

3. To utilize the `issue-label-manager-action` which automatically creates issue labels defined in `.github/labels.json`:

   - Better remove `.github/workflows/label-manager.yml` if you don't need it.

   - Repository should have your github access token as `PERSONAL_TOKEN` env variable.

     ```yml
     - uses: lannonbr/issue-label-manager-action@4.0.0
         env:
           GITHUB_TOKEN: ${{ secrets.PERSONAL_TOKEN }}
     ```

     ![](https://user-images.githubusercontent.com/63814960/224627290-851777e8-9aa2-4a08-ba95-199798d91a9a.png)

     You can generate and manage these tokens at Developer settings.

     ![](https://user-images.githubusercontent.com/63814960/224628273-512d8e16-b7ff-47e9-9019-c6ff45ed001a.png)

   - And a dummy issue should be created to trigger the label creation

     ```yml
     on: issues
     ```
