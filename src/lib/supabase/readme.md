Supabase integration
Supabase is not configured yet. After the project is available:
Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local` locally and to Vercel Project Settings > Environment Variables.
Create a browser client and a server client using `@supabase/ssr`.
Configure Supabase Auth session cookies.
Create tables and enable Row Level Security.
Create a private Storage bucket and restrictive storage policies.
Test cross-customer access denial before adding real photographs.
Never place a Supabase service-role key in a `NEXT_PUBLIC_` variable or in client-side code.
