'use server';

import { z } from 'zod';
import { FormSchema } from '@/schemas';

export type FormState = {
  message: string;
};

export async function createCar(
  prevState: FormState,
  data: z.infer<typeof FormSchema>
) {
  const parsed = FormSchema.safeParse(data);

  if (!parsed.success) {
    return { message: 'Invalid data' };
  }

  console.log('server: ', parsed.data.brand);

  return { message: 'Car created successfully' };
}
