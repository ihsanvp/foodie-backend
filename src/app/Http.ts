interface PropertyDescriptor {
  configurable?: boolean;
  enumerable?: boolean;
  value?: any;
  writable?: boolean;
  get?(): any;
  set?(v: any): void;
}

export default function GET(path: string) {
  return (target: Object, key: string, descriptor: PropertyDescriptor) => {};
}
