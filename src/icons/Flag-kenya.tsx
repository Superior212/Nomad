import * as React from "react";

function FlagKenya(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" {...props}>
      <path d="M5.556 18.889h68.889V61.11H5.555V18.889z" fill="#5C9E31" />
      <path d="M5.556 18.889h68.889v14.444H5.555V18.89z" fill="#333" />
      <path
        d="M5.556 33.889h68.889V46.11H5.555V33.889z"
        fill="#D22F27"
        stroke="#fff"
        strokeWidth={4.528}
        strokeMiterlimit={10}
      />
      <path
        d="M32.5 52.99l15-25.98-15 25.98zm0-25.98l15 25.98-15-25.98z"
        fill="#fff"
      />
      <path
        d="M32.5 52.99l15-25.98m-15 0l15 25.98"
        stroke="#fff"
        strokeWidth={2.264}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.257 27.841a.556.556 0 00-.514 0 13.667 13.667 0 00-6.965 12.16 13.666 13.666 0 006.963 12.158c.08.041.167.063.257.063h.004c.09 0 .177-.022.256-.063A13.666 13.666 0 0047.222 40a13.668 13.668 0 00-6.965-12.159z"
        fill="#D22F27"
      />
      <path
        d="M46.337 35.001A7 7 0 0044.444 40a7 7 0 001.894 5A14.556 14.556 0 0046.337 35zm-12.675 9.998a7 7 0 001.894-5 7 7 0 00-1.893-4.998 14.556 14.556 0 000 9.998z"
        fill="#000"
      />
      <path d="M40 30v20-20z" fill="#fff" />
      <path
        d="M40 30v20"
        stroke="#fff"
        strokeWidth={2.264}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.556 18.889h68.889V61.11H5.555V18.889z"
        stroke="#2D2D2D"
        strokeWidth={4.528}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoFlagKenya = React.memo(FlagKenya);
export default MemoFlagKenya;
