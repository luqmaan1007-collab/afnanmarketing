import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, ArrowRight, Sparkles, TrendingUp, Users, Target } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fardowsa Afnan — Marknadsföringskonsult" },
      {
        name: "description",
        content:
          "Fardowsa Afnan är en marknadsföringskonsult som hjälper företag att växa med strategi, varumärke och digital marknadsföring. Kontakta mig på fardowsa@afnan.se eller 076-226 02 32.",
      },
      {
        property: "og:title",
        content: "Fardowsa Afnan — Marknadsföringskonsult",
      },
      {
        property: "og:description",
        content:
          "Jag hjälper företag att bygga varumärken, nå rätt målgrupp och växa med modern marknadsföring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="grain relative overflow-hidden px-6 py-24 sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Sparkles className="h-4 w-4 text-gold" />
              Marknadsföringskonsult
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Få ditt företag att växa med rätt marknadsföring
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Jag är Fardowsa Afnan, marknadsföringskonsult med fokus på strategi,
              varumärkesbyggande och digitala kanaler. Jag hjälper företag att nå rätt
              målgrupp, bygga förtroende och skapa resultat som märks.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="mailto:fardowsa@afnan.se"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                <Mail className="h-4 w-4" />
                Mejla mig
              </a>
              <a
                href="tel:+46762260232"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-accent hover:text-accent-foreground"
              >
                <Phone className="h-4 w-4" />
                076-226 02 32
              </a>
            </div>
          </div>
          <div className="relative w-full max-w-md lg:max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold/20 to-clay/20 blur-2xl" />
            <img
              src="/images/hero-marketing.jpg"
              alt="Abstrakt illustration av strategisk tillväxt och marknadsföring"
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
          Jag brinner för att hjälpa företag att berätta sin historia på ett sätt som
          engagerar och konverterar. Med en bakgrund inom marknadsföring och kommunikation
          arbetar jag nära kunder för att skapa strategier som passar just deras verksamhet,
          oavsett om det handlar om att bygga ett varumärke från grunden, förbättra den
          digitala närvaron eller driva leads.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Jag tror på långsiktiga relationer, tydlig kommunikation och mätbart resultat.
          Varje uppdrag börjar med att lyssna på dina mål och utmaningar — sedan tar vi
          fram en plan som fungerar i praktiken.
        </p>
      </div>
    </section>
  );
}

function Services() {
  const services = [
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
        "Från sociala medier och innehåll till annonsering och analys — jag stöttar dig i den digitala resan.",
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 inline-flex rounded-xl bg-secondary p-3 text-ink transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-warm px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Låt oss prata
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Har du ett företag som behöver hjälp med marknadsföring? Kontakta mig så bokar vi
          ett första samtal.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:fardowsa@afnan.se"
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all hover:shadow-md sm:w-auto"
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
            className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-border bg-card px-6 py-5 text-left transition-all hover:shadow-md sm:w-auto"
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
          href="mailto:fardowsa@afnan.se?subject=Intresse%20f%C3%B6r%20marknadsf%C3%B6ringshj%C3%A4lp"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
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
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              E-post
            </a>
            <a
              href="tel:+46762260232"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Telefon
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
