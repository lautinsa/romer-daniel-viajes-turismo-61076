import { config } from "@/data/config";
import aboutImage from "@/assets/about-banner.png";

const AboutUs = () => {
  return (
    <section id="sobre-nosotros" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Imagen - se muestra primero en móvil */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden shadow-card aspect-[4/3]">
              <img
                src={aboutImage}
                alt="Romero Daniel Viajes y Turismo - Experiencias únicas"
                className="w-full h-full object-contain bg-white"
                loading="lazy"
              />
            </div>
          </div>

          {/* Texto - se muestra segundo en móvil */}
          <div className="order-2 md:order-1 space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {config.brandName}
            </h2>
            
            <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                Diseñamos experiencias únicas para que cada viaje sea inolvidable. Somos una agencia joven, pero con un equipo comprometido en ofrecer atención personalizada y un servicio de calidad.
              </p>
              
              <p>
                Nos especializamos en paquetes turísticos a medida, brindando opciones para todos los gustos: desde escapadas al Caribe hasta cruceros y viajes grupales. Nuestro objetivo es que vivas el viaje que soñás, sin preocupaciones y con la tranquilidad de contar con el respaldo de expertos en turismo.
              </p>
              
              <p>
                Ya sea que busques aventura, relax o cultura, te ofrecemos opciones pensadas para que cada destino se convierta en un recuerdo imborrable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
