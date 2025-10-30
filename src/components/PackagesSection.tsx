import PackageCard from "./PackageCard";
import { packages } from "@/data/packages";

const PackagesSection = () => {
  return (
    <section id="paquetes" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Paquetes destacados
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Promos reales con cupos limitados. Reservá ahora y asegurá tu próximo viaje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
