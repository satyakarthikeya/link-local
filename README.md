# JavaScript Environment Setup Guide

## Prerequisites
Before setting up the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Recommended: latest LTS version)
- [Git](https://git-scm.com/) (for version control)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Installing Node.js using NVM (Windows Only)
To install and manage Node.js versions using **NVM for Windows**:

1. Download and install **NVM for Windows** from [nvm-windows](https://github.com/coreybutler/nvm-windows/releases).
2. Open **Command Prompt (cmd)** or **PowerShell** and verify the installation:
   ```sh
   nvm version
   ```
3. Install the latest LTS version of Node.js:
   ```sh
   nvm install latest
   nvm use latest
   ```
4. Verify installation:
   ```sh
   node -v
   npm -v
   ```
   This should print the installed versions of Node.js and npm.

## Cloning the Repository
To start working on the project, clone the repository from GitHub:

```sh
git clone https://github.com/satyakarthikeya/link-local.git
cd link-local
```

## Installing Dependencies
Run the following command to install all necessary dependencies:

```sh
npm install
```
This will install both dependencies and devDependencies as defined in `package.json`.

## Running the Development Server
To start the development server, use:

```sh
npm run dev
```
By default, Vite will run the project at [http://localhost:5173/](http://localhost:5173/). Check your terminal output for the exact URL.

## Building the Project
To create a production-ready build, use:

```sh
npm run build
```
The output will be stored in the `dist/` directory.

## Previewing the Build
To preview the production build locally:

```sh
npm run preview
```

## Linting Code
To check for linting errors and maintain code quality:

```sh
npm run lint
```

## Additional Configurations
- **Vite Configuration**: Modify `vite.config.js` for additional settings.
- **ESLint Configuration**: Extend ESLint rules as needed.

## Pushing Changes to GitHub
After making changes, follow these steps to push your code:

```sh
git add .
git commit -m "Your commit message"
git push origin main  # Change 'main' if using a different branch
```

## Troubleshooting
### If `npm install` fails:
Ensure you have a stable internet connection and the correct Node.js version. Delete `node_modules` and `package-lock.json`, then retry:

```sh
rm -rf node_modules package-lock.json
npm install
```

### If port conflicts occur:
Try running:

```sh
npm run dev -- --port=3000  # Change port number if needed
```

## Conclusion
Your JavaScript environment is now set up! Start coding and enjoy building your project with React + Vite 🚀.
