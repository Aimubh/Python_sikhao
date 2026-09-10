-- Run this once in the Supabase SQL editor of the project you are deploying against.
-- Dashboard -> SQL Editor -> New query -> paste -> Run.
--
-- One row per account. `data` holds the password hash, the device tokens and the
-- progress, so the shape can change without a migration.

create table if not exists users (
  name       text primary key,
  data       jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- No policies are defined, so only the secret key (which bypasses row level
-- security) can touch this table. The publishable key cannot read a password
-- hash, which is the point.
alter table users enable row level security;

-- PostgREST caches the schema. Without this the API answers "Could not find the
-- table 'public.users' in the schema cache" until the cache happens to refresh.
notify pgrst, 'reload schema';
