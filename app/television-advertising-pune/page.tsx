import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Television Advertising in Pune | TV Commercials – Prosira Adtech Pvt. Ltd.",
  description:
    "Prosira Adtech Pvt. Ltd. provides television advertising in Pune with strategic TV media planning, ad production, and premium channel placements.",
};

export default function TelevisionAdvertisingPunePage() {
  return (
    <main className="site-container py-12 md:py-16">
      <h1 className="text-xl md:text-3xl font-bold mb-6">
        Television Advertising in <span className="text-primary">Pune</span>
      </h1>

      <p className="text-xs text-muted-foreground max-w-3xl mb-10">
        Reach mass audiences with television advertising campaigns designed
        for maximum brand recall and credibility.
      </p>

      <Link href="/contact" className="bg-primary px-8 py-4 rounded-lg text-primary-foreground">
        Get TV Advertising Quote
      </Link>
    </main>
  );
}
