"use client";

import { useEffect } from 'react';
import { Button } from '../ui/button';

export default function ErrorBoundary({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

export function ErrorBoundaryHandler({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Something went wrong!</h2>
        <p className="text-muted-foreground">
          {error?.message || 'An error occurred while rendering this section. We\'ve been notified and will fix it as soon as possible.'}
        </p>
      </div>
      <Button
        variant="outline"
        onClick={() => reset?.()}
      >
        Try again
      </Button>
    </div>
  );
} 