import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
  {
    question: "What types of workspaces are available for booking?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "How can I book a workspace?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "Can I see the availability of workspaces in real-time?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "What payment methods are accepted?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "Can I cancel or modify my booking?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "Is there a membership program?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  },
  {
    question: "Are there any discounts for long-term bookings?",
    answer:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit itaque commodi nobis facere! Eos fuga enim itaque vel quibusdam mollitia, dignissimos eius voluptatum qui asperiores saepe dicta aut officiis minus?"
  }
];

export default function FAQAccordion() {
  return (
    <section className="flex flex-col justify-center items-center container mx-auto mt-12">
    <h3 className="text-3xl font-bold text-gray-900 text-center">Frequently Asked Questions</h3>
    <div className="mt-8 w-full md:w-2/3 px-4">
      {faqs.map((faq, index) => (
        <Accordion 
          key={index} 
          className="rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out mb-4 bg-white"
          sx={{
            '&:before': { display: 'none' },  // Remove the default MUI Accordion border
            '&.Mui-expanded': { 
              margin: 0, 
              transition: 'all 0.3s' 
            }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className="text-gray-600" />}
            aria-controls={`panel${index + 1}-content`}
            id={`panel${index + 1}-header`}
            sx={{
              backgroundColor: 'white',
              padding: '12px 24px',
              '&:hover': {
                backgroundColor: '#f5f5f5', // Subtle hover effect
              },
              transition: 'all 0.3s',
            }}
          >
            <span className="text-gray-900 font-semibold text-lg">
              {faq.question}
            </span>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundColor: '#fff',
              padding: '16px 24px',
            }}
          >
            <p className="text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  </section>
  );
}
