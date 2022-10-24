import { z } from 'zod';

export const DogSchema = z.object({
  name: z.string().min(4),
});
