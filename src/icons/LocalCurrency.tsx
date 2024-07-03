import * as React from "react";

function LocalCurrency(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 90 89" fill="none" {...props}>
      <circle cx={45} cy={44.5} r={44.5} fill="#95BCEB" />
      <path
        d="M28.833 40a5 5 0 005-5m-5 15a5 5 0 015 5m28.334-15a5 5 0 01-5-5m5 15a5 5 0 00-5 5m-30-21.667h36.666v23.334H27.167V33.333zM45.5 51.667c2.762 0 5-2.984 5-6.667s-2.238-6.667-5-6.667-5 2.984-5 6.667 2.238 6.667 5 6.667z"
        stroke="#000"
        strokeWidth={1.8}
      />
    </svg>
  );
}

const MemoLocalCurrency = React.memo(LocalCurrency);
export default MemoLocalCurrency;
