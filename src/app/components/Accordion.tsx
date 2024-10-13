import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b-2 border-gray-300 last:border-0">
      <div
        className={`flex justify-between items-center p-4 cursor-pointer ${isOpen ? 'bg-gray-200 text-primary' : 'bg-white text-secondary'}`}
        onClick={onClick}
      >
        <h2 className="text-lg font-medium">{question}</h2>
        <FaAngleDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      {isOpen && (
        <div className="p-4">
          {answer}
        </div>
      )}
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border-2 border-gray-300 rounded-lg w-full md:w-5/6 mx-auto overflow-hidden">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
