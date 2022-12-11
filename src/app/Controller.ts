export default function Controller() {
  return (cls: Function) => {
    cls.prototype.routes = [];
  };
}
