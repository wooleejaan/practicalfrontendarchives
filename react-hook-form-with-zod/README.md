# React hook form with zod

## Features

[기본적인 react form 컴포넌트](./components/form-without-rhf.tsx)

- useState로 input value를 관리합니다.
- onChange 이벤트를 통해 상태를 동기화합니다.
- input의 minLength, maxLength, required 속성을 사용해 필수 조건을 부여합니다.
- button의 경우 disabled 여부를 bool 상태로 관리합니다.

[React Hook Form을 통해 구현한 form 컴포넌트](./components/form-with-rhf.tsx)

- ReactHookForm은 불필요한 재렌더링을 막습니다.
- 라이브러리 의존성이 낮아 가볍습니다.
- 하나의 form을 관리하기 위해 필요했던 많은 state들을 추상화된 useForm으로 대체할 수 있습니다.

[RHF에 zod를 조합해 validation을 통일한 form 컴포넌트](./components/form-with-rhf-and-zod.tsx)

- 패키지 설치 `npm i zod @hookform/resolvers`
- RHF를 사용하면, 클라이언트 단의 validation을 쉽게할 수 있지만, input 값의 validation은 input 안에 한정되므로, zod를 통해 서버로 전송하는 로컬 state에 저장하든 할 때 통일된 데이터 구조를 유지할 수 있습니다.
- zod를 사용하면, input마다 required를 검증할 필요 없습니다.getValues도 필요 없습니다.
- 검증을 분산하지 않고, zod schema를 통해 통일할 수 있습니다.

## References

### to be read
