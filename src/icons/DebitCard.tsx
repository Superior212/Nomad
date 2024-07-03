import * as React from "react";

function DebitCard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 90 89" fill="none" {...props}>
      <circle cx={45} cy={44.5} r={44.5} fill="#B0FE94" />
      <path
        d="M62.167 40v13.333a3.333 3.333 0 01-3.334 3.334H32.167a3.333 3.333 0 01-3.334-3.334V36.667a3.333 3.333 0 013.334-3.334h26.666a3.334 3.334 0 013.334 3.334V40zm0 0H35.5"
        stroke="#181818"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 47.303a2.5 2.5 0 110 3.727m0-3.727a2.5 2.5 0 100 3.727"
        stroke="#181818"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoDebitCard = React.memo(DebitCard);
export default MemoDebitCard;
