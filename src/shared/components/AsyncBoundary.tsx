import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

interface AsyncBoundaryProps {
  children: React.ReactNode;
  loadingFallback: React.ReactNode;
  errorFallback: React.ReactNode;
  onRetry?: () => void;
}

export default function AsyncBoundary({ children, loadingFallback, errorFallback, onRetry }: AsyncBoundaryProps) {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => {
        if (errorFallback) {
          return errorFallback;
        }
        const message = error instanceof Error ? error.message : '알 수 없는 오류가 발생했어요.';
        return (
          <div>
            <p>{message}</p>
            {onRetry && (
              <button
                onClick={() => {
                  resetErrorBoundary();
                  onRetry();
                }}
              >
                다시 시도
              </button>
            )}
          </div>
        );
      }}
    >
      <Suspense fallback={loadingFallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
