import { z } from 'zod';

export const FormSchema = z.object({
  brand: z.string().min(2, {
    message: 'Brand must be at least 2 characters.'
  })
});
