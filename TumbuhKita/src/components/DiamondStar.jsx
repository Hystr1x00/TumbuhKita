import React from 'react';

const DiamondStar = ({ size = 48, color = "#FFD233", opacity = 1, style = {} }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    style={{
      ...style,
      transform: 'scaleY(2) scaleX(1.5)',
      animation: 'jiggle 2s ease-in-out infinite'
    }}
  >
    <style>
      {`
        @keyframes jiggle {
          0% { transform: scaleY(2) scaleX(1.5) rotate(0deg); }
          25% { transform: scaleY(2) scaleX(1.5) rotate(5deg); }
          50% { transform: scaleY(2) scaleX(1.5) rotate(0deg); }
          75% { transform: scaleY(2) scaleX(1.5) rotate(-5deg); }
          100% { transform: scaleY(2) scaleX(1.5) rotate(0deg); }
        }
      `}
    </style>
    <path
      d="M24 2
         C26 12, 36 22, 46 24
         C36 26, 26 36, 24 46
         C22 36, 12 26, 2 24
         C12 22, 22 12, 24 2
         Z"
      fill={color}
      fillOpacity={opacity}
    />
  </svg>
);

export default DiamondStar; 