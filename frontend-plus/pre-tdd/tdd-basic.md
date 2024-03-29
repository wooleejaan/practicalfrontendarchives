## basic TDD

TDD는 소프트웨어 설계 방법론. 옳고 그름을 떠나 TDD를 이해해보고 경험하는 걸 목표로.<br>
TDD는 짧은 주기로 반복하는 애자일과 가깝다. 테스트 시나리오(유저 시나리오)는 늘 가변적일 수밖에 없다.

### 테스트 커버리지, 테스트 코드로 인해 일을 늘리지 말자

테스트 코드는 실패 케이스를 우선으로.<br>
단순히 코드 로직 그대로 옮겨다 테스트 코드로 작성하는 건 의미 없는 행동이 될 수 있다. 단순히 테스트 행위에만 매몰되면, 일만 늘리는 꼴이 된다.

기본적인 로직을 짠 뒤, 에러가 날 수 있는 예외 상황들을 생각해내 테스트 코드를 작성하는 방식을 고려할 수 있다.

모든 함수들에 대해 테스트 코드가 필요한 건 아니다.<br>
테스트 커버리지(Test Coverage)를 높일 수 있으면 좋지만, 100%의 테스트 커버리지를 가지는 게 좋은 설계는 아닐 수 있다.

### 확장성 있는 테스트 코드, 기술서 역할을 할 수 있는 코드

테스트 코드는 기술서 목적으로 작성할 수 있다.<br>
다른 사람이 내 모든 코드를 보는 게 아니라, 테스트 코드를 읽으며 시나리오를 이해할 수 있게 도와줄 수 있다.

이런 목적 하에, 확장성 있는 테스트 코드를 작성하고자 한다면 `객체 그 자체`를 매개변수로 넘기며, 생성 그 자체에 대한 테스트 코드 힘을 빼는 게 좋다. (어떤 꼴로 객체가 만들어지는지 기술하는 목적 정도로, 나중에 최종적으로 완성할 수만 있게)

예를 들어, 아래와 같은 코드는 파라미터 유연성이 적다. 기술서로서도 목적이 불분명하다.

```js
const user = createUser("ID", "PW", "name", "addr");
const product = createProduct("productNo", "productName", 1000, 1, true, true);
const order = createOrder(
  "orderNo",
  user.userID,
  product.productNo,
  product.productName,
  product.productPrice,
  1,
  user.userAddr,
  OrderState.PayRequest
);
const pay = createPay("payNo", PayMethod.Card, order.orderPrice);
const refund = createRefund(
  "refundNo",
  pay.payPrice,
  user.userID,
  pay.payMethod
);
```

이럴 때, 아래와 같이 객체 자체를 넘겨 코드의 확장성도 고려하고, 기술서로서 보기에 명확한 코드가 된다.

```js
createOrder(user, product, ..)
createPay(user, order, ..)
createRefund(user, order, pay, ...)
```

### 테스트 코드가 필요할 수 있는 지점

레거시 코드는 개발에 있어 필연적이다.<br>
이미 문제없이 동작하고 있는 레거시 코드를 건드려 기능을 추가한다거나 해야 한다면, 두려움을 느끼기 마련이다.

이때 일반적인 생각 흐름은 다음과 같으며,

- `소스 코드 분석/이해 => 변경 => 기능 확인 => 배포 => 기도`

[다음 글](https://techblog.woowahan.com/2613/)에서는 아래와 같은 테스트 코드 기반의 레거시 제거 전략을 제시한다.

- `신규 기능 지점 판별 => 테스트 코드 작성 위치 탐색 => 의존 관계 제거 => 테스트 코드 작성 => 변경/리팩토링`
  - 테스트 코드를 바탕으로 안정적인 리팩토링을 계속 수행한다.
  - 신규 기능이 추가되더라도, 기존 레거시 코드에 테스트 코드가 없더라도, 최소한 신규 코드에 한해 테스트 코드를 작성할 수 있고 신규 코드가 레거시 코드가 되더라도 안정감을 느낄 수 있다.

즉, 안정적이고 지속적인 개발을 위해서는 테스트 코드가 필요해지는 시점이 존재한다.<br>
방법론의 옳고 그름을 떠나, 안정성을 요하는 시점에서 TDD라는 방법론이 하나의 해결책이 될 수 있다.

### 그래서 TDD는 무엇을 하는가

TDD는 결국 소프트웨어 개발 방법론 중 하나.

테스트 코드를 먼저 작성한 뒤, 구현을 하는 프로세스를 통해 테스트 코드가 개발을 주도하도록 한다.<br>
테스트 코드는 개선될 수 있는 많은 여지를 가진 최소한의 구현 코드를 담으며, 반드시 실패를 포함해야 한다.<br>
테스트 코드를 작성함으로써, 짧은 개발 주기를 가져갈 수 있고 안정적으로 개발을 할 수 있으며, 테스트 코드를 일종의 사용설명서 혹은 API 문서 등 의사소통 도구로 활용할 수 있다.<br>
테스트 코드는 구현보다는 인터페이스에 집중하는 것이다. 목표를 시각화하는 작업에 해당한다.

## References

[TDD 레슨](https://teamsparta.notion.site/TDD-3f210acd45f14cde8f7e9d792503c50d)<br>
[테스트 코드 없이 레거시 코드를 다 감수하시겠습니까?](https://techblog.woowahan.com/2613/)<br>
[TDD 이야기(TDD에 대한 오해와 진실)](http://cloudrain21.com/test-driven-development)<br>

### To be read

[가독성 좋은 테스트 코드를 작성하는 방법](https://yozm.wishket.com/magazine/detail/2435/)<br>
