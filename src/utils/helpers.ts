import { config } from "@/data/config";

export const getDeadlineText = (deadline: string): string => {
  const deadlineDate = new Date(deadline);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  deadlineDate.setHours(0, 0, 0, 0);
  
  const diffTime = deadlineDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) return "Promo finalizada";
  if (diffDays === 0) return "¡Termina hoy!";
  if (diffDays === 1) return "¡Termina mañana!";
  return `Termina en ${diffDays} días`;
};

export const getAvailabilityPercentage = (seats: number, seatsTotal: number): number => {
  return Math.round(((seatsTotal - seats) / seatsTotal) * 100);
};

export const getWhatsAppLink = (title: string, destino: string, fecha: string): string => {
  const message = `Hola! Me interesa el paquete "${title}" a ${destino}, salida ${fecha}. ¿Me podés dar más info?`;
  return `https://wa.me/${config.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
};

export const formatPrice = (price: number, currency: 'ARS' | 'USD' = 'USD'): string => {
  if (currency === 'ARS') {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price);
  }
  return `USD ${price.toLocaleString('es-AR')}`;
};
