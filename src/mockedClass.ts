type MethodNameOf<T> = keyof T;
type ImplementationOf<T> = T[keyof T];
type GenericClass<T> = (new (...args: any[]) => T);
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type TypesByMethodNames<T> = {
  [K in keyof T]?: T[K] extends (...args: any[]) => infer R ? Partial<R> : never;
}
type ResolvedTypesByMethodNames<T> = {
  [K in keyof T]?: T[K] extends (...args: any[]) => infer R ? UnwrapPromise<R> : never;
}

class MockedClassInstance {};
/**
 * Creates a mock instance of a given class with customized method implementations, 
 * where method return values are automatically unwrapped if they are promises.
 * This function makes it easier to .
 * 
 * @param Class - The class to mock.
 * @param givenMethods - An object containing customized key-value pairs where the key 
 * is the method name and the value is the resolved method value.
 * @returns A mocked instance of the provided class with overridden methods.
 */
export function mockResolvedClass<T>(
  Class: GenericClass<T>,
  givenMethods?: ResolvedTypesByMethodNames<T>
): T {
  const MockedClass = rawInstance(Class);
  if (!givenMethods) return MockedClass;

  for (const classMethod in givenMethods) {
    const methodName = classMethod as MethodNameOf<T>;
    const mockImplementation = () => givenMethods[methodName];

    MockedClass[methodName] = mockImplementation as ImplementationOf<T>;
  }

  return MockedClass;
}

/**
 * Creates a mock instance of a given class with customized method implementations.
 * @param Class - The class to mock.
 * @param methods - An object containing customized key-value pairs where the key 
 * is the method name and the value is the returned/resolved method value.
 * @returns A mocked instance of the provided class with overridden methods.
 */
export function mockClass<T>(
  Class: GenericClass<T>,
  givenMethods?: TypesByMethodNames<T>
): T {
  const MockedClass = rawInstance(Class);
  if (!givenMethods) return MockedClass;

  for (const classMethod in givenMethods) {
    const methodName = classMethod as MethodNameOf<T>;
    const mockImplementation = () => givenMethods[methodName];

    MockedClass[methodName] = mockImplementation as ImplementationOf<T>;
  }

  return MockedClass;
}

/**
 * Creates a raw mock instance of a given class with no method implementations.
 * This function is intended for use with testing frameworks like jest (spyOn) when
 * you want to set up manual method spies. Alternatively, consider using
 * {@link createTestDouble} for more comprehensive method mocking.
 * 
 * @param Class - The class to mock.
 * @returns A mocked instance of the provided class with no implemented methods.
 */
export function rawInstance<T>(Class: GenericClass<T>): T {
  const MockedClass = new MockedClassInstance() as T;
  const classMethods = Object.getOwnPropertyNames(Class.prototype).filter(
    methodName =>
      methodName !== 'constructor' &&
      typeof Class.prototype[methodName] === 'function'
  );

  for (const classMethod of classMethods) {
    const methodName = classMethod as MethodNameOf<T>;
    const mockImplementation = () => { 
      throw new Error(`Method ${classMethod} not implemented`);
    };
    MockedClass[methodName] = mockImplementation as ImplementationOf<T>;
  }

  return MockedClass;
}
