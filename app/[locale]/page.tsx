import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ForWhom from "@/components/ForWhom";
import Program from "@/components/Program";
import Training from "@/components/Training";
import Nutrition from "@/components/Nutrition";
import Coaching from "@/components/Coaching";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/InstagramFeed";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import {setRequestLocale} from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <TrustStrip />
      <ForWhom />
      <Program />
      <Training />
      <Nutrition />
      <Coaching />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <CTASection />
    </>
  );
}
