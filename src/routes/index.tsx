import { createFileRoute } from "@tanstack/react-router";
import {
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  CalendarCheck,
  Clock,
  ExternalLink,
  Send,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fardowsa — Marknadsföringskonsult | Google Ads & Strategi" },
      {
        name: "description",
        content:
          "Fardowsa är en marknadsföringskonsult specialiserad på Google Ads, marknadsstrategi och varumärkesbyggande. Boka ett gratis upptäckningssamtal eller kontakta mig på fardowsa@afnan.se / 076-262 96 06.",
      },
      {
        property: "og:title",
        content: "Fardowsa — Marknadsföringskonsult | Google Ads & Strategi",
      },
      {
        property: "og:description",
        content:
          "Specialist på Google Ads, marknadsstrategi och varumärkesbyggande. Boka ett upptäckningssamtal idag.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Booking />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-gold">
              <Sparkles className="h-4 w-4" />
              Marknadsföringskonsult
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Fler kunder med Google Ads & smart marknadsföring
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Jag är Fardowsa, marknadsföringskonsult med specialisering inom
              Google Ads, digital strategi och varumärkesbyggande. Jag hjälper företag
              att synas för rätt målgrupp, driva kvalificerad trafik och omvandla klick
              till affärer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-gold"
              >
                <CalendarCheck className="h-4 w-4" />
                Boka ett upptäckningssamtal
              </a>
              <a
                href="tel:+46762629606"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-gold/50 hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                076-262 96 06
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-md lg:max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/30 to-gold-muted/10 blur-2xl" />
            <img
              src="/images/hero-marketing.jpg"
              alt="Abstrakt illustration av strategisk tillväxt och Google Ads-resultat"
              className="relative aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Privatutbildning",
      description: "Genomförd utbildning hos Online Business Academy",
    },
    {
      icon: Users,
      title: "Personligt mentorskap",
      description: "1:1-guidning inom marknadsföring och strategi",
    },
    {
      icon: Sparkles,
      title: "Lärare & mentor",
      description: "Elika Selfjord, Online Business Academy",
    },
  ];

  return (
    <section className="bg-card px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Om mig
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Jag brinner för att hjälpa företag att växa med resultatdriven marknadsföring.
          Med fokus på Google Ads, datainsikter och tydlig kommunikation arbetar jag nära
          varje kund för att skapa kampanjer och strategier som levererar mätbart värde.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Jag har genomgått en privatutbildning och personligt mentorskap hos{" "}
          <span className="font-medium text-gold">Online Business Academy</span>, med{" "}
          <span className="font-medium text-gold">Elika Selfjord</span> som min lärare och
          mentor. Den utbildningen ger mig aktuella metoder inom digital marknadsföring
          som jag omsätter i praktiken för varje kund.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {credentials.map((credential) => (
            <div
              key={credential.title}
              className="rounded-2xl border border-border bg-background p-6 text-left"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary p-3 text-gold">
                <credential.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-ink">{credential.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {credential.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Oavsett om du vill öka synligheten i sök, förbättra annonseringens lönsamhet
          eller bygga ett starkare varumärke, börjar vi alltid med dina affärsmål — och
          bygger en plan som fungerar i praktiken.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: BarChart3,
      title: "Google Ads",
      description:
        "Sök-, display- och performance-kampanjer optimerade för att driva kvalificerade leads och försäljning med hög ROI.",
    },
    {
      icon: Target,
      title: "Marknadsstrategi",
      description:
        "Jag hjälper dig att sätta tydliga mål, definiera målgrupper och välja rätt kanaler för att nå dit du vill.",
    },
    {
      icon: Users,
      title: "Varumärke & positionering",
      description:
        "Ett starkt varumärke bygger förtroende. Jag arbetar med budskap, tonality och visuell strategi.",
    },
    {
      icon: TrendingUp,
      title: "Digital tillväxt",
      description:
        "Från sociala medier och innehåll till analys och konverteringsoptimering — jag stöttar dig i den digitala resan.",
    },
  ];

  return (
    <section className="px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Vad jag kan hjälpa dig med
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tjänster anpassade efter företag som vill växa smartare.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/30 hover:shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary p-3 text-gold transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["calendly-event-types"],
    queryFn: async () => {
      const response = await fetch("/api/calendly/event-types");
      if (!response.ok) {
        throw new Error("Kunde inte hämta bokningstider");
      }
      return response.json() as Promise<{
        eventTypes: Array<{
          name: string;
          duration: number;
          description: string;
          bookingUrl: string;
        }>;
      }>;
    },
  });

  return (
    <section id="booking" className="bg-rich px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Boka ett samtal
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Välj en tid som passar dig. Samtalet är kostnadsfritt och helt utan förpliktelser.
          </p>
        </div>

        {isLoading && (
          <div className="flex justify-center py-12">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gold border-t-transparent" />
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              Bokningskalendern är inte uppkopplad än. Kontakta mig direkt så hjälper jag dig.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:fardowsa@afnan.se"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
              >
                <Mail className="h-4 w-4" />
                Mejla mig
              </a>
              <a
                href="tel:+46762629606"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                076-262 96 06
              </a>
            </div>
          </div>
        )}

        {data && data.eventTypes.length === 0 && (
          <p className="text-center text-muted-foreground">
            Inga bokningsbara mötestyper är tillgängliga just nu.
          </p>
        )}

        {data && data.eventTypes.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.eventTypes.map((eventType) => (
              <a
                key={eventType.name}
                href={eventType.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
              >
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-xl bg-secondary px-3 py-1.5 text-sm text-gold">
                    <Clock className="h-4 w-4" />
                    {eventType.duration} min
                  </div>
                  <h3 className="text-xl font-semibold text-ink">{eventType.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {eventType.description}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors group-hover:text-primary">
                  Boka tid
                  <ExternalLink className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<"name" | "email" | "message", string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<"name" | "email" | "message", string>> = {};
    if (!formData.name.trim()) newErrors.name = "Namn är obligatoriskt";
    if (!formData.email.trim()) {
      newErrors.email = "E-post är obligatoriskt";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ange en giltig e-postadress";
    }
    if (!formData.message.trim()) newErrors.message = "Meddelande är obligatoriskt";
    return newErrors;
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(
      `Kontaktförfrågan från ${formData.name}${formData.company ? `, ${formData.company}` : ""}`
    );
    const body = encodeURIComponent(
      `Hej Fardowsa!\n\n` +
        `Namn: ${formData.name}\n` +
        `Företag: ${formData.company || "-"}\n` +
        `E-post: ${formData.email}\n` +
        `Telefon: ${formData.phone || "-"}\n\n` +
        `Meddelande:\n${formData.message}\n\n` +
        `Med vänliga hälsningar,\n${formData.name}`
    );

    window.location.href = `mailto:fardowsa@afnan.se?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as "name" | "email" | "message"]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as "name" | "email" | "message"];
        return next;
      });
    }
  };


  return (
    <section id="contact" className="bg-obsidian px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Låt oss prata
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Har du ett företag som behöver hjälp med Google Ads eller marknadsföring? Fyll i
              formuläret så hör jag av mig inom 24 timmar.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href="mailto:fardowsa@afnan.se"
                className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:border-gold/50 hover:shadow-md"
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    E-post
                  </p>
                  <p className="font-medium text-ink">fardowsa@afnan.se</p>
                </div>
              </a>
              <a
                href="tel:+46762629606"
                className="inline-flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:border-gold/50 hover:shadow-md"
              >
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Telefon
                  </p>
                  <p className="font-medium text-ink">076-262 96 06</p>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            {submitted ? (
              <div className="contact-success">
                <CheckCircle2 className="h-5 w-5 shrink-0" />
                <div>
                  <p className="font-medium">Tack för ditt meddelande!</p>
                  <p className="mt-0.5 text-sm opacity-90">
                    Din e-postapp öppnas nu. Mejla gärna direkt till fardowsa@afnan.se om inget händer.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="contact-label">
                      Namn *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Ditt namn"
                      className="contact-input"
                    />
                    {errors.name && <p className="contact-error">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="contact-label">
                      E-post *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="namn@foretag.se"
                      className="contact-input"
                    />
                    {errors.email && <p className="contact-error">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="contact-label">
                      Företag
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Ditt företag"
                      className="contact-input"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="contact-label">
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="070-123 45 67"
                      className="contact-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="contact-label">
                    Meddelande *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Berätta kort om ditt företag och vad du behöver hjälp med..."
                    rows={5}
                    className="contact-input resize-none"
                  />
                  {errors.message && <p className="contact-error">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:glow-gold sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Skicka meddelande
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-8 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fardowsa. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:fardowsa@afnan.se"
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              E-post
            </a>
            <a
              href="tel:+46762629606"
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              Telefon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
