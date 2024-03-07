---
aside: false
head:
  - - meta
    - name: description
      content: Coolify Documentation
  - - meta
    - name: keywords
      content: coolify self-hosting api documentation
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://cdn.coollabs.io/assets/coolify/api-og-image.png
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://coolify.io
  - - meta
    - property: og:title
      content: Coolify
  - - meta
    - property: og:description
      content: Self-hosting with superpowers.
  - - meta
    - property: og:site_name
      content: Coolify
  - - meta
    - property: og:image
      content: https://cdn.coollabs.io/assets/coolify/api-og-image.png
---
<script setup>
  import {DividePage} from 'vitepress-theme-api';
</script>
<style >
@import './node_modules/vitepress-theme-api/dist/style.css'
</style>
<DividePage :top="63">
<template #left>

# Coolify API
API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI.


## Generate a Token
1. Go to `Security` menu -> `API tokens`.
2. Define a name for your token and click `Create New Token`.

::: tip
You will see the token once, so make sure to copy it and store it in a safe place.
:::

## Scope
The token will only be able to access resources that are owned by the team that the token is scoped to.

</template>
<template #right>

::: info Sample token
3|WaobqX9tJQshKPuQFHsyApxuOOggg4wOfvGc9xa233c376d7
:::

</template>
</DividePage>