import * as React from "react";

function FlagGhana(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 80 80" fill="none" {...props}>
      <path
        d="M71.111 11.111H8.89A8.889 8.889 0 000 20.001v11.11h80v-11.11a8.889 8.889 0 00-8.889-8.89z"
        fill="#CC212D"
      />
      <path
        d="M34.273 48.89h11.523l-5.76-4.188-5.763 4.187zm7.971-10.98h7.145l-5.78 4.197 2.202 6.782H80V31.111H40.036l2.208 6.798zm-5.782 4.197l-5.78-4.198h7.145l2.209-6.798H0V48.89h34.258l2.204-6.782z"
        fill="#FBD116"
      />
      <path
        d="M45.816 48.902l-.02-.013H34.27l-.02.013.007-.013H0v11.11a8.889 8.889 0 008.889 8.89H71.11A8.889 8.889 0 0080 59.999V48.89H45.811l.005.013z"
        fill="#288541"
      />
      <path
        d="M30.682 37.91l5.78 4.197-2.204 6.782-.005.013.02-.013 5.762-4.187 5.76 4.187.02.013-.004-.013-2.202-6.782 5.78-4.198h-7.145l-2.209-6.798-2.208 6.798h-7.145z"
        fill="#000"
      />
    </svg>
  );
}

const MemoFlagGhana = React.memo(FlagGhana);
export default MemoFlagGhana;
