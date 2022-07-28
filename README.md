#Assignment project

- please note that the assignment is created without any framework or libs.
- the task didn't speficy any technology. so i decided to create everything from scratch to clarify some of what i'm capable to do :)


## technologies:

- `esbuild` building tool like webpack https://esbuild.github.io/ . 

- `build/esbuild.config.mjs` the config file for es build.

- `dist` have the built files to be used in the browser.

- `src/app.ts` the app entry point.

- `src/validation.ts` module responsible for validating form inputs with reactivity, (updating the values) with every input's initial value, onInput, onBlur, ...

- `src/render.ts` a module responsible for creating DOM elements for validation messages



## Serve the App:

1- run `yarn`
2- run `yarn build` for production - or
3- `yarn watch` for development with watching of files changes.
4- to serve the application run `yarn serve` then open http://localhost:8000







