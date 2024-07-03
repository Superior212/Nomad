import * as React from "react";

function BgPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 380 385" fill="none" {...props}>
      <g filter="url(#prefix__filter0_f_37_1151)">
        <mask
          id="prefix__a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={364}
          y={-578}
          width={652}
          height={1012}>
          <ellipse
            cx={690.148}
            cy={-71.916}
            rx={556.5}
            ry={227.585}
            transform="rotate(-62.71 690.148 -71.916)"
            fill="url(#prefix__paint0_linear_37_1151)"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path
            opacity={0.66}
            transform="rotate(117.289 1338.69 -475.714)"
            fill="url(#prefix__paint1_angular_37_1151)"
            d="M1338.69-475.714h1311.32v1311.32H1338.69z"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="prefix__paint1_angular_37_1151"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(126.819 952.426 589.977) scale(656.945)">
          <stop offset={0.091} stopColor="#FF00D6" />
          <stop offset={0.299} stopColor="#FFC700" />
          <stop offset={0.5} stopColor="#45F7D7" />
          <stop offset={0.725} stopColor="#4643FF" />
          <stop offset={0.9} stopColor="red" />
        </radialGradient>
        <linearGradient
          id="prefix__paint0_linear_37_1151"
          x1={690.148}
          y1={-299.502}
          x2={690.148}
          y2={155.669}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter
          id="prefix__filter0_f_37_1151"
          x={0.548}
          y={-941.47}
          width={1379.2}
          height={1739.11}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={182}
            result="effect1_foregroundBlur_37_1151"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoBgPattern = React.memo(BgPattern);
export default MemoBgPattern;
