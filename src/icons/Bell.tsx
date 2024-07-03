import * as React from "react";

function Bell(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.55 2.05a.55.55 0 00-1.1 0v.413h-.307A2.318 2.318 0 003.83 4.635L3.71 6.58a4.057 4.057 0 01-.72 2.064.89.89 0 00.624 1.391l1.874.225v.591a1.513 1.513 0 003.025 0v-.591l1.874-.225a.89.89 0 00.624-1.39 4.058 4.058 0 01-.719-2.065l-.122-1.944a2.318 2.318 0 00-2.313-2.172H7.55V2.05zm-1.238 8.8a.687.687 0 101.375 0v-.412H6.312v.412z"
        fill="#202020"
      />
    </svg>
  );
}

const MemoBell = React.memo(Bell);
export default MemoBell;
