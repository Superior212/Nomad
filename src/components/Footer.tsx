import logo from "../assets/images/logo.svg";
import MemoTelegram from "@/icons/Telegram";
import MemoMail from "@/icons/Mail";
import MemoDiscord from "@/icons/Discord";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const Footer = () => {
  return (
    <div className="dm-sans">
      <footer className="hsection px-6 text-white-400">
        <div className="sm:flex justify-between items-center sm:flex-row flex-col">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div>
                <img src={logo} className="md:w-28 md:h-24" alt="logo" />
              </div>
            </div>
            <p className="text-white-800 py-5">
              Payment infrastructure closing the gap between <br /> Blockchain
              and Traditional Financial services in Africa
            </p>
            <div className="flex space-x-2">
              <div className="bg-[#1A1A1A] p-2 flex items-center justify-center rounded-[50%]">
                <X className="text-white-400 w-4 h-4" />
              </div>
              <MemoTelegram className="w-8 h-8" />
              <MemoMail className="w-8 h-8" />
              <MemoDiscord className="w-8 h-8" />
            </div>
            <div
              className="my-4 block sm:hidden
        ">
              <Button className="btn-primary px-10">Join waitlist</Button>
            </div>
          </div>

          <div className="flex items-center justify-between my-8 sm:my-0 space-x-8">
            <Link to="#" className="text-white-400 text-sm sm:text-base">
              Terms of Service
            </Link>
            <Link to="#" className="text-white-400 text-sm sm:text-base">
              Privacy Policy
            </Link>
            <Link to="#" className="text-white-400 text-sm sm:text-base">
              Disclaimer
            </Link>
          </div>
        </div>
        <div
          className="my-4 sm:block hidden
        ">
          <Button className="btn-primary px-10">Join waitlist</Button>
        </div>
      </footer>
      <div className="text-white-400 sm:p-4 my-3 border-t border-white-400">
        <div className="hsection flex justify-between items-center">
          <p className="text-sm sm:text-base">
            &copy; 2024 Nomad. All rights reserved
          </p>
          <p className="text-sm sm:text-base">Powered by solana</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
