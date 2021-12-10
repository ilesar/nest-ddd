export class ClassFactoryUtil {
  static create<T>(type: new () => T): T {
    return new type();
  }
}
