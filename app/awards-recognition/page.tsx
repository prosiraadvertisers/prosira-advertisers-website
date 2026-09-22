import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Awards & Industry Recognition",
  description:
    "Explore the awards and industry recognition earned by Prosira Adtech Pvt. Ltd.",
};

const recognitions = [
  {
    title: "Brand Growth Recognition",
    year: "2022",
    image: "/awards/aw5.webp",
    alt: "Prosira Adtech brand growth recognition",
  },
  {
    title: "Industry Recognition",
    year: "2022",
    image: "/awards/aw1.webp",
    alt: "Prosira Adtech industry recognition award",
  },
  {
    title: "Campaign Excellence",
    year: "2024",
    image: "/awards/aw2.webp",
    alt: "Prosira Adtech campaign excellence award",
  },
  {
    title: "Media & Advertising Achievement",
    year: "2024",
    image: "/awards/aw3.webp",
    alt: "Prosira Adtech media and advertising achievement",
  },
  {
    title: "Team Achievement",
    year: "2024",
    image: "/awards/aw4.webp",
    alt: "Prosira Adtech team achievement award",
  },
  {
    title: "Excellence in Service",
    year: "Add year",
    image: "",
    alt: "Prosira Adtech excellence in service award",
  },
];

export default function AwardsRecognitionPage() {
  return (
    <main className="bg-background py-12 md:py-16">
      <div className="site-container">
        <Link
          href="/about-prosira-advertisers"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to About Us
        </Link>

        <header className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block text-sm font-medium uppercase tracking-wider text-primary">
            Our Achievements
          </span>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            Recognised for{" "}
            <span className="font-serif text-primary">Impact</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Every recognition reflects the trust of our clients and the craft,
            care, and consistency our team brings to every campaign.
          </p>
        </header>

        <section aria-labelledby="recognitions-heading">
          <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
            <h2 id="recognitions-heading" className="text-2xl font-semibold">
              Awards &amp; Recognitions
            </h2>
            <Award className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {recognitions.map((recognition) => (
              <article
                key={recognition.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
              >
                {/* top accent bar */}
                <div className="absolute inset-x-0 top-0 z-10 h-1 scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />

               <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-neutral-900">
  {recognition.image ? (
    <>
      <img
        src={recognition.image}
        alt={recognition.alt}
        className="block h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
      />
      {/* year badge */}
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur-sm">
        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
        {recognition.year}
      </span>
    </>
  ) : (
    <div className="flex h-full flex-col items-center justify-center gap-3 border-2 border-dashed border-border/70 p-6 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
        <Award className="h-7 w-7 text-primary/70" aria-hidden="true" />
      </span>
      <p className="text-sm font-medium text-muted-foreground">
        Award photo coming soon
      </p>
    </div>
  )}
</div>
                <div className="p-6">
                  <h3 className="inline-block font-semibold leading-snug">
                    {recognition.title}
                    <span className="mt-1 block h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                  </h3>
                  {!recognition.image && (
                    <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      {recognition.year}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="mb-4 text-muted-foreground">
            Want to create work worth recognising?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Start a conversation
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}