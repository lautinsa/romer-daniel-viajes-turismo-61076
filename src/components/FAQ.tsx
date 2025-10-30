import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "¿Cómo reservo un paquete?",
      answer:
        "Podés reservar directamente por WhatsApp haciendo click en el botón de cada paquete. Nuestro equipo te va a guiar en cada paso.",
    },
    {
      question: "¿Qué incluyen los paquetes?",
      answer:
        "Cada paquete incluye vuelos, alojamiento y asistencia al viajero. Según el destino, algunos incluyen traslados, excursiones o régimen de comidas. Consultanos por cada paquete específico para conocer todos los detalles.",
    },
    {
      question: "¿Puedo cancelar mi reserva?",
      answer:
        "Sí, ofrecemos cancelación gratuita con ciertas condiciones según la fecha de salida. Te recomendamos contratar el seguro de cancelación para mayor tranquilidad. Consultanos los términos específicos.",
    },
    {
      question: "¿Emiten factura?",
      answer:
        "Sí, emitimos factura A o B según corresponda. Somos una agencia habilitada y cumplimos con todas las normativas vigentes.",
    },
    {
      question: "¿Qué formas de pago aceptan?",
      answer:
        "Aceptamos transferencia bancaria, tarjetas de crédito (con financiación) y efectivo. Consultanos las cuotas disponibles para cada medio de pago.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Todo lo que necesitás saber antes de reservar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background border border-border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
