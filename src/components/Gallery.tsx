import gallery1 from "@/assets/gallery-real-1.jpg";
import gallery2 from "@/assets/gallery-real-2.jpg";
import gallery3 from "@/assets/gallery-real-3.jpg";
import gallery4 from "@/assets/gallery-real-4.jpg";
import gallery5 from "@/assets/gallery-real-5.jpg";
import gallery6 from "@/assets/gallery-real-6.jpg";
import clientPhoto1 from "@/assets/client-photo-1.jpg";
import clientPhoto2 from "@/assets/client-photo-2.jpg";
import clientPhoto4 from "@/assets/client-photo-4.jpg";
import clientPhoto5 from "@/assets/client-photo-5.jpg";
import clientPhoto7 from "@/assets/client-photo-7.jpg";
import clientPhoto8 from "@/assets/client-photo-8.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Experiencias en playas paradisíacas con Romero Viajes" },
    { src: gallery2, alt: "Conociendo destinos culturales con Romero Daniel Viajes" },
    { src: gallery3, alt: "Playa tropical con palmeras - Viajes a Brasil" },
    { src: gallery4, alt: "Excursiones grupales en el Caribe" },
    { src: gallery5, alt: "Relax total en playas de arena blanca" },
    { src: gallery6, alt: "Momentos inolvidables en aguas cristalinas" },
    { src: clientPhoto1, alt: "Clientes felices en crucero - Romero Viajes" },
    { src: clientPhoto2, alt: "Cliente disfrutando en el mar - Romero Daniel Viajes" },
    { src: clientPhoto4, alt: "Cliente nadando con delfines - Aventuras inolvidables" },
    { src: clientPhoto5, alt: "Clientes en avión rumbo a su destino soñado" },
    { src: clientPhoto7, alt: "Disfrutando de playas paradisíacas - Romero Daniel Viajes" },
    { src: clientPhoto8, alt: "Gorra Romero Daniel Viajes en la playa - Momentos inolvidables" },
  ];

  return (
    <section id="galeria" className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            🏝️ Viajes de nuestros clientes
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ellos ya vivieron su experiencia con Romero Daniel Viajes y Turismo. Descubrí los destinos más elegidos del año.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <AspectRatio ratio={16 / 9}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain bg-muted/30 p-1 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
