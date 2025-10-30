import { MessageCircle, MapPin } from "lucide-react";
import { config } from "@/data/config";

const Contact = () => {
  const whatsappButtons = [
    {
      number: "+5492914745410",
      displayNumber: "291 474-5410",
    },
    {
      number: "+5492914638055",
      displayNumber: "291 463-8055",
    },
  ];

  const openWhatsApp = (number: string) => {
    window.open(
      `https://wa.me/${number.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hola quiero consultar por un viaje"
      )}`,
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            ¿Hablamos por WhatsApp?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-6 px-4">
            Te armamos el presupuesto a tu medida. No tenés que moverte de tu casa: nos llamás y nosotros nos ocupamos.
          </p>
        </div>

        {/* Botones de WhatsApp */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 max-w-md mx-auto">
          {whatsappButtons.map((btn, index) => (
            <button
              key={index}
              onClick={() => openWhatsApp(btn.number)}
              className="w-full flex items-center justify-center gap-3 px-6 py-4 md:py-5 bg-accent hover:bg-accent-hover text-accent-foreground rounded-lg shadow-button hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 min-h-[44px] text-base md:text-lg font-medium"
            >
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span>WhatsApp {btn.displayNumber}</span>
            </button>
          ))}
        </div>

        {/* Dirección */}
        <div className="flex items-center justify-center gap-2 text-muted-foreground">
          <MapPin className="w-5 h-5" />
          <p className="text-sm md:text-base">Carlos Di Sarli 144, Bahía Blanca</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
