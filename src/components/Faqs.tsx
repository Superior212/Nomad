import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function Faqs() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="hsection text-white-400 dm-sans">
      <main
        className="sm:flex items-center my-8

      ">
        <div data-aos="fade-up" className="sm:w-1/2">
          <h1 className="text-4xl font-[700]">
            Frequently Asked <br /> Questions
          </h1>
          <p className="sm:text-[18px] font-[400] my-2 text-white-800">
            Answers to Common Queries, <br className="hidden sm:block" />
            Frequently Asked Questions <br className="hidden sm:block" />
            Explained
          </p>
        </div>
        <div className="sm:w-2/3">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem data-aos="fade-up" value="item-1">
              <AccordionTrigger>What is Nomad?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-aos="fade-up" value="item-2">
              <AccordionTrigger>
                How do I get started with Nomad?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-aos="fade-up" value="item-3">
              <AccordionTrigger>
                Is Nomad available in my country?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-aos="fade-up" value="item-3">
              <AccordionTrigger>
                Is Nomad available in my country?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem data-aos="fade-up" value="item-3">
              <AccordionTrigger>Is my money safe with Nomad?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
    </div>
  );
}
