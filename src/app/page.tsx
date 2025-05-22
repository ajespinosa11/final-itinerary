
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import DestinationsSection from '@/components/destinations-section';
import AiHighlightsSection from '@/components/ai-highlights-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DestinationsSection />
        <AiHighlightsSection />
      </main>
      <Footer />
    </>
  );
}
