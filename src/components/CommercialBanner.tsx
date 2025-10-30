const CommercialBanner = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-primary to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight uppercase tracking-wide">
            <span className="block mb-2 md:mb-3">
              Te armamos la salida a donde quieras
            </span>
            <span className="block mb-2 md:mb-3">
              con los mejores precios y en cuotas o pagos a tu medida.
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 md:mt-6 font-extrabold">
              Descubrí el mundo con nosotros.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default CommercialBanner;
