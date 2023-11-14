# Simple testing

## Features

## 패키지 설치 jest, testing-library

패키지를 설치합니다.

```bash
npm i -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

config mjs 파일을 작성합니다. mjs 파일은 기본적으로 ECMAScript 모듈임을 명시적으로 나타냅니다.

```js
// jest.config.mjs

import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config = {
  testEnvironment: "jest-environment-jsdom",
};

export default createJestConfig(config);
```

package scripts에 test 명령어를 추가합니다.

```js
// package.json
"test": "jest test --watch"
```

### Button 테스트 코드와 컴포넌트 생성

루트 경로에 `__tests__` 폴더를 생성합니다.

Button 컴포넌트에 대한 테스트 코드를 `__tests__/components/Button/Button.test.tsx`에 작성합니다.

```js
// __tests__/components/Button/Button.test.tsx

import { render, fireEvent, screen } from "@testing-library/react";

import Button from "@/components/Button";

describe("<Button />", () => {
  test("renders label correctly", () => {
    const label = "Click";
    const onClickMock = jest.fn();
    render(<Button label={label} onClick={onClickMock} />);

    const buttonElement = screen.getByText(label);

    expect(buttonElement.textContent).toEqual(label);
  });
  test("calls onClick when clicked", () => {
    const testId = "btn";
    const label = "Click";
    const onClickMock = jest.fn();

    render(<Button label={label} onClick={onClickMock} />);

    const buttonElement = screen.getByTestId(testId);

    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
```

그리고 터미널에서 `npm run test`를 실행하면 됩니다. toHaveBeenCalledTimes에 2를 넣으면 실패합니다.

### Display 컴포넌트 및 테스트 코드 작성

```js
// __tests__/components/Display/Display.test.tsx

import React from "react";
import { render, screen } from "@testing-library/react";

import Display from "@/components/Display";

test("renders the correct count", () => {
  const count = 5;

  render(<Display count={count} />);

  const displayElement = screen.getByTestId("display-count");

  expect(displayElement.textContent).toContain(`Count: ${count}`);
});
```

### Home 페이지 제작 및 테스크 코드 작성

홈페이지에서 지금까지 만든 Button, Display 컴포넌트를 `app/page.tsx`에서 조립하고,<br>
그리고 homepage에 대한 테스트 코드를 작성합니다. `__tests__/pages/Home.test.tsx`

그리고 `npm run test`를 실행해 테스트를 진행합니다.

### 네트워크 요청을 테스트하기 위한 msw

msw와 axios를 설치합니다. (msw는 1.2.3 버전을 사용합니다.)

```bash
npm i axios msw
```

`mocks/`에서 모킹용 서버와 핸들러를 작성합니다.

그리고 `jest.setup.ts` 파일에 셋업 코드를 작성합니다.

PostCard 컴포넌트와 테스트 코드를 작성하고 테스트를 마칩니다.

## References

- [Nextjs Testing. Jest, React testing library, msw, Typescript, Hooks.](https://www.youtube.com/watch?v=4X3vfTdi6uA)
- [Configuring Jest](https://jestjs.io/docs/next/configuration)
