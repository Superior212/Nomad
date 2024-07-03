import * as React from "react";

function TopPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={1440} height={421} fill="none" {...props}>
      <g filter="url(#prefix__filter0_f_37_1068)">
        <mask
          id="prefix__a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={164}
          y={-255}
          width={1113}
          height={456}>
          <ellipse
            cx={720.5}
            cy={-27.415}
            rx={556.5}
            ry={227.585}
            fill="url(#prefix__paint0_linear_37_1068)"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <path
            opacity={0.66}
            transform="rotate(-180 1376.7 363.815)"
            fill="url(#prefix__paint1_angular_37_1068)"
            d="M1376.7 363.815h1311.32v1311.32H1376.7z"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="prefix__paint1_angular_37_1068"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(126.819 761.314 1019.257) scale(656.945)">
          <stop offset={0.091} stopColor="#FF00D6" />
          <stop offset={0.299} stopColor="#FFC700" />
          <stop offset={0.5} stopColor="#45F7D7" />
          <stop offset={0.725} stopColor="#4643FF" />
          <stop offset={0.9} stopColor="red" />
        </radialGradient>
        <linearGradient
          id="prefix__paint0_linear_37_1068"
          x1={720.5}
          y1={-255}
          x2={720.5}
          y2={200.17}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
        <filter
          id="prefix__filter0_f_37_1068"
          x={-136}
          y={-555}
          width={1713}
          height={1055.17}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_37_1068"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoTopPattern = React.memo(TopPattern);
export default MemoTopPattern;
