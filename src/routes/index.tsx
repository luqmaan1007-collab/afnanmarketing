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
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fardowsa Afnan — Marknadsföringskonsult | Google Ads & Strategi" },
      {
        name: "description",
        content:
          "Fardowsa Afnan är en marknadsföringskonsult specialiserad på Google Ads, marknadsstrategi och varumärkesbyggande. Boka ett gratis upptäckningssamtal eller kontakta mig på fardowsa@afnan.se / 076-226 02 32.",
      },
      {
        property: "og:title",
        content: "Fardowsa Afnan — Marknadsföringskonsult | Google Ads & Strategi",
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
              Jag är Fardowsa Afnan, marknadsföringskonsult med specialisering inom
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
                href="tel:+46762260232"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-gold/50 hover:text-gold"
              >
                <Phone className="h-4 w-4" />
                076-226 02 32
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
  return (
    <section className="bg-card px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Om mig
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Jag brinner för att hjälpa företag att växa med resultatdriven marknadsföring.
          Med fokus på Google Ads, datainsikter och tydlig kommunikation arbetar jag nära
          varje kund för att skapa kampanjer och strategier som levererar mätbart värde.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
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
                href="tel:+46762260232"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                076-226 02 32
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
  return (
    <section className="bg-obsidian px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Låt oss prata
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Har du ett företag som behöver hjälp med Google Ads eller marknadsföring? Kontakta
          mig så bokar vi ett första samtal.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:fardowsa@afnan.se"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all hover:border-gold/50 hover:shadow-md sm:w-auto"
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
            href="tel:+46762260232"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all hover:border-gold/50 hover:shadow-md sm:w-auto"
          >
            <div className="rounded-full bg-primary/10 p-3 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Telefon
              </p>
              <p className="font-medium text-ink">076-226 02 32</p>
            </div>
          </a>
        </div>
        <a
          href="mailto:fardowsa@afnan.se?subject=Intresse%20f%C3%B6r%20Google%20Ads%20%26%20marknadsf%C3%B6ringshj%C3%A4lp"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-primary"
        >
          Skicka ett meddelande direkt
          <ArrowRight className="h-4 w-4" />
        </a>
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
            © {new Date().getFullYear()} Fardowsa Afnan. Alla rättigheter förbehållna.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:fardowsa@afnan.se"
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              E-post
            </a>
            <a
              href="tel:+46762260232"
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
