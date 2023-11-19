# Writing Types More Specifically

## Features

### Event Types

[Event Types](./src/examples/event.example.ts)<br>
event 타입의 경우 inline으로 작성한 mock tag에 hover하는 게 가장 정확합니다.<br>
기본적으로 MouseEvent에 제네릭으로 Element 타입을 넘겨줍니다

![Alt text](./src/public/image.png)

### Hook of Children Types

[직관적인 children type](./src/examples/children.example.ts)<br>
children type을 구체적이고 확장성있게 작성합니다.

![Alt text](./src/public/image-1.png)

### Record와 Mapped

[Record와 Mapped](./src/examples/record&mapped.example.ts)<br>
Record와 Mapped를 사용해 객체 타입을 지정합니다.

## References

[Type the onClick event of an element in React (TypeScript)](https://bobbyhadz.com/blog/typescript-react-onclick-event-type)<br>
[[Typescript] Record 타입 사용하기 (feat. Mapped Type)](https://cheeseb.github.io/typescript/typescript-record/)<br>
