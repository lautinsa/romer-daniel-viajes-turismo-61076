import { Shield, FileCheck, Headphones, MapPin } from "lucide-react";

const TrustBar = () => {
  const features = [
    { icon: Shield, text: "Cancelación flexible" },
    { icon: FileCheck, text: "Factura y comprobantes" },
    { icon: Headphones, text: "Soporte 24/7" },
    { icon: MapPin, text: "Salidas desde tu ciudad" },
  ];

  return (
    <section className="bg-secondary py-8 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <feature.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm md:text-base font-medium text-foreground">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
