// import React from 'react';

export default function Button ({ children, block, variant = 'primary', className, ...res }) {
  return (
    <div className={block ? 'd-grid' : 'd-inline-block'}>
      <button {...res} className={`btn btn-${variant} ${className}`}>{children}</button>
    </div>
  );
}
