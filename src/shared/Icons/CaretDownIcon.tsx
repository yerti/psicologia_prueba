import React from "react";

interface carteDownIconProps {
  color: string;
  w?: string;
  h?: string;
}

export default function CaretDownIcon({color = "#979797", w = "16", h = "16"}:carteDownIconProps) {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M98.5 190.56L238.28 353.68C240.533 356.308 243.328 358.417 246.473 359.863C249.618 361.31 253.038 362.058 256.5 362.058C259.962 362.058 263.382 361.31 266.527 359.863C269.672 358.417 272.467 356.308 274.72 353.68L414.5 190.56C427.84 174.99 416.78 150.94 396.28 150.94H116.68C96.18 150.94 85.12 174.99 98.5 190.56Z"
        fill={color}
      />
    </svg>
  );
}
