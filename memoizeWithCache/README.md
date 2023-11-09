# MemoizeWithCache

`npm install` -> `npm run start` or `npm run build`

# Features

## memoizePromiseFn

memoizePromiseFn는 api 호출을 지역 변수로 캐싱하는 고차함수입니다.

- 지역 변수 cache를 생성하고, 서버 상태를 cache에 저장합니다.
- api 호출에 실패할 경우 cache를 초기화합니다.
- memoization이 제대로 동작하려면, 콜백함수가 순수 함수여야 합니다. (순수함수여야 stale date issues를 방지할 수 있습니다.)
- 지역변수이므로 페이지가 reload될 경우 cache가 초기화되는 문제점이 있습니다. 그러므로 이러한 방식은 single page application에서 효과적입니다.

## References

- [Cache API Calls in JavaScript by Memoizing Promises](https://hackernoon.com/cache-api-calls-in-javascript-by-memoizing-promises)

### to be read

- [Using microtasks in JavaScript with queueMicrotask()](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide)
