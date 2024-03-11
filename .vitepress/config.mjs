import { defineConfig } from "vitepress";
const config = {
  title: "Coolify",
  description: "Coolify Documentation",
  lastUpdated: true,
  lang: "en-US",
  base: "/docs/",
  cleanUrls: true,
  head: [
    [
      "link", {
        rel: "icon",
        href: "/favicon.png"
      },
      "script",
      {
        src: "https://cdn.tailwindcss.com",
      },
    ],
  ],
  themeConfig: {
    outline: "deep",
    search: {
      provider: "local",
    },
    logo: "/favicon.png",
    nav: [
      {
        text: "Documentation",
        link: "/"
      },
      {
        text: "API",
        link: "/api/index"
      },
    ],
    sidebar: {
      '/': [
        {
          text: "Introduction",
          items: [
            { text: "What is Coolify?", link: "/" },
            { text: "Contact", link: "/contact" },
          ],
        },
        {
          text: "Get Started",
          items: [
            { text: "Installation", link: "/installation" },
            { text: "Upgrade", link: "/upgrade" },
            { text: "Cloud", link: "/cloud" },
            {
              text: "Building Blocks",
              link: "/building-blocks",
            },
            {
              text: "No Vendor Lock-in",
              link: "/no-vendor-lock-in",
            },
            {
              text: "Password Reset",
              link: "/password-reset",
            },
            {
              text: "FAQ",
              link: "/faq",
            },
          ],
        },
        {
          text: "Guides",
          items: [
            { text: "Environment Variables", link: "/environment-variables" },
            { text: "Monitoring", link: "/monitoring" },
            { text: "DNS Settings", link: "/dns-settings" },
            {
              text: "Cloudflare",
              items: [
                { text: "Cloudflare Tunnels", link: "/cloudflare/tunnels" },
              ]
            },
            {
              text: "Docker",
              items: [
                { text: "Docker Swarm Cluster", link: "/docker/swarm" },
                { text: "Docker Compose", link: "/docker/compose" },
                { text: "Docker Registry", link: "/docker/registry" },

              ]
            },
            {
              text: "Git Providers",
              items: [
                {
                  text: "GitHub",
                  items: [
                    { text: "Integrations", link: "/git-providers/github/integration" },
                    { text: "Actions", link: "/git-providers/github/github-actions" },
                  ]
                },
                {
                  text: "GitLab",
                  items: [
                    { text: "Integrations", link: "/git-providers/gitlab/integration" },
                  ]
                },
                {
                  text: "Bitbucket",
                  items: [
                    { text: "Integrations", link: "/git-providers/bitbucket/integration" },
                  ]
                },
              ]
            },
            {
              text: "Server",
              items: [
                { text: "Multiple Servers", link: "/server/multiple-servers" },
                { text: "Build Server", link: "/server/build-server" },
                { text: "Firewall", link: "/server/firewall" },
                { text: "OpenSSH", link: "/server/openssh" },
                { text: "Oracle ARM Server", link: "/server/oracle-arm-server" },
                { text: "Switching Proxies", link: "/server/switching-proxies" },
              ]
            },
            {
              text: "Traefik",
              items: [
                { text: "Dashboard", link: "/traefik/dashboard" },
                { text: "Basic Auth", link: "/traefik/basic-auth" },
                { text: "Load-balancing", link: "/traefik/load-balancing" },
                { text: "Wildcard SSL", link: "/traefik/wildcard-certificates" },
                { text: "Redirects", link: "/traefik/redirects" },
                { text: "Dynamic Configurations", link: "/traefik/dynamic-configurations" },
              ]
            },
            {
              text: "Frameworks",
              link: "/frameworks/index",
              items: [
                { text: "SvelteKit", link: "/frameworks/svelte-kit" },
                { text: "Laravel", link: "/frameworks/laravel" },
                { text: "Django", link: "/frameworks/django" },
                { text: "Rails", link: "/frameworks/rails" },
              ]
            },
            {
              text: "Services",
              items: [
                { text: "Plausible Analytics", link: "/services/plausible-analytics" },
              ]
            },
          ],
        },

        {
          text: "Deep Dive",
          items: [
            {
              text: "Servers",
              link: "/servers",
              items: [
                { text: "Automated Cleanup", link: "/automated-cleanup" }
              ]
            },
            { text: "Applications", link: "/applications" },
            { text: "Databases", link: "/databases" },
            {
              text: "Services",
              link: "/one-click-services",
              items: [
                { text: "How To Add A Service", link: "/how-to-add-a-service" },
              ],
            },
            { text: "Domains", link: "/domains" },
            { text: "Persistent Storage", link: "/persistent-storage" },
            { text: "Backups", link: "/backups" },
            { text: "S3 Storages", link: "/s3-storages" },
            { text: "Drain Logs", link: "/drain-logs" },
            { text: "Commands", link: "/commands" },
            { text: "Custom Docker Options", link: "/custom-docker-options" },
          ],
        },
      ],
      '/api/': [
        {
          text: "API",
          items: [
            {
              text: "Authentication",
              link: "/api/authentication",
            },
            {
              text: "Deploy Webhook",
              link: "/api/deploy-webhook",
            },
            {
              text: "Team",
              items: [
                {
                  text: "Teams",
                  link: "/api/teams",
                },
                {
                  text: "Current Team",
                  link: "/api/current-team",
                },
                {
                  text: "Current Team's Members",
                  link: "/api/current-team-members",
                },
                {
                  text: "Team By ID",
                  link: "/api/team-by-id",
                },
                {
                  text: "Members By Team ID",
                  link: "/api/team-by-id-members",
                },
              ]
            },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/coollabsio/coolify" },
      { icon: "twitter", link: "https://twitter.com/heyandras" },
      { icon: "discord", link: "https://coollabs.io/discord" },
      { icon: "mastodon", link: "https://fosstodon.org/@andrasbacsai" },
    ],
  },
};
if (process.env.NODE_ENV !== "development") {
  config.head.push([
    "script",
    {
      defer: "",
      src: "https://analytics.coollabs.io/js/plausible.js",
      "data-domain": "coolify.io/docs",
    },
  ]);
}

export default defineConfig(config);
