const PHONE_NUMBER = "+91 98765 43210";
const WHATSAPP_URL = "https://wa.me/919876543210";

export const TopBar = () => {
  return (
    <div className="hidden bg-slate-950 text-white sm:block">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Pew Tools India</span>
          <span className="text-white/60">| Industrial Hand & Power Tools</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="hidden rounded-full border border-white/20 px-4 py-1 text-sm font-semibold transition hover:bg-brand md:inline-flex"
          >
            Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 transition hover:bg-white/10"
          >
            <span aria-hidden>💬</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-3 py-1 text-white transition hover:text-brand"
          >
            <span aria-hidden>📞</span>
            <span>{PHONE_NUMBER}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
