export interface HttpI {
  get: <T>(path: string, config?: any) => Promise<T | any>;
  post: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ) => Promise<T | any>;
  put: <T>(
    path: string,
    params?: Record<string, any>,
    config?: any,
  ) => Promise<T | any>;
  delete: <T>(path: string, config: any) => Promise<T | any>;
}
