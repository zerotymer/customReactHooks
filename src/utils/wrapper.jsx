import { Suspense } from "react";

const defaultFallback = <div>Loading...</div>;

export function withSuspenseComponent(element, fallback = defaultFallback) {
  return <Suspense fallback={fallback}>{element}</Suspense>;
}

export function withSuspenseRender(Component, fallback) {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
}
