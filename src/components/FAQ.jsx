import "./FAQ.css";
import { useState } from "react";

const faqs = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?"
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>

        {faqs.map((q, i) => (
          <div
            key={i}
            className={`faq-item ${openIndex === i ? "open" : ""}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <div className="faq-question">
              <span>{q}</span>
              <span className="icon">+</span>
            </div>

            {openIndex === i && (
              <div className="faq-answer">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries, and more.
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
