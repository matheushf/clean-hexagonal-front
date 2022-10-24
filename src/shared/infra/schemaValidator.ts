import { z, ZodError } from 'zod';

export function validateSchema(values: any, schema: z.ZodObject<any>) {
  try {
    return !!schema.parse(values);
  } catch (error: any) {
    if (error instanceof ZodError) {
      return error.formErrors.fieldErrors;
    }

    return error;
  }
}
