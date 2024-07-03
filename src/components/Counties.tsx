import Flags from "./Flags";
import Flags2 from "./Flags2";

const Counties = () => {
  return (
    <div className="hsection">
      <h1 className="text-white-400 font-[700] text-3xl text-center my-5">
        Available in 5+ <br className="block sm:hidden" /> countries and all
        telcos <br className="block sm:hidden" /> in Nigeria
      </h1>
      <Flags />
      <Flags2 />
    </div>
  );
};

export default Counties;
