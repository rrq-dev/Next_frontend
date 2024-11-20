import { createClient } from "@supabase/supabase-js";

// Masukkan URL dan API Key langsung ke sini
const supabaseUrl = "https://hpszmudxgnnnifsgodkg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhwc3ptdWR4Z25ubmlmc2dvZGtnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIxMDA5NDcsImV4cCI6MjA0NzY3Njk0N30.1qbxkmH292S32xc3bvwGVfkoKbfsFdXOKeS4_IX6-GY";

export const supabase = createClient(supabaseUrl, supabaseKey);
