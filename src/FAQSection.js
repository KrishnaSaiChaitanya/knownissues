import React, { useState } from "react";

const FAQSection = ({ sectionName, faqs }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (faqIndex) => {
    setActiveAccordion(faqIndex === activeAccordion ? null : faqIndex);
  };

  return (
    <div className="faq-section">
      <h2 className="section-header">{sectionName}</h2>
      {faqs.map((faq, index) => (
        <div key={faq.id} className="faq-item">
          <div
            className={`faq-question ${
              index === activeAccordion ? "active" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="accordion-icon">
              {index === activeAccordion ? (
                <svg
                  style={{
                    height: "18px",
                    width: "18px",
                    color: "orange",
                    margin: "2px",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              ) : (
                <svg
                  style={{
                    height: "18px",
                    width: "18px",
                    color: "orange",
                    margin: "6px",
                  }}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              )}
            </span>
          </div>
          {index === activeAccordion && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
