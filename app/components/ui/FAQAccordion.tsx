'use client';

import { useState } from 'react';
import type { FAQ } from '@/lib/validators/faq';

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900 pr-4 text-base sm:text-lg">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ overflow: openIndex === index ? 'visible' : 'hidden' }}
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0">
              <div className="text-gray-900 leading-relaxed border-t border-gray-100 pt-4 text-sm sm:text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
