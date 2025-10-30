export interface Testimonial {
  name: string;
  stars: number;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Estefania Escañuela",
    stars: 5,
    text: "Viaje soñado cumplido! Gracias a ustedes! Excelente todo, hotel, viaje, experiencia!",
  },
  {
    name: "Maria Virginia Zelione",
    stars: 5,
    text: "Excelente atención, calidez en el trato, predisposición para contestar todas nuestras consultas.",
  },
  {
    name: "Patricia Valemberg",
    stars: 5,
    text: "Un viaje inolvidable. Gracias Romero viajes por hacer realidad mi sueño. Realmente serios y comprometidos.",
  },
  {
    name: "Gisella Cuello",
    stars: 5,
    text: "Excelente la atención de la empresa. Muy atentos con el viaje y acompañando en todos los detalles. Súper recomendable!",
  },
];
