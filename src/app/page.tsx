import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/hero-section';
import DestinationsSection from '@/components/destinations-section';
import TravelPlansSection from '@/components/travel-plans-section';
import ItinerarySection from '@/components/itinerary-section';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <DestinationsSection />
        <TravelPlansSection />
        <ItinerarySection />
      </main>
      <Footer />
    </>
  );
}
