# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<!-- setup of react applciation setup -->
1. Create React App with TypeScript: 

npx create-react-app auth-module --template typescript
cd auth-module

2. Install Tailwind CSS:

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


3. Configure Tailwind CSS:

- Update tailwind.config.js:
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

- Update src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

- Install Axios:
npm install axios



