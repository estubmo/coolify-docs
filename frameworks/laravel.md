---
head:
  - - meta
    - name: description
      content: Coolify Documentation for Laravel deployment
  - - meta
    - name: keywords
      content: coolify self-hosting laravel php docker kubernetes vercel netlify heroku render digitalocean aws gcp azure nixpacks
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation for Laravel deployment
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/laravel-og-image.png
---

# Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.

Example repository [here](https://github.com/coollabsio/coolify-examples/tree/main/laravel).

## Requirements

- Set `Build Pack` to `nixpacks`
- Set `APP_KEY`
- Set `Ports Exposes` to `80` 

:::tip
If you configured your application before version beta.184 and set the `NIXPACKS_PHP_ROOT_DIR` and `NIXPACKS_PHP_FALLBACK_PATH` environment variables, you need to remove them.
:::

### Other components
If your application needs a database or Redis, you can simply create them beforehand in the Coolify dashboard.

You will receive the connection strings which you can use in your application and set them as environment variables:

```bash
DB_CONNECTION=mysql
DB_HOST=<DB_HOST>
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=

REDIS_HOST=<REDIS_HOST>
REDIS_PASSWORD=null
REDIS_PORT=6379
```