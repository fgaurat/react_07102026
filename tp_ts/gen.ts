function add<T extends number>(a: T, b: T): number {
  const r: number = a + b;
  return r;
}

const c: number = add<number>(1, 2);
