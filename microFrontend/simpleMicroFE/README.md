# 마이크로 프론트엔드 아키텍쳐 기본 예제

`cd child-microapp` 후 `npm install & npm run start:live`

`cd parent-microapp` 후 `npm install & npm run start:live`

둘 다 webpack.config.js 코드를 통해 연결합니다.

parent-microapp는 import해오는 주체이며,<br>
child-microapp는 export하는 주체입니다.

- parent-microapp에서는 remotes를 설정해주고
- child-microapp에서는 exposes를 설정해줍니다.

간단한 연습을 위해 `create-react-app` 대신 `create-mf-app`을 사용합니다.

- [create-mf-app](https://github.com/jherr/create-mf-app)
- ts는 부족한 부분이 아직 많으므로 js 버전을 사용해줍니다.

## 튜토리얼 상세 설명

yw-playgrounds 내부 [마이크로 프론트엔드 기초 튜토리얼 문서](https://github.com/wooleejaan/yw-playgrounds/blob/main/__architecture/_micro-frontend/basic-tutorial/_.md)를 참고.

## 참고자료

- [Micro Frontend components with React Module federation](https://medium.com/@ian.rolfe/micro-frontend-components-with-react-module-federation-cc2b701058a6)

## More

여러 언어를 쪼갤 경우, iframes를 사용할 수 있다.

- [Learn About Micro Frontends with React iframes](https://blog.stackademic.com/learn-about-micro-frontends-with-react-iframes-8599fd92a1a3)
