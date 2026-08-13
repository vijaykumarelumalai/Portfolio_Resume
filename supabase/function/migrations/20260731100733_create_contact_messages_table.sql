/*
# Create contact_messages table

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email address
  - `subject` (text) — optional subject line
  - `message` (text, not null) — the message body
  - `is_read` (boolean, default false) — tracks whether the portfolio owner has read it
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_messages`.
- This is a no-auth portfolio site (no sign-in screen), so the anon-key frontend
  needs to INSERT new messages. Use `TO anon, authenticated` on INSERT.
- SELECT/UPDATE/DELETE restricted to `authenticated` only (the portfolio owner
  reads and manages messages after signing into the Supabase dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages"
ON contact_messages FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact_messages" ON contact_messages;
CREATE POLICY "auth_select_contact_messages"
ON contact_messages FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "auth_update_contact_messages" ON contact_messages;
CREATE POLICY "auth_update_contact_messages"
ON contact_messages FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "auth_delete_contact_messages" ON contact_messages;
CREATE POLICY "auth_delete_contact_messages"
ON contact_messages FOR DELETE
TO authenticated
USING (true);
