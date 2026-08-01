import React from 'react';

function FloatingHearts() {
  const hearts = Array.from({ length: 20 });

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((_, index) => (
        <span
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
            fontSize: `${16 + Math.random() * 20}px`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}

export default FloatingHearts;