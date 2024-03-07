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

# Members By Team ID
Get the members (`Users`) of the `Team` by ID.

## Authorization
API request requires a `Bearer` token in `Authorization` header, which could be generated from the UI, more info [here](/api/authentication).

> The token will only be able to access resources that are owned by the team that the token is scoped to.

</template>
<template #right>

### Request

::: code-group
```bash
curl -X GET \ 
  -H "Authorization: Bearer <token>" \
  "https://api.coolify.io/v1/team/{team_id}/members"
  
```
:::

### Response

::: code-group

```json [200]
 [
  {
    "id": 0,
    "name": "Root User",
    "email": "test@example.com",
    "email_verified_at": "2024-03-06T14:27:47.000000Z",
    "created_at": "2024-03-06T14:27:47.000000Z",
    "updated_at": "2024-03-07T12:04:29.000000Z",
    "two_factor_confirmed_at": null,
    "force_password_reset": false,
    "marketing_emails": true,
    "is_notification_sponsorship_enabled": false,
    "is_notification_realtime_enabled": true,
    "is_notification_notifications_enabled": false,
    "pivot": {
      "team_id": 0,
      "user_id": 0,
      "role": "owner"
    }
  },
  {
    "id": 1,
    "name": "Normal User (but in root team)",
    "email": "test2@example.com",
    "email_verified_at": "2024-03-06T14:27:47.000000Z",
    "created_at": "2024-03-06T14:27:47.000000Z",
    "updated_at": "2024-03-06T14:27:47.000000Z",
    "two_factor_confirmed_at": null,
    "force_password_reset": false,
    "marketing_emails": true,
    "is_notification_sponsorship_enabled": true,
    "is_notification_realtime_enabled": true,
    "is_notification_notifications_enabled": true,
    "pivot": {
      "team_id": 0,
      "user_id": 1,
      "role": "member"
    }
  }
]
```
```json [404]
{
  "error": "Team not found.",
  "docs": "https://coolify.io/docs/api/team-by-id-members"
}
```
:::


</template>
</DividePage>
