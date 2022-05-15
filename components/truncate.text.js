import React from 'react';

export default function TruncateText({ children }) {
  return (
    <span className="d-inline-block text-truncate" style={{ maxWidth: '100%' }}>
      {children}
    </span>
  );
}
