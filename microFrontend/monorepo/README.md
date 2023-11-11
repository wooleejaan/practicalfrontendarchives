# Turborepo Tutorial

## Features

### Architecture

FE Architecture는 [다이어그램](./architecture.dio)으로 확인할 수 있습니다.

- 크게, Movies와 Playlist라는 2개의 App이 존재합니다.
- 두 App은 각각의 패키지(Movie-Content, Playlist-Content)를 사용합니다.
- 두 App은 플랫폼으로서, UI와 Store를 사용합니다.
- 두 App은 Card라는 MFEs 위에서 동작합니다.

## References

- [Creating a new monorepo](https://turbo.build/repo/docs/getting-started/create-new)
