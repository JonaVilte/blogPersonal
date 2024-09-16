import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://bhmbyktwlpvfudaufjpg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJobWJ5a3R3bHB2ZnVkYXVmanBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MDQ3MTUsImV4cCI6MjA0MTQ4MDcxNX0.TimWQRIuOs3FjtV3fkaAwC4RKgB5amH9FzjeTdjsOMk"
);

export default supabase;
