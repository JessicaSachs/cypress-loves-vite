# Cypress 💖 Vite

Hello! This repo is for my talk at [VueConfUS on April 14th](https://us.vuejs.org/). Tickets are free, so if you like this repo, you'll probably want to watch my talk.

It is _very_ likely that some of the tests in this repo will break. Its goal is to give you a bundler setup and dependencies that work.

The latest guides are here:

[https://on.cypress.io/component-testing](https://on.cypress.io/component-testing)

### Getting Started

#### Install dependencies

```bash
yarn
```

#### Open component testing

```bash
yarn cy
```

#### Make some new files

**MyNewComponent.vue**

```vue
<template>
  <h1>Hello world! 👋</h1>
</template>
```

**MyNewComponent.cy.js**

```
import { mount } from '@cypress/vue'
import MyNewComponent from './MyNewComponent.vue' // keep the .vue, Vite needs it

describe('MyNewComponent', () => {
  it('renders', () => {
    mount(MyNewComponent).get('h1').should('have.text', 'Hello world')
  })
})
```
