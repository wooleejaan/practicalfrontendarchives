import { ReactNode } from "react";

// PropsWithChildren은 제네릭으로 추가 타입을 받습니다.
// 단순히 내부에 React.ReactNode으로 작성하는 것보다 직관적이며 재활용하기 좋습니다.
type PropsWithChildren<P = unknown> = P & { children: ReactNode | undefined };

export type { PropsWithChildren };
