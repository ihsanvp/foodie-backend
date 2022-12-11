import { Request } from 'express';

interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

interface TypedPropertyDescriptor<T> {
  enumerable?: boolean;

  configurable?: boolean;

  writable?: boolean;

  value?: T;

  get?: () => T;

  set?: (value: T) => void;
}

export interface Context {
  req: Request;
  res: Response;
}

export default function GET(path: string) {
  return (target: Object, key: string, descriptor: TypedPropertyDescriptor<(ctx: Context) => Promise<any>>) => {
    const method = descriptor.value;

    if (method) {
      console.log(method.name);
    }
  };
}
