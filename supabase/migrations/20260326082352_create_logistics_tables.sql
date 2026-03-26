/*
  # OTZ Transportation Database Schema

  1. New Tables
    - `quote_requests`
      - `id` (uuid, primary key)
      - `pickup_location` (text)
      - `delivery_location` (text)
      - `load_type` (text)
      - `weight` (text)
      - `contact_name` (text)
      - `contact_email` (text)
      - `contact_phone` (text)
      - `additional_info` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
    
    - `driver_applications`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text)
      - `cdl_type` (text)
      - `years_experience` (integer)
      - `current_employer` (text, optional)
      - `preferred_route` (text, optional)
      - `resume_url` (text, optional)
      - `additional_info` (text, optional)
      - `status` (text, default 'pending')
      - `created_at` (timestamp)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `subject` (text)
      - `message` (text)
      - `status` (text, default 'unread')
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public insert access (forms need to be submitted by anyone)
    - Add policies for authenticated admin read access
*/

CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pickup_location text NOT NULL,
  delivery_location text NOT NULL,
  load_type text NOT NULL,
  weight text NOT NULL,
  contact_name text NOT NULL,
  contact_email text NOT NULL,
  contact_phone text NOT NULL,
  additional_info text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit quote requests"
  ON quote_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all quote requests"
  ON quote_requests
  FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS driver_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  cdl_type text NOT NULL,
  years_experience integer NOT NULL,
  current_employer text DEFAULT '',
  preferred_route text DEFAULT '',
  resume_url text DEFAULT '',
  additional_info text DEFAULT '',
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE driver_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit driver applications"
  ON driver_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all driver applications"
  ON driver_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);