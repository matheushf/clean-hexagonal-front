# Clean Hexagonal Frontend
(this is a work in progress)

A example of using Clean Architecture on the Frontend.
Read more about it [here](https://medium.com/@matheushf/clean-architecture-on-frontend-applications-7d724d250432)

<br>

# Running it locally

### Install all dependencies with:
`npm install`

### Install NX Cli globally:
`npm i -g add nx`

### Start the Micro-Front with
`nx run @clean-front/{package}`

# Packages and Stacks
- Monorepo
      
      Nx
- @clean-front/cat

      Vue 3, Vite, Partytown, TS
- @clean-front/dog

      React, Vite, TS
- @clean-front/duck

      Remix, TS
- @clean-front/landing

      Qwik, TS

<br>

# Todo

- (x) Add i18n
- (x) Add a page to add your own dog (should have a form using Formik)
- (x) Add Zod validation to the form
- (x) Add a component library
- (x) Make it look not so ugly
- (x) Add nw and make it a monorepo
- (x) Add a Vue.js app for cat
- (x) Add a home page with cat pics
- (x) Add a Qwick app
- ( ) Add a home page with links for Dog and Cat MF's
- ( ) Deploy it as github pages
- ( ) Refine what needs to be improved