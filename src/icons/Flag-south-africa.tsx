import * as React from "react";

function FlagSouthAfrica(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_63_1786)">
        <path
          d="M71.111 11.111H14.444l27.778 18.89H80V20a8.889 8.889 0 00-8.889-8.89z"
          fill="#DE3830"
        />
        <path
          d="M14.444 68.889h56.667A8.889 8.889 0 0080 60V50H42.222L14.444 68.889z"
          fill="#002395"
        />
        <path d="M0 24.444v31.111L23.333 40 0 24.444z" fill="#141414" />
        <path
          d="M0 20v4.444L23.333 40 0 55.556V60l30-20L0 20z"
          fill="#FFB611"
        />
        <path
          d="M7.869 11.173A8.889 8.889 0 000 20l30 20L0 60a8.889 8.889 0 007.869 8.826l33.242-23.27H80V34.443H41.111L7.87 11.173z"
          fill="#007A4D"
        />
        <path
          d="M14.444 11.111H8.89a9.07 9.07 0 00-1.02.063l33.242 23.27H80V30H42.222L14.444 11.111zM7.87 68.827a9.07 9.07 0 001.02.062h5.555L42.222 50H80v-4.444H41.11L7.87 68.826z"
          fill="#EEE"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_63_1786">
          <path fill="#fff" d="M0 0h80v80H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFlagSouthAfrica = React.memo(FlagSouthAfrica);
export default MemoFlagSouthAfrica;
