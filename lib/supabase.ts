import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://spxzntyzbmodrwhvorbs.supabase.co'
const supabaseKey = 'sb_publishable_lURq-NIfBH2_eDBTz9xUGg_cxuBV7-w'

export const supabase = createClient(supabaseUrl, supabaseKey)