# design patterns in react

## Features

### The Singleton Pattern

어플리케이션 전체에서 컴포넌트가 오직 하나의 인스턴스만 갖도록 합니다.<br>
즉, 생성자가 여러 번 생성되더라도 실제 생성되는 객체는 하나이며, 최초 생성 이후에는 기존 객체를 재사용합니다.

- 한 개의 인스턴스만 사용하므로 메모리 측면의 이점이 존재합니다.
- 최초 생성 이후에는 기존 인스턴스를 재사용하므로 속도가 빠릅니다.
- 여러 곳에서 하나의 인스턴스를 사용하므로 데이터 공유가 쉽지만, 반대로 문제가 생길 수도 있습니다.

[example](./src/pages/singleton.page.tsx)

### The Observer Pattern

옵저버(관찰자)들과 피관찰자(대상자)가 존재합니다.<br>
대상자의 상태 변화가 발생할 때마다, 대상자는 각 관찰자들에게 통보합니다.<br>
관찰자들은 알림을 받아 조치를 취합니다.<br>
관찰자와 대상자는 서로가 누구인지 인식하지 않아도 됩니다. 단지 변경사항을 공유하고 반영합니다.

[example](./src/pages/observer.page.tsx)

### The Factory Pattern

객체 지향 패턴의 기본 원칙 중 하나는 확장성이 있되, 수정에 있어서는 닫혀있어야 한다는 점입니다.<br>
모듈을 수정하지 않아도 모듈 기능을 확장할 수 있어야 하며,<br>
수정이 일어날 수 있는 부분과 그렇지 않은 부분을 명확히 분리해야 합니다.<br>
그러므로 팩토리 패턴은, 객체 생성 인터페이스를 정의하되 인스턴스의 구체적인 형태는 하위 클래스에서 결정합니다.<br>
팩토리 패턴은 특정 조건이나 매개변수에 따라 동적으로 달라지는 컴포넌트를 구현할 때 사용합니다.

[example](./src/pages/factory.page.tsx)

### The Container Pattern (Container & Presenter)

컨테이너 패턴은 컴포넌트 내에서 역할을 2개로 쪼갭니다.<br>
container 컴포넌트는 state management, data fetching and business logic만을 담당합니다.<br>
presenter 컴포넌트는 rendering ui에만 집중합니다.<br>
가장 기본적인 관심사 분리에 해당합니다.

[example](./src/pages/container.page.tsx)

### The Higher-Order Component (HOC) Pattern

여러 개의 컴포넌트 간 행동을 공유하는 패턴입니다.<br>
주로 기존 컴포넌트에 추가 기능이나 동작을 추가하면서도, 기존 컴포넌트를 수정하지 않고 싶을 때 사용합니다.

[example](./src/pages/hoc.page.tsx)

### The Compound Components Pattern

부모 하위의 독립적인 컴포넌트를 조립하는 패턴입니다.<br>
하위 컴포넌트를 어느 정도로 독립적이게 만들 것이냐에 따라 다르지만 기본적으로 유연한 컴포넌트 구조를 만들 수 있습니다.<br>
기본적으로 상위-하위 관계가 명확하며, 상태를 공유할 수도 혹은 완전히 독립적인 조립 주체로 구현할 수도 있습니다.

[example](./src/pages/compound.page.tsx)

## References

[Understanding Design Patterns in React](https://rjroopal.medium.com/understanding-design-patterns-in-react-888afe845cae)<br>
[React Design Patterns in Action: Real-World Case Studies and Implementations](https://levelup.gitconnected.com/mastering-react-design-patterns-a-deep-dive-into-efficient-component-architectures-1f3f7c95ba09)<br>
