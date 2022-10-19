import { AxiosAdapter } from '../adapter/axios';
import { HomeService } from './homeService';

export function DogServices() {
  const http = AxiosAdapter;

  return {
    home: HomeService(http),
  };
}
