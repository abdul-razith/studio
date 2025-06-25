import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90">
      <div className="w-12 h-12 mb-4 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span className="text-lg font-semibold text-primary">Loading...</span>
    </div>
  );
} 