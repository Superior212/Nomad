import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import MemoPlay from "@/icons/Play";
import MemoBell from "@/icons/Bell";
import MemoSolana from "@/icons/Solana";
import MemoSuperTeam from "@/icons/SuperTeam";
import MemoSeabedLab from "@/icons/SeabedLab";
import MemoSquareProtocol from "@/icons/SquareProtocol";
import coolShape from "../assets/images/coolShape.svg";
import wheel from "../assets/images/wheel.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="dm-sans hsection flex items-center justify-center flex-col">
      <Badge className="py-2 sm:flex sm:px-4 font-[400] sm:text-sm text-[10px]  gap-x-1 sm:gap-x-2 bg-secondary-100 rounded-[80px]">
        <div className="bg-secondary-600 rounded-[50%] flex items-center p-1 sm:p-2">
          <MemoBell className="sm:h-5 sm:w-5 " />
        </div>
        Unlock seamless payments across Africa and beyond with Nomad
      </Badge>
      <section className="flex flex-col items-center justify-center space-y-3 ">
        <div className="relative">
          <img
            data-aos="fade-right"
            src={wheel}
            alt="wheel"
            className="absolute sm:top-5 top-8 -left-3 sm:left-8 h-12 w-12 sm:h-20 sm:w-20 text-white-400"
          />

          <h1
            data-aos="fade-up"
            className="dm-sans text-white-400 text-[40px] sm:text-[80px] font-[700] text-center my-3">
            Bridging the gap <br className="hidden sm:block" /> between{" "}
            <br className="block sm:hidden" />
            blockchain and <br className="hidden sm:block" /> traditional
            <br className="block sm:hidden" />
            finance
          </h1>
          <div>
            <img
              data-aos="fade-left"
              src={coolShape}
              alt="wheel"
              className=" absolute right-10 sm:right-16 top-20 sm:top-20 sm:h-20 h-12 w-12 sm:w-20"
            />
          </div>
        </div>
        <p
          data-aos="fade-up"
          className="text-white-400  max-w-[85%] sm:max-w-[45%] text-center font-[400]">
          Make payments in local currencies, pay bills, and subscriptions
          without internet or bank account hassles
        </p>
      </section>

      <div className="flex space-x-3 my-6">
        <Button className="btn-primary px-10">Join waitlist</Button>
        <Button className="btn-secondary px-6 gap-x-2">
          <MemoPlay className="h-4 w-4 " />
          Learn more
        </Button>
      </div>

      <div className="flex items-center space-x-6">
        <MemoSolana className="sm:h-24 sm:w-24 w-20 h-20 " />

        <MemoSuperTeam className="sm:h-24 sm:w-24 w-20 h-20 " />
        <MemoSeabedLab className="sm:h-24 sm:w-24 w-20 h-20 " />
        <MemoSquareProtocol className="sm:h-24 sm:w-24 w-20 h-20 " />
      </div>
    </div>
  );
};

export default Hero;
