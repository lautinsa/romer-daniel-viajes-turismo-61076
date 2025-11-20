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
import cancunDiciembre1 from "@/assets/packages/cancun-diciembre-1.jpg";
import cancunDiciembre2 from "@/assets/packages/cancun-diciembre-2.jpg";
import cancunDiciembre3 from "@/assets/packages/cancun-diciembre-3.jpg";
import puntacanaDiciembre1 from "@/assets/packages/puntacana-diciembre-1.jpg";
import puntacanaDiciembre2 from "@/assets/packages/puntacana-diciembre-2.jpg";
import puntacanaDiciembre3 from "@/assets/packages/puntacana-diciembre-3.jpg";
import alemania1 from "@/assets/packages/alemania-1.jpg";
import alemania2 from "@/assets/packages/alemania-2.jpg";
import alemania3 from "@/assets/packages/alemania-3.jpg";
import dubai1 from "@/assets/packages/dubai-1.jpg";
import dubai2 from "@/assets/packages/dubai-2.jpg";
import dubai3 from "@/assets/packages/dubai-3.jpg";
import turquiaGrecia1 from "@/assets/packages/turquia-grecia-1.png";
import turquiaGrecia2 from "@/assets/packages/turquia-grecia-2.jpg";
import turquiaGrecia3 from "@/assets/packages/turquia-grecia-3.jpg";
import colombia1 from "@/assets/packages/colombia-1.jpg";
import colombia2 from "@/assets/packages/colombia-2.jpg";
import colombia3 from "@/assets/packages/colombia-3.jpg";

export interface MonthlyPrice {
  month: string;
  price: number;
  beforePrice?: number;
}

export interface Package {
  slug: string;
  title: string;
  destino: string;
  fecha: string;
  noches: number;
  price: number;
  currency?: 'ARS' | 'USD';
  beforePrice?: number;
  monthlyPrices?: MonthlyPrice[];
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
    image: cancunDiciembre1,
    images: [cancunDiciembre1, cancunDiciembre2, cancunDiciembre3],
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
    image: puntacanaDiciembre1,
    images: [puntacanaDiciembre1, puntacanaDiciembre2, puntacanaDiciembre3],
    excerpt: "Whala Bávaro — All Inclusive. Traslados y asesoría personalizada. Operado por Avianca. Precio por persona en base doble.",
    mpLink: "",
  },
  {
    slug: "iguazu-4-noches",
    title: "Cataratas del Iguazú — 4 noches",
    destino: "Argentina / Misiones / Iguazú",
    fecha: "21/01 · 14/02 · 07/03 · 06/04",
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
    fecha: "Enero a Abril",
    noches: 9,
    price: 990,
    monthlyPrices: [
      { month: "ENERO", price: 1380 },
      { month: "FEBRERO", price: 1410 },
      { month: "MARZO", price: 1380 },
      { month: "ABRIL", price: 990 },
    ],
    seats: 9,
    seatsTotal: 18,
    deadline: "2026-04-30",
    image: buzios1,
    images: [buzios1, buzios2, buzios3],
    excerpt: "10 días / 9 noches. Aéreos desde Buenos Aires + traslados + pousada 3★/4★. Desayuno incluido.",
    mpLink: "",
  },
  {
    slug: "camboriu-8-noches",
    title: "Camboriú — 8 noches",
    destino: "Brasil / Santa Catarina / Camboriú",
    fecha: "Enero a Abril",
    noches: 8,
    price: 790,
    monthlyPrices: [
      { month: "ENERO", price: 940, beforePrice: 846 },
      { month: "FEBRERO", price: 990 },
      { month: "MARZO", price: 790 },
      { month: "ABRIL", price: 790 },
    ],
    seats: 10,
    seatsTotal: 24,
    deadline: "2025-11-30",
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
    price: 2700,
    seats: 8,
    seatsTotal: 16,
    deadline: "2026-02-01",
    image: cancun1,
    images: [cancun1, cancun2],
    excerpt: "All Inclusive. Hotel Imperial Las Perlas 3★. Aéreos desde Buenos Aires + traslados.",
    mpLink: "",
  },
  {
    slug: "alemania-francia-12-noches",
    title: "Alemania — 15 días / 12 noches",
    destino: "Alemania / Francia",
    fecha: "14 de agosto 2026",
    noches: 12,
    price: 5799,
    currency: 'USD',
    seats: 6,
    seatsTotal: 12,
    deadline: "2026-07-15",
    image: alemania1,
    images: [alemania1, alemania2, alemania3],
    excerpt: "Salida grupal acompañada desde Buenos Aires. Doble a compartir garantizada. Aéreos Lufthansa, hoteles 4★, desayunos, visitas guiadas, traslados. Operado por Special Tours / Lufthansa.",
    mpLink: "",
  },
  {
    slug: "dubai-mujeres-9-noches",
    title: "Dubái para Mujeres — 11 días / 9 noches",
    destino: "Dubái y Abu Dhabi",
    fecha: "18 de abril 2026",
    noches: 9,
    price: 3490,
    currency: 'USD',
    seats: 8,
    seatsTotal: 15,
    deadline: "2026-03-20",
    image: dubai1,
    images: [dubai1, dubai2, dubai3],
    excerpt: "Salida grupal exclusiva para mujeres desde Buenos Aires. Safari por el desierto, compras, spa, té en el Burj Al Arab, crucero por la marina. Operado por Splendid / Emirates.",
    mpLink: "",
  },
  {
    slug: "turquia-islas-griegas-16-noches",
    title: "Turquía e Islas Griegas — 18 días / 16 noches",
    destino: "Turquía / Grecia",
    fecha: "11 de junio 2026",
    noches: 16,
    price: 5716,
    currency: 'USD',
    seats: 5,
    seatsTotal: 12,
    deadline: "2026-05-15",
    image: turquiaGrecia1,
    images: [turquiaGrecia1, turquiaGrecia2, turquiaGrecia3],
    excerpt: "Salida grupal acompañada desde Buenos Aires. Doble a compartir garantizada. Aéreos Turkish Airlines, hoteles 4★, crucero y excursiones. Operado por Euroriente / Turkish Airlines.",
    mpLink: "",
  },
  {
    slug: "colombia-13-dias",
    title: "🇨🇴 Colombia — 13 días / 12 noches",
    destino: "Eje cafetero / Medellín / Cartagena",
    fecha: "19 de mayo 2026",
    noches: 12,
    price: 2288,
    currency: 'USD',
    seats: 6,
    seatsTotal: 6,
    deadline: "2026-05-05",
    image: colombia1,
    images: [colombia1, colombia2, colombia3],
    excerpt: "Vuelos LATAM. Bogotá, Eje Cafetero, Medellín y Cartagena. Desayunos incluidos. Catedral de Sal de Zipaquirá, Valle de Cocora, finca cafetera RECUCA, city tours. Acompañamiento permanente y asistencia médica. Impuestos USD 788. Seña USD 450.",
    mpLink: "",
  },
];
