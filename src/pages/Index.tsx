import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutUs from "@/components/AboutUs";
import BlackFridayBanner from "@/components/BlackFridayBanner";
import CommercialBanner from "@/components/CommercialBanner";
import PackagesSection from "@/components/PackagesSection";
import Gallery from "@/components/Gallery";
import ClientVideos from "@/components/ClientVideos";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustBar />
      <AboutUs />
      <BlackFridayBanner />
      <PackagesSection />
      <Gallery />
      <ClientVideos />
      <Testimonials />
      <FAQ />
      <Contact />
      <StickyCTA />
      <Footer />
    </div>;
};
export default Index;