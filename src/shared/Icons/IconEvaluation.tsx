'use client'
import React from "react";

interface IconProps {
  color?: string;
}

export default function IconEvaluation({ color }: IconProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.4313 4.55017H18.4313C18.9617 4.55017 19.4704 4.76088 19.8455 5.13596C20.2206 5.51103 20.4313 6.01974 20.4313 6.55017V20.5502C20.4313 21.0806 20.2206 21.5893 19.8455 21.9644C19.4704 22.3395 18.9617 22.5502 18.4313 22.5502H6.43127C5.90084 22.5502 5.39213 22.3395 5.01706 21.9644C4.64199 21.5893 4.43127 21.0806 4.43127 20.5502V6.55017C4.43127 6.01974 4.64199 5.51103 5.01706 5.13596C5.39213 4.76088 5.90084 4.55017 6.43127 4.55017H8.43127"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path
        d="M15.4313 2.55017H9.43127C8.87899 2.55017 8.43127 2.99789 8.43127 3.55017V5.55017C8.43127 6.10246 8.87899 6.55017 9.43127 6.55017H15.4313C15.9836 6.55017 16.4313 6.10246 16.4313 5.55017V3.55017C16.4313 2.99789 15.9836 2.55017 15.4313 2.55017Z"
        stroke={color}
        strokeWidth="2"  
        strokeLinecap="round"  
        strokeLinejoin="round"  
      />
    </svg>
  );
}
