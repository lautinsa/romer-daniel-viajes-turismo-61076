import { Zap, Calendar } from "lucide-react";
import { Card } from "./ui/card";

const BlackFridayBanner = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <Card className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-red-500/10 border-yellow-400/30 backdrop-blur">
          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold text-lg animate-pulse">
                <Zap className="w-5 h-5 fill-current" />
                BLACK FRIDAY
              </div>
              
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-3">
                  Brasil & Cataratas
                </h2>
                <p className="text-xl md:text-2xl text-yellow-400 font-semibold">
                  ¡Descuentos Exclusivos!
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl mt-8">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">Camboriú</h3>
                  <div className="text-white">
                    <p className="text-3xl font-bold">USD 846</p>
                    <p className="text-sm text-gray-300 mt-1">Enero & Febrero</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">Búzios</h3>
                  <div className="text-white">
                    <p className="text-3xl font-bold">Desde USD 1.100</p>
                    <p className="text-sm text-gray-300 mt-1">Febrero-Marzo con descuento</p>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                  <h3 className="text-yellow-400 font-bold text-lg mb-2">Cataratas</h3>
                  <div className="text-white">
                    <p className="text-3xl font-bold">$560.000</p>
                    <p className="text-sm text-gray-300 mt-1">10% OFF Enero</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold mt-6">
                <Calendar className="w-5 h-5" />
                Válido hasta el 30 de Noviembre
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BlackFridayBanner;
