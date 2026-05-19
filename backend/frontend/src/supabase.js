import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ykupntvwlltppfyjyxwh.supabase.co";
const SUPABASE_KEY = "sb_publishable_ZJn3ZckLZGXFf4dUwjTKeA_3hXQirPZ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);