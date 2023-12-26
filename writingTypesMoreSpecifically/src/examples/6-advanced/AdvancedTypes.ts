// 1. Mapping type
// 기존에 존재하는 타입에 readonly 속성을 부여한 버전의 타입을 새롭게 생성할 때, 사용합니다.
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface Point {
  x: number;
  y: number;
}

type ReadonlyPoint = Readonly<Point>;

// 2. Condition type
// extends 키워드를 사용해 ternary operator과 유사한 문법은 타입에서도 사용할 수 있습니다.
// 참고로 never는 절대 발생할 수 없는 타입입니다. never는 모든 타입에 할당 가능한 하위 타입입니다.
// never를 사용해 해당 타입이 무조건 T라는 걸 선언합니다.
type NonNullable<T> = T extends null | undefined ? never : T;

export type { Readonly, ReadonlyPoint, NonNullable };
