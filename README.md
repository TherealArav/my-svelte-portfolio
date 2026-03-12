# Welcome 👏

Hi, I am Arav. Welcome to my portfolio website! I am an AI engineer who researches and builds accessible technologies. I primarily work with Computer Vision and Natural Language Processing. I hope you enjoy exploring my work!
Visit my website [here](https://aravgoyalportfolio.com/)

## Setup Project Guide

If you wish to go through the project, here are the steps to setup the repository locally on your system. 

### Creating a project

  

If you're seeing this, you've probably already done this step. Congrats!

  

```sh

# create a new project

npx sv create my-app

```

  

To recreate this project with the same configuration:

  

```sh

# recreate this project

npx sv@0.12.4 create --template minimal --no-types --add prettier eslint tailwindcss="plugins:typography" sveltekit-adapter="adapter:auto" --install npm my-svelte-portfolio

```

  

## Developing

  

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

  

```sh

npm run dev

  

# or start the server and open the app in a new browser tab

npm run dev -- --open

```

  

## Building

  

To create a production version of your app:

  

```sh

npm run build

```

  

You can preview the production build with `npm run preview`.

  

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.