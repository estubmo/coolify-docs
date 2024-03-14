---
head:
  - - meta
    - name: description
      content: Coolify Documentation - GitHub Integration
  - - meta
    - name: keywords
      content: coolify self-hosting docker kubernetes vercel netlify heroku render digitalocean aws gcp azure GitHub
  - - meta
    - name: twitter:card
      content: summary_large_image
  - - meta
    - name: twitter:site
      content: "@coolifyio"
  - - meta
    - name: twitter:title
      content: Coolify Documentation - GitHub Integration
  - - meta
    - name: twitter:description
      content: Self-hosting with superpowers.
  - - meta
    - name: twitter:image
      content: https://coolcdn.b-cdn.net/assets/coolify/github-integration-og-image.png
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
      content: https://coolcdn.b-cdn.net/assets/coolify/github-integration-og-image.png
---

# GitHub Integration

This guide will show you how to use GitHub based repositories with Coolify.

## Public Repositories

You can use public repositories without any additional setup.
1. Select the `Public repository` option in the Coolify when you create a new resource.
2. Add your repository URL to the input field, for example: `https://github.com/coollabsio/coolify-examples`

:::tip
You can only use the https URL.
::: 

3. That's it! Coolify will automatically pull the latest version of your repository and deploy it.

## Private Repositories
### With GitHub App (Recommended)
You can use private repositories with the GitHub App integration. You will get full integration with GitHub, like automatic commit deployments and pull request deployments.

1. Create a new GitHub App in the `Sources` view.
2. Create a new resource and select the `Private Repository (with GitHub App)`.
3. Choose your repository from the list.
4. That's it!

### With Deploy Keys

1. Add a private key (aka `Deploy Keys`) to Coolify and to your GitHub repository in the `Settings` / `Deploy Keys` menu.

:::tip
- You can generate a new key pair with the following command: `ssh-keygen -t rsa -b 4096 -C "
- Or you can also use Coolify to generate a new key for you in the `Security` menu.
:::

2. Create a new resource and select the `Private Repository (with deploy key)`
3. Add your repository URL to the input field, for example: `git@github.com:coollabsio/coolify-examples.git`

:::tip
You need to use the SSH URL, so the one that starts with `git@`.
:::

4. That's it!

## Automatic commit deployments with webhooks (Optional)
You can add a custom webhook URL to your GitHub repository to trigger a new deployment when you push to your repository.

:::tip
This can be set on either public or private repositories.

Not required if you use GitHub App integration.
:::

In your resource, there is a `Webhooks` menu. In the `Manual Git Webhooks` section, you can find the URL what you need to set in your GitHub repository.

1. Set a secret key in the `GitHub Webhook Secret` input field.
2. Go to your repository on GitHub and open the `Settings` / `Webhooks` menu.
3. Add the URL from Coolify to the `URL` input field and the secret token.
4. Select the `Push events` option.
5. That's it! Now when you push to your repository, Github will send a webhook request to Coolify and it will trigger a new deployment.

## Pull request deployments with webhooks (Optional)
You can add a custom webhook URL to your GitHub repository to trigger a new deployment when you create a new merge request.

:::tip
This can be set on either public or private repositories.

Not required if you use GitHub App integration.
:::

The process is the same as the previous one, but you need to select the `Pull Request` events option in the `Settings` / `Webhooks` menu.