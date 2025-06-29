import React from 'react';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-background">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-5"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--muted)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
};

export default Background;