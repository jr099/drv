import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServiceCards } from '../components/ServiceCards';
import { PlatformOverview } from '../components/PlatformOverview';
import { Testimonials } from '../components/Testimonials';
import { CTASection } from '../components/CTASection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustBar />
      <ServiceCards />
      <PlatformOverview />
      <Testimonials />
      <CTASection />
    </div>
  );
}
