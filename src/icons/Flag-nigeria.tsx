import * as React from "react";

function FlagNigeria(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_63_1768)">
        <path
          d="M8.889 11.111A8.889 8.889 0 000 20.001v40a8.889 8.889 0 008.889 8.888h17.778V11.111H8.889z"
          fill="#009A49"
        />
        <path d="M26.667 11.111h26.666V68.89H26.667V11.111z" fill="#EEE" />
        <path
          d="M71.111 11.111H53.333V68.89h17.778A8.889 8.889 0 0080.001 60V20a8.889 8.889 0 00-8.89-8.889z"
          fill="#009A49"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_63_1768">
          <path fill="#fff" d="M0 0h80v80H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const MemoFlagNigeria = React.memo(FlagNigeria);
export default MemoFlagNigeria;
