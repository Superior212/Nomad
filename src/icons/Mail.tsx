import * as React from "react";

function Mail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 55 56" fill="none" {...props}>
      <circle cx={27.505} cy={28} r={27.484} fill="#1A1A1A" />
      <g clipPath="url(#prefix__clip0_37_1444)">
        <path
          d="M43.996 19.009v19.114a2.247 2.247 0 01-2.248 2.248H36.5V27.629l-8.995 6.748-8.994-6.748v12.743h-5.248a2.247 2.247 0 01-2.248-2.25V19.01c0-2.78 3.173-4.367 5.396-2.7l2.1 1.577 8.994 6.745 8.994-6.748 2.1-1.573c2.222-1.667 5.397-.081 5.397 2.699z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_37_1444">
          <path
            fill="#fff"
            transform="translate(11.015 11.51)"
            d="M0 0h32.981v32.981H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoMail = React.memo(Mail);
export default MemoMail;
