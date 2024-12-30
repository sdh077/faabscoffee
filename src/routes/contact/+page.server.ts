import { supabase } from '$lib/supabase-client';
import type { Actions } from './$types';

export const actions = {
  contact: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name');
    const phone = data.get('phone');
    const description = data.get('description');

    const contact = {
      name,
      phone,
      description,
      purpose: 'normal'
    }
    const { error } = await supabase.from('contact_business').insert(contact).select().single()

    return error ? { success: false, error } : { success: true };
  }
} satisfies Actions;