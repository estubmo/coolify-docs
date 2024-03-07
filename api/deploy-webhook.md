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
<DividePage :top=100>
<template #left>

# Deploy webhook
Deploy a resource programmatically.

## Authorization
API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI, more info [here](/api/authentication).


## Query Parameters

| Name    | Type      | Description                                               |
| ------- | --------- | --------------------------------------------------------- |
| `uuid`  | `string`  | Deployable resource UUID. Could be comma separated list. |
| `tag`   | `string`  | Deployable tags. Could be comma separated list           |
| `force` | `boolean` | Deploy without cache.                                     |

</template>
<template #right>

### Request

::: code-group
```bash [by uuid]
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/deploy?uuid=zow8w44"
  
```
```bash [by tag]
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/deploy?tag=tag1"
```
```bash [by tag with force]
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/deploy?tag=tag1&force=true"
```
:::
::: code-group
```bash [multiple uuids]
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/deploy?uuid=zow8w44,x8wggcg"
```
```bash [multiple tags]
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/deploy?tag=tag1,tag2"
```
:::

### Response (200)

::: code-group

```json [by uuid/tag]
{
  "message": [
    "Application Test1 deployment queued.",
  ],
  "details": [
    {
      "resource_uuid": "zow8w44",
      "deployment_uuid": "ncok04w"
    }
  ]
}
```
```json [multiple uuid/tag]
{
  "message": [
    "Application Test1 deployment queued.",
    "Application Test2 deployment queued.",
  ],
  "details": [
    {
      "resource_uuid": "zow8w44",
      "deployment_uuid": "ncok04w"
    },
    {
      "resource_uuid": "x8wggcg",
      "deployment_uuid": "s4ss0gs"
    }
  ]
}
```
:::

### Response (404)

::: code-group

```json
{
  "error": "No resources found.",
  "docs": "https://coolify.io/docs/api/deploy-webhook"
}
```
:::


</template>
</DividePage>
