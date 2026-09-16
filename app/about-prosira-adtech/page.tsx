import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { AboutContent } from "@/components/about/about-content";
import { MissionVision } from "@/components/about/mission-vision";
import { TeamSection } from "@/components/about/team-section";
import { AboutCTA } from "@/components/about/about-cta";

export const metadata: Metadata = {
  title: "About Us | Prosira Adtech Pvt. Ltd. – Advertising Agency in Pune",
  description:
    "Learn about Prosira Adtech Pvt. Ltd., a leading advertising agency in Pune offering strategic, creative, and performance-driven campaigns across media, events, and branding.",
  keywords: [
    "advertising agency in Pune",
    "media agency Pune",
    "event advertising company",
    "branding agency Pune",
  ],
  openGraph: {
    title: "About Prosira Adtech Pvt. Ltd. – Advertising Agency in Pune",
    description:
      "Discover Prosira Adtech Pvt. Ltd., a full-service advertising and media agency delivering impactful campaigns in Pune and Maharashtra.",
    url: "https://prosira.in/about-prosira-adtech",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutContent />
      <MissionVision />
      <TeamSection />
      <AboutCTA />
    </main>
  );
}
