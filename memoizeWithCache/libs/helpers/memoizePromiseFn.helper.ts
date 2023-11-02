/**
 *
 * @description a higher-order function called memoizePromiseFn that takes a function that returns a promise as input and return memoized version of the function.
 */
const memoizePromiseFn = <T>(
  func: (...arg: any[]) => Promise<T>
): ((...args: any[]) => Promise<T>) => {
  const cache = new Map<string, Promise<T>>();

  return async (...args: any[]) => {
    const context = this;
    const key = JSON.stringify(args);

    if (cache.has(key)) return cache.get(key) as Promise<T>;

    const result = func.call(context, ...args);
    cache.set(key, result);

    try {
      // 캐싱되지 않은 결과를 result에 저장하고, 나중에 await를 사용하여 결과를 반환
      const value = await result;
      return value;
    } catch (error) {
      // API 호출 실패 시, cache entry 삭제
      cache.delete(key);
      throw error;
    }

    // cache.set(
    //   key,
    //   func.call(context, ...args).catch((error: Error) => {
    //     // Delete cache entry if API call fails
    //     cache.delete(key);
    //     return Promise.reject(error);
    //   })
    // );

    // return cache.get(key) as Promise<T>;
  };
};

export default memoizePromiseFn;
