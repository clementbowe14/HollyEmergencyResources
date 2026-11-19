# Velpazo
Connecting Hollywood citizens with the resources they need in case of emergencies

## Deploy on Vercel

Import this GitHub repository into Vercel and keep **Root Directory** set to the repository root (`.`). The root `vercel.json` installs the locked dependencies in `site/`, builds the website, and serves only `site/dist/client` as a static deployment. No environment variables or backend services are required.

Use `main` as the production branch. Once Vercel's GitHub integration is connected, pull requests receive preview deployments and merges to `main` deploy to production. Creating a pull request alone does not connect the repository to Vercel.

The website uses hash navigation (`#report`, `#sandbags`, `#community`), so no SPA rewrite is necessary. The existing Sites worker output is not deployed to Vercel.

See [Vercel configuration documentation](https://vercel.com/docs/project-configuration/vercel-json).
