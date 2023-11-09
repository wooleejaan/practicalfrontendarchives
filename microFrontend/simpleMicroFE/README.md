# 마이크로 프론트엔드 아키텍쳐 기본 예제

`cd child-microapp` 후 `npm install & npm run start:live`

`cd parent-microapp` 후 `npm install & npm run start:live`

둘 다 webpack.config.js 코드를 통해 연결합니다.

parent-microapp는 import해오는 주체이며,<br>
child-microapp는 export하는 주체입니다.

- parent-microapp에서는 remotes를 설정해주고 (remotes로 마이크로앱을 가져올 때, 마이크로앱의 name을 정확히 가져와야 합니다.)
- child-microapp에서는 exposes를 설정해줍니다.

간단한 연습을 위해 `create-react-app` 대신 `create-mf-app`을 사용합니다.

- [create-mf-app](https://github.com/jherr/create-mf-app)
- ts는 부족한 부분이 아직 많으므로 js 버전을 사용해줍니다.

## 튜토리얼 상세 설명

[마이크로 프론트엔드 기초 튜토리얼 문서](./_docs/_.md)를 참고.

## 참고자료

- [Micro Frontend components with React Module federation](https://medium.com/@ian.rolfe/micro-frontend-components-with-react-module-federation-cc2b701058a6)

## More

여러 언어를 쪼갤 경우, iframe을 사용하는 것도 방법이다.

- [Learn About Micro Frontends with React iframes](https://blog.stackademic.com/learn-about-micro-frontends-with-react-iframes-8599fd92a1a3)
- [Micro-frontends with iframes and react components](https://github.com/maxbax/micro-frontend-iframe)
- [Iframe Microfrontends: Make React App Proper Iframe](https://dev.to/bwca/iframe-microfrontends-make-react-app-proper-iframe-12g9)
- [demo_iframe-micro-frontends](https://github.com/Bwca/demo_iframe-micro-frontends)
