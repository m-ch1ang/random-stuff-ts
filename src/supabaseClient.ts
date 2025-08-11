import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;


const supabaseUrl = process.env.REACT_APP_SUPABASE_URL as string;
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY as string;
// const supabaseUrl = 'https://najdabunwvggejgwaict.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hamRhYnVud3ZnZ2VqZ3dhaWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA3NzA0ODMsImV4cCI6MjA2NjM0NjQ4M30.V1Me38aanMQTE_zSPrm1XzHyGT9h9Dx9kejr3ZG95KA'

// console.log("URL: ", supabaseUrl)
// console.log("Key: ", supabaseKey)

export const supabase = createClient(supabaseUrl, supabaseKey);
