import { z } from 'zod';
import { DogE } from '../entity';

export const DogSchema = z.object({
  name: z.string().min(2),
  breed: z.string().min(4),
});

export type DogFormValuesT = Partial<DogE> & {
  saveOn: 'memory' | 'storage';
};

export const dogInitialValues: DogFormValuesT = {
  name: '',
  breed: '',
  saveOn: 'memory',
};
