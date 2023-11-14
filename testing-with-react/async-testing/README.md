# Async testing in nextjs

## Features

### 패키지 설치 및 초기 설정

```bash
npm i react-icons@4.10.1

npm i -D @testing-library/jest-dom@5.16.5 @testing-library/react@14.0.0 @testing-library/user-event@14.4.3

npm i -D eslint-plugin-jest-dom@5.1.0 eslint-plugin-testing-library@6.0.1 jest@2
9.6.4 jest-environment-jsdom@29.6.4 ts-jest@29.1.1
```

package.json에 스크립트를 추가합니다.

```js
"test": "jest",
"test:watch": "jest -watchAll"
```

tsconfig의 include에 `"jest.setup.js"`를 추가합니다.

jest.setup.js 파일을 생성합니다.

```js
// jest.setup.js

// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
```

jest.config.js 파일을 생성합니다.

```js
// jest.config.js

const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  verbose: true,
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(config);
```

eslint에 plugin을 추가합니다.

```js
// .eslintrc.json

{
  "extends": [
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended"
  ]
}
```

## References

- [How to Mock a REST API Server for Testing with Jest & React Testing Library](https://www.youtube.com/watch?v=k0LPNKWCxx0)
