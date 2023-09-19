import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://jwouxraaguqbaudybhiz.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3b3V4cmFhZ3VxYmF1ZHliaGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTUwMzE2MjAsImV4cCI6MjAxMDYwNzYyMH0.XNmtNznZ2RWjHp84Y910aUjyfmxtEEd-GlOD4r8D5PU';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
