
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import DestinationsSection from '@/components/destinations-section';
import AiHighlightsSection from '@/components/ai-highlights-section';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DestinationsSection />
        <Separator className="my-12 md:my-16" />
        <AiHighlightsSection />
      </main>
      <Footer />
    </>
  );
}
