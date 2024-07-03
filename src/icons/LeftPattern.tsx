import * as React from "react";

function LeftPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={302} height={866} fill="none" {...props}>
      <g filter="url(#prefix__filter0_f_37_1071)">
        <mask
          id="prefix__a"
          style={{
            maskType: "alpha",
          }}
          maskUnits="userSpaceOnUse"
          x={-290}
          y={298}
          width={292}
          height={268}>
          <ellipse
            cx={-144}
            cy={432}
            rx={146}
            ry={134}
            fill="url(#prefix__paint0_linear_37_1071)"
          />
        </mask>
        <g mask="url(#prefix__a)">
          <ellipse
            cx={-144.5}
            cy={432}
            rx={211.5}
            ry={210}
            fill="url(#prefix__paint1_angular_37_1071)"
          />
        </g>
      </g>
      <defs>
        <radialGradient
          id="prefix__paint1_angular_37_1071"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0 210 -211.5 0 -144.5 432)">
          <stop stopColor="#FFCB13" />
          <stop offset={0.145} stopColor="#F8D002" />
          <stop offset={0.22} stopColor="#E4FDAF" />
          <stop offset={0.325} stopColor="#CDFB4B" />
          <stop offset={0.42} stopColor="#C7A81A" />
          <stop offset={0.505} stopColor="#FDE26D" />
          <stop offset={0.615} stopColor="#D3F96A" />
          <stop offset={0.73} stopColor="#DFFF9C" />
          <stop offset={0.84} stopColor="#C7FFB9" />
          <stop offset={1} stopColor="#F8CE3B" />
        </radialGradient>
        <linearGradient
          id="prefix__paint0_linear_37_1071"
          x1={-144}
          y1={298}
          x2={-144}
          y2={566}
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#999" />
        </linearGradient>
        <filter
          id="prefix__filter0_f_37_1071"
          x={-590}
          y={-2}
          width={892}
          height={868}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_37_1071"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoLeftPattern = React.memo(LeftPattern);
export default MemoLeftPattern;
