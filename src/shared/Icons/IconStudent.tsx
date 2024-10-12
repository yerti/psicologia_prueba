'use client'
import React from "react";

interface IconProps {
  color?: string;
}

export default function IconStudent({color}: IconProps) {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_53_5)">
        <path
          d="M17.4313 21.5502V19.5502C17.4313 18.4893 17.0098 17.4719 16.2597 16.7217C15.5096 15.9716 14.4921 15.5502 13.4313 15.5502H5.43127C4.37041 15.5502 3.35299 15.9716 2.60285 16.7217C1.8527 17.4719 1.43127 18.4893 1.43127 19.5502V21.5502"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.43127 11.5502C11.6404 11.5502 13.4313 9.75931 13.4313 7.55017C13.4313 5.34103 11.6404 3.55017 9.43127 3.55017C7.22214 3.55017 5.43127 5.34103 5.43127 7.55017C5.43127 9.75931 7.22214 11.5502 9.43127 11.5502Z"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.4313 21.5502V19.5502C23.4306 18.6639 23.1356 17.8029 22.5926 17.1025C22.0496 16.402 21.2894 15.9017 20.4313 15.6802"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M16.4313 3.68018C17.2917 3.90048 18.0543 4.40088 18.5989 5.10249C19.1435 5.8041 19.4391 6.66701 19.4391 7.55518C19.4391 8.44335 19.1435 9.30626 18.5989 10.0079C18.0543 10.7095 17.2917 11.2099 16.4313 11.4302"
          stroke={color}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_53_5">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.431274 0.550171)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
