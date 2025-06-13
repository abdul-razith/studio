'use client';

import { ErrorBoundaryHandler } from '../components/common/error-boundary';

export default function Error({ error, reset }) {
  return <ErrorBoundaryHandler error={error} reset={reset} />;
} 