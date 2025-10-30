import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/data/config";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${config.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hola! Quiero consultar sobre los paquetes disponibles."
      )}`,
      "_blank"
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-lg animate-slide-in-right">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <p className="font-semibold text-foreground">🎉 Promo activa — asegurá hoy tu lugar</p>
            <p className="text-sm text-muted-foreground">Cupos limitados, reservá ahora</p>
          </div>
          <Button
            onClick={openWhatsApp}
            className="bg-accent hover:bg-accent-hover shadow-button w-full sm:w-auto"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            Reservar ahora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
