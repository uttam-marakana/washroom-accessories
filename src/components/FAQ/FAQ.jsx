import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

import { faqs } from '@/data/faq';
import './FAQ.css';

/**
 * Accordion FAQ list.
 *
 * @param {object} props
 * @param {Array<{id: number|string, question: string, answer: string}>} [props.items]
 */
function FAQ({ items = faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.id}
            className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
          >
            <button
              type="button"
              className="faq__question"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span>{item.question}</span>
              <FiChevronDown className="faq__icon" aria-hidden="true" />
            </button>
            <div
              id={`faq-panel-${item.id}`}
              className="faq__answer-panel"
              hidden={!isOpen}
            >
              <p className="faq__answer">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
