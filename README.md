## technologies:

- `esbuild` building tool like webpack https://esbuild.github.io/ . 

- `build/esbuild.config.mjs` the config file for es build.

- `dist` have the built files to be used in the browser.

- `src/app.ts` the app entry point.

- `src/validation.ts` module responsible for validating form inputs with reactivity, (updating the values) with every input's initial value, onInput, onBlur, ...

- `src/render.ts` a module responsible for creating DOM elements for validation messages



## Serve the App:

- run `yarn`
- run `yarn build` for production - or
- `yarn watch` for development with watching of files changes.
- to serve the application run `yarn serve` then open http://localhost:8000







