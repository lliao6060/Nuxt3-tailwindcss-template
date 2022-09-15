# Nuxt 3 Starter

[nuxt3 documentation](https://v3.nuxtjs.org).


### use plugins
- [Tailwind CSS v3](https://github.com/tailwindlabs/tailwindcss)
- [Eslint](https://eslint.org)
- [Headless UI](https://headlessui.dev/vue/menu) - unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS
- [@iconify/vue](https://docs.iconify.design/icon-components/vue/)
- [Pinia](https://github.com/posva/pinia)

### plugins for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)


## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3088

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

```bash
yarn start
```

## Dependencies Update

If you want to update the libraries, I left a nice command for you. Select it with space and press enter.

```bash
yarn allupdate
```
Example
```
➜  nuxt3-app git:(master) yarn allupdate
yarn run v1.22.11
$ yarn upgrade-interactive --latest
info Color legend : 
 "<red>"    : Major Update backward-incompatible updates 
 "<yellow>" : Minor Update backward-compatible features 
 "<green>"  : Patch Update backward-compatible bug fixes
? Choose which packages to update. (Press <space> to select, <a> to toggle all, <i> to invert selection)
 devDependencies
   name   range   from                       to                      url
❯◯ nuxt3  latest  3.0.0-27237303.6acfdcd  ❯  3.0.0-27238235.a1bcc53  
```

### use template
[oku-nuxt3-template](https://github.com/productdevbook/oku-nuxt3-template)