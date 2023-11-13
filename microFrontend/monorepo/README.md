# Turborepo Tutorial

## Features

[Documentation](./_docs/_.md)

1. turborepo-tutorial/packages/ui/index.tsx에서 ui를 관리합니다. mantine ui를 사용합니다.

2. turborepo-tutorial/packages/store/index.tsx에서 store를 관리합니다. Zustand를 사용합니다.

3. 컴포넌트를 제작하고 공통 컴포넌트로 만들고 싶을 때, 똑같은 과정을 밟으며 turborepo-tutorial/packages에 패키지로 등록합니다.

4. 2개의 앱이 존재합니다. movies는 host, playlist는 remote 앱 역할을 합니다. 이를 위해 craco로 webpack의 Module Federation을 사용합니다.

- turborepo-tutorial/apps/movies/
- turborepo-tutorial/apps/playlist/

5. 각 앱에서 쓸 내용들을 `packages/*-content`로 추출합니다. 각각의 앱은 `packages/*-content`를 의존하는 형태가 됩니다.

- 추출을 하든, 각 모듈에서 패키지를 설치하든 뭐든 간에 top-level에서 관리하는 게 중요합니다. (`pnpm i`)
- turborepo-tutorial/packages/movies-content
- turborepo-tutorial/packages/playlist-content

### Architecture

FE Architecture는 [다이어그램](./architecture.dio)으로 확인할 수 있습니다.

- 크게, Movies와 Playlist라는 2개의 App이 존재합니다.
- 두 App은 각각의 패키지(Movie-Content, Playlist-Content)를 사용합니다.
- 두 App은 플랫폼으로서, UI와 Store를 사용합니다.
- 두 App은 Card라는 MFEs 위에서 동작합니다.

## References

- [Creating a new monorepo](https://turbo.build/repo/docs/getting-started/create-new)
- [mf-router6 github link](https://github.com/jherr/mf-router6)
