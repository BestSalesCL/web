import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqsData } from "@/constants/faqsData";

const QuestionAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex-center-col w-full max-w-[720px] gap-5"
    >
      {FaqsData.map((card, i) => {
        const isLastItem = i === FaqsData.length - 1;
        return (
          // Faq item
          <AccordionItem
            value={card.value}
            key={i}
            className={`w-full border-b-2 border-solid ${isLastItem ? "border-b-0 border-solid" : "border-b-2 border-solid"} border-text_400`}
          >
            {/* Faq action button */}
            <AccordionTrigger className="w-full  py-3 text-text_color">
              <h5 className="text-20-bold h-fit max-w-[600px] text-left text-text_color">
                {card.title}
              </h5>
            </AccordionTrigger>
            {/* Faq content */}
            <AccordionContent className="w-full px-4">
              <p className="text-16 text-left font-normal text-text_400">
                {card.content}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export { QuestionAccordion };
