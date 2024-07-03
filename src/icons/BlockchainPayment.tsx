import * as React from "react";

function BlockchainPayment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 90 89" fill="none" {...props}>
      <circle cx={45} cy={44.5} r={44.5} fill="#FEEF94" />
      <path
        d="M60.5 46.755v.288m0 0a3 3 0 00-2.533-2.942l-2.012-.33v1.492m4.545 1.78v3.688c0 3.24 0 4.86-.502 6.15a7.501 7.501 0 01-4.343 4.29c-1.307.495-2.95.495-6.232.495-1.721 0-2.583 0-3.383-.173a7.582 7.582 0 01-3.307-1.634c-.621-.528-1.138-1.208-2.17-2.566L36.012 51.3a2.5 2.5 0 01.048-3.09A2.577 2.577 0 0139.863 48l2.304 2.425V35.833a2.5 2.5 0 115 0v4.956h1.211c1.674 0 3.032 1.334 3.032 2.984m-4.243-2.985v4.473m4.243 0v-2.983h1.515c1.673 0 3.03 1.337 3.03 2.983v1.492"
        stroke="#181818"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.167 38.333h-1.374c-2.493 0-3.743 0-4.516-.734-.777-.73-.777-1.908-.777-4.266 0-2.359 0-3.535.775-4.267.775-.732 2.025-.733 4.518-.733h19.412c2.497 0 3.745 0 4.52.733.775.73.775 1.908.775 4.267 0 2.358 0 3.535-.775 4.266-.775.732-2.025.734-4.52.734H53"
        stroke="#181818"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoBlockchainPayment = React.memo(BlockchainPayment);
export default MemoBlockchainPayment;
