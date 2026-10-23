# Alok Studio

A starter project for the Alok Studio photography website, built with Next.js, TypeScript, and planned Supabase private storage.

## What's included

- Responsive public landing page
- Starter routes for customer login, customer gallery, admin, and contact
- Organized source files under `src/`
- Supabase client helper placeholder
- Environment variable template
- Basic safe defaults and Git ignore rules

## Important

This is a starter scaffold, not a production-ready customer portal yet. Do not upload real client photos or invite real customers until authentication, database policies, private storage policies, and server-side authorization have been implemented and tested.

## Requirements

- Node.js 20.9 or newer
- npm
- GitHub account
- Vercel account
- Supabase project (we will connect this later)

## Run locally

1. Install Node.js if it is not installed.
2. Download/extract this project.
3. Open a terminal in the extracted `AlokAtudio-starter` folder.
4. Run `npm install`.
5. Copy `.env.example` to `.env.local`. Leave the Supabase values blank until your Supabase project is ready.
6. Run `npm run dev`.
7. Open http://localhost:3000.

## Upload these files to GitHub using the website

1. Extract the ZIP on your computer.
2. Open your GitHub repository `AlokAtudio`.
3. Select **Add file > Upload files**.
4. Upload the contents of the extracted folder (including `package.json`, `src`, and configuration files). Upload the contents, not the ZIP file itself.
5. Commit the files to the `main` branch.
6. In Vercel, open your existing project and confirm it is connected to this repository. Framework should be Next.js; build command and output settings can use their defaults.
7. If deployment fails, open the deployment's build log and share the error text (hide secrets).

## Security checklist before production

- Implement Supabase Auth with secure session handling.
- Enable Row Level Security on every customer-facing table.
- Use private storage buckets and storage policies.
- Verify authorization on the server for every album/photo request.
- Never expose Supabase service-role keys to the browser.
- Verify Cloudflare Turnstile tokens on the server.
- Validate and rate-limit form submissions.
- Keep email and Google Sheets secrets in Vercel environment variables.
- Test that customer A cannot view customer B's albums.
- Add privacy policy, retention rules, backup plan, and audit logging.

## Route plan

- `/` — public home
- `/login` — customer sign-in starter
- `/gallery` — customer gallery starter
- `/admin` — admin dashboard starter
- `/contact` — contact form starter
