import * as React from "react";

function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M8.25 17.25a.75.75 0 01-.75-.75v-9a.75.75 0 011.085-.67l9 4.5a.75.75 0 010 1.34l-9 4.5a.752.752 0 01-.335.08zM9 8.713v6.574L15.573 12 9 8.713z"
        fill="#fff"
      />
      <path
        d="M12 3a9 9 0 110 18 9 9 0 010-18zm0-1.5a10.5 10.5 0 100 21 10.5 10.5 0 000-21z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoPlay = React.memo(Play);
export default MemoPlay;
