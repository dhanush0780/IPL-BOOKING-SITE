import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pcrnnyorhdfugwonmfgz.supabase.co";
const supabaseKey = "sb_publishable_apXXHKxpWsDwutxM27ZXxQ_p3JeeMF1";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);