import iguazu1 from "@/assets/packages/iguazu-1.jpg";
import iguazu2 from "@/assets/packages/iguazu-2.jpg";
import iguazu3 from "@/assets/packages/iguazu-3.jpg";
import buzios1 from "@/assets/packages/buzios-1.jpg";
import buzios2 from "@/assets/packages/buzios-2.jpg";
import buzios3 from "@/assets/packages/buzios-3.jpg";
import camboriu1 from "@/assets/packages/camboriu-1.jpg";
import camboriu2 from "@/assets/packages/camboriu-2.jpg";
import camboriu3 from "@/assets/packages/camboriu-3.jpg";
import cancun1 from "@/assets/packages/cancun-1.jpg";
import cancun2 from "@/assets/packages/cancun-2.jpg";
import cancun3 from "@/assets/packages/cancun-3.jpg";
import puntacana1 from "@/assets/packages/puntacana-1.jpg";
import puntacana2 from "@/assets/packages/puntacana-2.jpg";
import bayahibe1 from "@/assets/packages/bayahibe-1.jpg";
import cancunDiciembre from "@/assets/packages/cancun-diciembre.jpg";
import puntacanaDiciembre from "@/assets/packages/puntacana-diciembre.jpg";

export interface Package {
  slug: string;
  title: string;
  destino: string;
  fecha: string;
  noches: number;
  price: number;
  currency?: 'ARS' | 'USD';
  beforePrice?: number;
  seats: number;
  seatsTotal: number;
  deadline: string;
  image: string;
  images?: string[];
  excerpt: string;
  mpLink?: string;
}

export const packages: Package[] = [
  {
    slug: "cancun-7-noches-diciembre",
    title: "Cancún — 7 noches",
    destino: "México / Quintana Roo / Cancún",
    fecha: "27 de diciembre",
    noches: 7,
    price: 2249,
    currency: 'USD',
    seats: 8,
    seatsTotal: 16,
    deadline: "2025-12-20",
    image: cancunDiciembre,
    excerpt: "Flamingo Cancún Resort — All Inclusive. Traslados y asesoría personalizada. Operado por Avianca. Precio por persona en base doble.",
    mpLink: "",
  },
  {
    slug: "punta-cana-9-noches-diciembre",
    title: "Punta Cana — 9 noches",
    destino: "República Dominicana / Caribe / Punta Cana",
    fecha: "27 de diciembre",
    noches: 9,
    price: 2639,
    currency: 'USD',
    seats: 8,
    seatsTotal: 16,
    deadline: "2025-12-20",
    image: puntacanaDiciembre,
    excerpt: "Whala Bávaro — All Inclusive. Traslados y asesoría personalizada. Operado por Avianca. Precio por persona en base doble.",
    mpLink: "",
  },
  {
    slug: "iguazu-4-noches",
    title: "Cataratas del Iguazú — 4 noches",
    destino: "Argentina / Misiones / Iguazú",
    fecha: "24/11 · 21/01 · 14/02 · 07/03 · 06/04",
    noches: 4,
    price: 520000,
    currency: 'ARS',
    seats: 8,
    seatsTotal: 20,
    deadline: "2025-11-20",
    image: iguazu1,
    images: [iguazu1, iguazu2, iguazu3],
    excerpt: "7 días / 4 noches. Media pensión. Micro desde Bahía Blanca + asistencia al viajero.",
    mpLink: "",
  },
  {
    slug: "buzios-9-noches",
    title: "Búzios — 9 noches",
    destino: "Brasil / Río de Janeiro / Búzios",
    fecha: "Enero a Mayo",
    noches: 9,
    price: 990,
    seats: 9,
    seatsTotal: 18,
    deadline: "2026-05-30",
    image: buzios1,
    images: [buzios1, buzios2, buzios3],
    excerpt: "10 días / 9 noches. Aéreos desde Buenos Aires + traslados + pousada 3★/4★. Desayuno incluido.",
    mpLink: "",
  },
  {
    slug: "camboriu-8-noches",
    title: "Camboriú — 8 noches",
    destino: "Brasil / Santa Catarina / Camboriú",
    fecha: "Todo el año",
    noches: 8,
    price: 780,
    seats: 10,
    seatsTotal: 24,
    deadline: "2026-12-31",
    image: camboriu1,
    images: [camboriu1, camboriu2, camboriu3],
    excerpt: "12 días / 8 noches. Media pensión. Micro desde Bahía Blanca + hotel céntrico.",
    mpLink: "",
  },
  {
    slug: "punta-cana-bayahibe-10-noches",
    title: "Punta Cana & Bayahibe — 10 noches",
    destino: "República Dominicana / Caribe",
    fecha: "Mayo · Junio · Sept · Oct · Nov",
    noches: 10,
    price: 2100,
    seats: 6,
    seatsTotal: 12,
    deadline: "2026-11-30",
    image: puntacana1,
    images: [puntacana1, puntacana2, bayahibe1],
    excerpt: "All Inclusive. 5 noches en cada destino. Aéreos desde Buenos Aires + traslados.",
    mpLink: "",
  },
  {
    slug: "tailandia-10-noches",
    title: "Tailandia — 10 noches",
    destino: "Asia / Tailandia",
    fecha: "Febrero 2026",
    noches: 10,
    price: 3500,
    seats: 4,
    seatsTotal: 12,
    deadline: "2026-01-15",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1600",
    images: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1600",
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1600",
      "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?q=80&w=1600"
    ],
    excerpt: "14 días / 10 noches. Aéreos desde Buenos Aires + traslados + desayuno. Templos, playas y cultura.",
    mpLink: "",
  },
  {
    slug: "cancun-7-noches",
    title: "Cancún, México — 7 noches",
    destino: "México / Quintana Roo / Cancún",
    fecha: "19 de febrero",
    noches: 7,
    price: 1290,
    seats: 8,
    seatsTotal: 16,
    deadline: "2026-02-01",
    image: cancun1,
    images: [cancun1, cancun2, cancun3],
    excerpt: "All Inclusive. Hotel Imperial Las Perlas 3★. Aéreos desde Buenos Aires + traslados.",
    mpLink: "",
  },
];
