import React from 'react';
import '../glitch.css'; // Import the custom CSS

export default function GlitchText({ text, size, ...props }) {
  return (
    <div className="flex">
      <div className={`glitch me-auto ${size}`} data-text={text} {...props}>
        {text}
      </div>
    </div>
  );
};
