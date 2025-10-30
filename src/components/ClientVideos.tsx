const ClientVideos = () => {
  const videos = [
    {
      src: "/videos/client-video-1.mp4",
      title: "Experiencias únicas con Romero Viajes",
    },
    {
      src: "/videos/client-video-2.mp4",
      title: "Momentos inolvidables de nuestros clientes",
    },
    {
      src: "/videos/client-video-3.mp4",
      title: "Más experiencias reales de nuestros clientes",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🎥 Experiencias reales
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mirá los momentos que compartieron nuestros clientes durante sus viajes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <video
                controls
                className="w-full h-full object-cover rounded-lg"
                preload="metadata"
              >
                <source src={video.src} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVideos;
