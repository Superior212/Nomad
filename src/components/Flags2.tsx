import MemoFlagEgypt from "@/icons/Flag-egypt";
import MemoFlagGhana from "@/icons/Flag-ghana";
import MemoFlagKenya from "@/icons/Flag-kenya";
import MemoFlagNigeria from "@/icons/Flag-nigeria";
import MemoFlagSouthAfrica from "@/icons/Flag-south-africa";

const Flags2 = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll2">
        <li className="flex items-center space-x-3">
          <MemoFlagEgypt className="w-16 h-16" />
          <MemoFlagGhana className="w-16 h-16" />
          <MemoFlagNigeria className="w-16 h-16" />
        </li>
        <li className="flex items-center space-x-3">
          <MemoFlagKenya className="w-16 h-16" />
          <MemoFlagNigeria className="w-16 h-16" />
          <MemoFlagSouthAfrica className="w-16 h-16" />
        </li>
        <li className="flex items-center space-x-3">
          <MemoFlagKenya className="w-16 h-16" />
          <MemoFlagNigeria className="w-16 h-16" />
          <MemoFlagSouthAfrica className="w-16 h-16" />
        </li>
        <li className="flex items-center space-x-3">
          <MemoFlagEgypt className="w-16 h-16" />
          <MemoFlagGhana className="w-16 h-16" />
          <MemoFlagNigeria className="w-16 h-16" />
        </li>
      </ul>
    </div>
  );
};

export default Flags2;
