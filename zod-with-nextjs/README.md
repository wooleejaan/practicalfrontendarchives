# Web Components

## Features

typescript만으로는 외부 데이터를 확실하게 검증하기 어렵습니다.<br>
zod(schema validator like ZOD)와 함께 외부 데이터를 검증하는 아키텍쳐를 고려해봅니다.

[API requests from backend & Third party API](./examples/api-requests/product.tsx)

1. 타입스크립트는 컴파일 단계에서만 존재한다. 런타임 이후 백엔드의 데이터 형식이 변경된다면, 런타임 환경에서 프론트가 작성한 타입스크립트는 아무런 힘을 발휘하지 못한다.
2. 옵셔널 체이닝(`?`)을 사용하더라도 코드만 더 지저분해질 뿐이다. 게다가 옵셔널체이닝의 또 다른 문제점은 불가능한 메서드에 대해 방어 효과가 없다는 점이다. 이를 방지하기 위해 `if(typeof ... )` 같은 코드로 타입가드를 하려는 순간 코드는 더러워지기 시작한다.
3. `npm i zod`로 설치한 zod는 런타임 환경에서 의존하므로 ts의 단점을 보완한다.
4. 서드파티 api의 경우 zod로 충분하지만, 백엔드 요청의 경우 `zod` 또는 `tRPC`를 사용할 수 있다.

Form data
LocalStorage
URL (domain.com?id=5&color=blue)

## References

- [ALWAYS use Zod in these 10 places in your React app (+ Next.js / TypeScript / Zod Tutorial)](https://www.youtube.com/watch?v=AeQ3f4zmSMs)

### to be read
