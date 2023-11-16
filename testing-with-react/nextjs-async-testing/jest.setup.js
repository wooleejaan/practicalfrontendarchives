// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "whatwg-fetch"; // jest가 테스트를 실행할 때, whatwg-fetch를 가져옵니다.
import { server } from "@/mocks/server"; // 우리가 만든 서버도 가져옵니다.

// 여기에 작성하면 전역적으로 적용됩니다. 테스트 전에 항상 모의서버가 열리게 됩니다.

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clear up after the tests are finished.
afterAll(() => server.close());
