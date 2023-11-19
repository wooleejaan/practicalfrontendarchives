// Record<Key, Value> 형태로 사용합니다.
// key-value 형태의 객체 타입을 생성합니다.
// 타입스크립트의 유틸리티 타입 중 하나이며, 인덱스 시그니처와 비슷합니다.
type ObjectType = {
  [orders: string]: number;
};
type ObjectRecord = Record<string, number>;

const obj1: ObjectType | ObjectRecord = {
  a: 1,
  b: 2,
};

// Record는 인덱스 시그니처와 달리, key로 문자열 리터럴을 사용할 수 있습니다.
// 인덱스 시그니처에서 문자열 리터럴을 사용하려면, Mapped를 사용해야 합니다.
type Alphabet = "a" | "b";

type ObjectType2 = {
  [orders in Alphabet]: number;
};
type ObjectRecord2 = Record<Alphabet, number>;

const obj2: ObjectType2 | ObjectRecord2 = {
  a: 1,
  b: 2,
};

// 인터페이스의 key를 재사용하려면 keyof를 사용해야 합니다.
interface IAlphabet {
  a: number;
  b: number;
}
type ObjectType3 = {
  [order in keyof IAlphabet]: number;
};
type ObjectRecord3 = Record<keyof IAlphabet, number>;
const obj3: ObjectType3 | ObjectRecord3 = {
  a: 1,
  b: 2,
};

// 인터페이스 혹은 타입 중 인터페이스로 통일하기로 했다면,
// 인터페이스 안에서 Mapped를 사용하려면 내부 속성으로만 지정 가능합니다.
// 그게 아니라면 Record를 사용하면 됩니다.
// 단, Record는 옵셔널 정보(?)를 포함하지 않으므로 사용 시 주의해야 합니다.
interface IObjectType {
  data: {
    [order in keyof IAlphabet]: number;
  };
}

const obj4: IObjectType["data"] = {
  a: 1,
  b: 2,
};
const obj5: Record<keyof IAlphabet, number> = {
  a: 1,
  b: 2,
};

export type {
  ObjectType,
  ObjectType2,
  ObjectRecord,
  ObjectRecord2,
  ObjectType3,
  ObjectRecord3,
  IObjectType,
};
export { obj1, obj2, obj3, obj4, obj5 };
