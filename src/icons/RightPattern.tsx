import * as React from "react";

function RightPattern(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={267} height={698} fill="none" {...props}>
      <defs>
        <filter
          id="prefix__filter0_f_37_1077"
          x={0}
          y={0}
          width={892}
          height={868}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_37_1077"
          />
        </filter>
      </defs>
    </svg>
  );
}

const MemoRightPattern = React.memo(RightPattern);
export default MemoRightPattern;
