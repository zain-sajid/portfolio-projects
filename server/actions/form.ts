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
  console.log('server: ', data.brand);
  return { message: 'Car created successfully' };
}
