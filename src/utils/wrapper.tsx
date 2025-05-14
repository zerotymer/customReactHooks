import {
  Suspense,
  type JSX,
  type LazyExoticComponent,
  type ReactNode,
} from "react";

const defaultFallback = <div>Loading...</div>;

/**
 * JSX요소를 Suspense으로 변경
 * @param element
 * @param fallback
 * @returns
 */
export function withSuspenseComponet(
  element: ReactNode,
  fallback: ReactNode = defaultFallback
) {
  return <Suspense fallback={fallback}>{element}</Suspense>;
}

/**
 * lazy()로 생성된 컴포넌트를 내부에서 Suspense로 처리하여 렌더링
 * @param Component
 * @param fallback
 * @returns
 */
export function withSuspenseRender(
  Component: LazyExoticComponent<any>,
  fallback: ReactNode = defaultFallback
): JSX.Element {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}
