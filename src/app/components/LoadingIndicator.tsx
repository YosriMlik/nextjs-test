"use client"
import React from 'react';

  const LoadingIndicator: React.FC = () => {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="text-3xl font-medium text-gray-500">
          Loading
          <span className="inline-flex">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="animate-pulse"
                style={{ animationDelay: `${i * 200}ms`, animationDuration: '1s' }}
              >
                .
              </span>
            ))}
          </span>
        </span>
      </div>
    )
  };

  export default LoadingIndicator;