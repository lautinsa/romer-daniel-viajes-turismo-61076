import { config } from "@/data/config";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img src={logo} alt={config.brandName} className="h-16 w-16" />
          </div>
          <p className="text-lg font-bold text-primary mb-2">{config.brandName}</p>
          
          {/* Redes Sociales */}
          <div className="flex justify-center gap-4 my-4">
            <a
              href={config.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-muted rounded-lg transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} className="text-primary" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href={config.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-background hover:bg-muted rounded-lg transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} className="text-primary" />
              <span className="text-sm font-medium">Facebook</span>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} {config.brandName}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Agencia de viajes habilitada | Legajo {config.legajo}
          </p>
          
          {/* Correos de contacto */}
          <div className="mt-4 space-y-1">
            <p className="text-xs text-muted-foreground">
              <a href="mailto:davidc@romerodanielviajesyturismo.com.ar" className="hover:text-primary transition-colors">
                davidc@romerodanielviajesyturismo.com.ar
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              <a href="mailto:danielr@romerodanielviajesyturismo.com.ar" className="hover:text-primary transition-colors">
                danielr@romerodanielviajesyturismo.com.ar
              </a>
            </p>
            <p className="text-xs text-muted-foreground">
              <a href="mailto:nicolasm@romerodanielviajesyturismo.com.ar" className="hover:text-primary transition-colors">
                nicolasm@romerodanielviajesyturismo.com.ar
              </a>
            </p>
          </div>
          
          {/* Crédito del desarrollador */}
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs md:text-sm text-muted-foreground/70 px-4">
              Sitio desarrollado por Lautaro Insaurralde —{" "}
              <a 
                href="mailto:lautinsaurralde@gmail.com?subject=Quiero%20mi%20página%20web"
                className="hover:text-primary transition-colors underline underline-offset-2"
              >
                ¿Querés una página web así? Escribime
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
