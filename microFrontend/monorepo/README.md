# Turborepo Tutorial

## Features

[Documentation](./_docs/_.md)

1. turborepo-tutorial/packages/ui/index.tsx에서 ui를 관리합니다. mantine ui를 사용합니다.
2. turborepo-tutorial/packages/store/index.tsx에서 store를 관리합니다. Zustand를 사용합니다.
3. 컴포넌트를 제작하고 공통 컴포넌트로 만들고 싶을 때, 똑같은 과정을 밟으며 turborepo-tutorial/packages에 패키지로 등록합니다.

### Architecture

FE Architecture는 [다이어그램](./architecture.dio)으로 확인할 수 있습니다.

- 크게, Movies와 Playlist라는 2개의 App이 존재합니다.
- 두 App은 각각의 패키지(Movie-Content, Playlist-Content)를 사용합니다.
- 두 App은 플랫폼으로서, UI와 Store를 사용합니다.
- 두 App은 Card라는 MFEs 위에서 동작합니다.

## References

- [Creating a new monorepo](https://turbo.build/repo/docs/getting-started/create-new)
