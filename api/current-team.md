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

# Team Current
Get the `Team` details of the currently authenticated `Team`.

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
  "https://api.coolify.io/v1/team/current"
  
```
:::

### Response

::: code-group

```json [200]
 {
  "id": 0,
  "name": "Root Team",
  "description": "The root team",
  "personal_team": true,
  "created_at": "2024-03-06T14:27:47.000000Z",
  "updated_at": "2024-03-07T11:56:57.000000Z",
  "smtp_enabled": false,
  "smtp_from_address": null,
  "smtp_from_name": null,
  "smtp_recipients": null,
  "smtp_host": null,
  "smtp_port": null,
  "smtp_encryption": null,
  "smtp_username": null,
  "smtp_password": null,
  "smtp_timeout": null,
  "smtp_notifications_test": true,
  "smtp_notifications_deployments": true,
  "smtp_notifications_status_changes": true,
  "discord_enabled": false,
  "discord_webhook_url": null,
  "discord_notifications_test": true,
  "discord_notifications_deployments": true,
  "discord_notifications_status_changes": true,
  "smtp_notifications_database_backups": true,
  "discord_notifications_database_backups": true,
  "show_boarding": false,
  "resend_enabled": false,
  "resend_api_key": null,
  "use_instance_email_settings": true,
  "telegram_enabled": false,
  "telegram_token": null,
  "telegram_chat_id": null,
  "telegram_notifications_test": true,
  "telegram_notifications_deployments": true,
  "telegram_notifications_status_changes": true,
  "telegram_notifications_database_backups": true,
  "telegram_notifications_test_message_thread_id": null,
  "telegram_notifications_deployments_message_thread_id": null,
  "telegram_notifications_status_changes_message_thread_id": null,
  "telegram_notifications_database_backups_message_thread_id": null,
  "custom_server_limit": null,
  "pivot": {
    "user_id": 0,
    "team_id": 0,
    "role": "owner"
  }
}
```
:::


</template>
</DividePage>
