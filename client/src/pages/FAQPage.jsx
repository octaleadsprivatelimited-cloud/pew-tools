const faqs = [
  {
    question: "Do you provide on-site tool demonstrations?",
    answer: "Yes, our technical specialists can demo key products and advise on the right mix for your crew.",
  },
  {
    question: "Can Pew Tools integrate telemetry with existing ERPs?",
    answer: "We offer API integrations and custom dashboards that align with popular ERP and CMMS platforms.",
  },
  {
    question: "What support is included after purchase?",
    answer:
      "Standard packages include preventive maintenance, calibration camps, and priority access to spare parts.",
  },
];

export const FAQPage = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold text-slate-900">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm">
            <summary className="cursor-pointer text-lg font-semibold text-slate-900">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
