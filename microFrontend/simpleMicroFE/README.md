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
