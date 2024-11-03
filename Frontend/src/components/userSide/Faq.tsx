import * as React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What types of workspaces are available for booking?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "How can I book a workspace?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Can I see the availability of workspaces in real-time?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "What payment methods are accepted?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Can I cancel or modify my booking?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Is there a membership program?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    },
    {
      question: "Are there any discounts for long-term bookings?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
    }
  ];

  const toggleAccordion = (index :React.SetStateAction<number | null>) => {
    setOpenIndex(openIndex  === index ? null : index);
  };

  return (
    <section className="flex flex-col justify-center items-center container mx-auto mt-12 dark:bg-gray-900 transition-colors duration-200">
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Frequently Asked Questions
      </h3>
      <div className="mt-8 w-full md:w-2/3 px-4">
        {faqs.map((faq, index ) => (
          <div
            key={index}
            className="mb-4 rounded-lg overflow-hidden transition-all duration-300 ease-in-out
                     bg-white dark:bg-gray-800 shadow-md hover:shadow-lg"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between
                       hover:bg-gray-50 dark:hover:bg-gray-700
                       transition-all duration-200"
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-gray-600 dark:text-gray-400 transition-transform duration-200
                         ${openIndex === index ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-200 ease-in-out
                       ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
            >
              <div className="px-6 pb-4 pt-2">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;