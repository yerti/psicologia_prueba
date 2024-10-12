'use client'
import React from "react";

interface IconProps {
  color: string;
}

export default function IconTest({color}: IconProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4313 2.55017H6.43127C5.90084 2.55017 5.39213 2.76088 5.01706 3.13596C4.64199 3.51103 4.43127 4.01974 4.43127 4.55017V20.5502C4.43127 21.0806 4.64199 21.5893 5.01706 21.9644C5.39213 22.3395 5.90084 22.5502 6.43127 22.5502H18.4313C18.9617 22.5502 19.4704 22.3395 19.8455 21.9644C20.2206 21.5893 20.4313 21.0806 20.4313 20.5502V8.55017L14.4313 2.55017Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.4313 2.55017V8.55017H20.4313"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4313 13.5502H8.43127"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4313 17.5502H8.43127"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.4313 9.55017H9.43127H8.43127"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
