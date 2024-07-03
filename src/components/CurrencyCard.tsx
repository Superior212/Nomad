import MemoBgPattern from "@/icons/bgPattern";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { NomadCan } from "@/lib/data";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CurrencyCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="my-6 dm-sans">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:px-6">
        {NomadCan.map(({ icon: Icon, title, text }, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={`${index * 500}`}
            className="relative"
            key={index}>
            <MemoBgPattern className="absolute top-0 left-0 w-full h-full" />
            <Card className="border-[0.5px] border-transparent bg-clip-border border-gradient-to-r from-[#000000] to-[#666666] shadow-lg w-full sm:w-[100%] bg-transparent text-white">
              <CardHeader>
                <Icon className="w-16 h-16 mb-3" />
                <CardTitle
                  className="sm:text-3xl font-[500]"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </CardHeader>
              <CardContent
                className="sm:text-sm font-[400] text-[#8D8D8D]"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrencyCard;
