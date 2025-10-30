import { useState, useEffect } from "react";
import { Shield, CreditCard, Headphones, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { config } from "@/data/config";
import heroBeach from "@/assets/hero-beach.jpg";
import heroIguazu from "@/assets/hero-iguazu.jpg";
import heroBuenosAires from "@/assets/hero-buenosaires.jpg";
import heroGlacier from "@/assets/hero-glacier.jpg";
import heroRio from "@/assets/rio-package.jpg";
import heroMachuPicchu from "@/assets/peru-package.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    { src: heroBeach, alt: "Playa paradisíaca con aguas cristalinas turquesas" },
    { src: heroIguazu, alt: "Cataratas del Iguazú Argentina con arcoíris" },
    { src: heroBuenosAires, alt: "Buenos Aires barrio colorido de La Boca" },
    { src: heroGlacier, alt: "Glaciar Perito Moreno Argentina Patagonia" },
    { src: heroRio, alt: "Cristo Redentor Río de Janeiro Brasil" },
    { src: heroMachuPicchu, alt: "Machu Picchu Perú ruinas incas" },
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };
  const scrollToPackages = () => {
    const element = document.getElementById("paquetes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/5492915074149?text=${encodeURIComponent(
        "Hola quiero consultar por un viaje"
      )}`,
      "_blank"
    );
  };

  const badges = [
    { icon: Shield, text: "Cancelación flexible" },
    { icon: CreditCard, text: "Factura y comprobantes" },
    { icon: Headphones, text: "Soporte 24/7" },
    { icon: MapPin, text: "Salidas desde tu ciudad" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Background */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain bg-muted/20"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Carousel Navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in leading-tight">
          {config.heroTitle}
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-8 max-w-2xl mx-auto animate-fade-in px-4">
          {config.heroSubtitle}
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in">
          {badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 text-sm hover:bg-white/30 transition-all"
            >
              <badge.icon className="w-4 h-4 mr-2" />
              {badge.text}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            onClick={openWhatsApp}
            className="bg-accent hover:bg-accent-hover shadow-button text-lg px-8 py-6"
          >
            Reservar por WhatsApp
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToPackages}
            className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20 text-lg px-8 py-6"
          >
            Ver paquetes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
