import * as React from "react";

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 55 56" fill="none" {...props}>
      <circle cx={27.484} cy={28} r={27.484} fill="#1A1A1A" />
      <mask
        id="prefix__a"
        style={{
          maskType: "luminance",
        }}
        maskUnits="userSpaceOnUse"
        x={16}
        y={17}
        width={23}
        height={22}>
        <path d="M16.49 17.006h21.988v21.988H16.491V17.006z" fill="#fff" />
      </mask>
      <g mask="url(#prefix__a)">
        <path
          d="M33.806 18.037h3.372l-7.366 8.44 8.666 11.487h-6.785l-5.318-6.966-6.077 6.966h-3.375l7.877-9.031-8.31-10.895h6.958l4.8 6.366 5.558-6.367zM32.62 35.94h1.869L22.427 19.954h-2.004L32.62 35.941z"
          fill="#fff"
        />
      </g>
    </svg>
  );
}

const MemoTwitter = React.memo(Twitter);
export default MemoTwitter;
