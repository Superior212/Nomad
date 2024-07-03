import * as React from "react";

function EasyPayment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 90 89" fill="none" {...props}>
      <circle cx={45} cy={44.5} r={44.5} fill="#94F8FE" />
      <path
        d="M45.5 57.857v5.714M52.643 55v5.714M38.357 55v5.714M48.54 34.683a2.38 2.38 0 00-2.246-1.589h-1.843a2.126 2.126 0 00-.457 4.2l2.809.617a2.383 2.383 0 01-.509 4.709h-1.588a2.383 2.383 0 01-2.246-1.589m3.04-7.937v-2.38M45.5 45v-2.38m-12.143-4.049a.714.714 0 110-1.428.714.714 0 010 1.428zm24.286 0a.714.714 0 110-1.428.714.714 0 010 1.428z"
        stroke="#000"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M61.214 26.429H29.786a2.857 2.857 0 00-2.857 2.857v17.143a2.857 2.857 0 002.857 2.857h31.428a2.857 2.857 0 002.857-2.857V29.286a2.857 2.857 0 00-2.857-2.857z"
        stroke="#000"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoEasyPayment = React.memo(EasyPayment);
export default MemoEasyPayment;
