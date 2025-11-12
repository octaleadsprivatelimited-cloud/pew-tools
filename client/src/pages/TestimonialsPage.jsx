const testimonials = [
  {
    name: "Anika Sharma",
    role: "Project Manager, Skylift Infrastructure",
    quote:
      "Pew Tools helped us standardize power tool fleets across eight metro stations. Downtime dropped by 32% in the first quarter.",
  },
  {
    name: "Raghav Patel",
    role: "Maintenance Lead, Precision MFG",
    quote:
      "Their telemetry dashboards flag issues before they become stoppages. Support tickets get resolved in a single visit.",
  },
];

export const TestimonialsPage = () => (
  <section className="bg-white py-16">
    <div className="container mx-auto px-4 space-y-8">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold text-slate-900">Testimonials</h1>
        <p className="mt-4 text-slate-600">
          Hear from the construction, manufacturing, and service organizations that trust Pew Tools with their
          mission-critical operations.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="rounded-2xl bg-slate-50 p-6 shadow-sm">
            <blockquote className="text-slate-700">“{testimonial.quote}”</blockquote>
            <figcaption className="mt-4 text-sm font-semibold text-slate-900">
              {testimonial.name}
              <span className="block text-xs font-normal text-slate-500">{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
