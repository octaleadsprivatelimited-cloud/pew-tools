const openings = [
  {
    title: "Senior Tool Design Engineer",
    location: "Pune, India",
    type: "Full-time",
  },
  {
    title: "Technical Sales Manager",
    location: "Bengaluru, India",
    type: "Full-time",
  },
  {
    title: "Service Technician",
    location: "Hyderabad, India",
    type: "Contract",
  },
];

export const CareersPage = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 space-y-6">
      <div className="max-w-2xl space-y-4">
        <h1 className="text-3xl font-semibold text-slate-900">Careers at Pew Tools</h1>
        <p className="text-slate-600">
          Join a growing team of engineers, technicians, and customer success specialists dedicated to powering
          Indias infrastructure and manufacturing ambitions.
        </p>
      </div>
      <div className="space-y-4">
        {openings.map((opening) => (
          <article
            key={opening.title}
            className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{opening.title}</h2>
              <p className="text-sm text-slate-500">
                {opening.location} • {opening.type}
              </p>
            </div>
            <a href="mailto:careers@pewtools.com" className="text-sm font-semibold text-brand">
              Apply now
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);
