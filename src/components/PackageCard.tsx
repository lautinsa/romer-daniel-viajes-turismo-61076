import { MapPin, Calendar, Moon, AlertCircle, ChevronLeft, ChevronRight, DollarSign, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package } from "@/data/packages";
import { getDeadlineText, getAvailabilityPercentage, getWhatsAppLink, formatPrice } from "@/utils/helpers";
import { useState, useEffect } from "react";

interface PackageCardProps {
  pkg: Package;
}

const PackageCard = ({ pkg }: PackageCardProps) => {
  const deadlineText = getDeadlineText(pkg.deadline);
  const availabilityPercentage = getAvailabilityPercentage(pkg.seats, pkg.seatsTotal);
  const whatsappLink = getWhatsAppLink(pkg.title, pkg.destino, pkg.fecha);
  const isUrgent = pkg.seats <= 3;
  const images = pkg.images || [pkg.image];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={`${pkg.title} - ${pkg.destino}`}
          className="w-full h-full object-contain bg-muted/30 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-card-overlay" />
        
        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Dots indicator */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-white w-6" : "bg-white/50"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
        
        {/* Black Friday Badge */}
        {pkg.blackFriday && pkg.blackFridayDeadline && new Date(pkg.blackFridayDeadline) >= new Date() && (
          <Badge
            className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 text-white shadow-lg animate-pulse border-0"
          >
            <Zap className="w-3 h-3 mr-1 fill-white" />
            BLACK FRIDAY
          </Badge>
        )}

        {/* Urgency Badge */}
        <Badge
          variant="destructive"
          className="absolute top-4 right-4 shadow-lg animate-pulse"
        >
          <AlertCircle className="w-3 h-3 mr-1" />
          {deadlineText}
        </Badge>

        {/* Price */}
        <div className="absolute bottom-4 left-4 right-4">
          {!pkg.monthlyPrices && pkg.beforePrice && (
            <p className="text-white/80 text-sm line-through mb-1">
              Desde {formatPrice(pkg.beforePrice, pkg.currency)}
            </p>
          )}
          {!pkg.monthlyPrices && (
            <p className="text-white text-3xl font-bold">
              Desde {formatPrice(pkg.price, pkg.currency)}
            </p>
          )}
          {pkg.monthlyPrices && (
            <p className="text-white text-2xl font-bold">
              Desde {formatPrice(pkg.price, pkg.currency)}
            </p>
          )}
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground">{pkg.title}</h3>

        {/* Details */}
        <div className="space-y-2 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">{pkg.destino}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm">{pkg.fecha}</span>
          </div>
          <div className="flex items-center gap-2">
            <Moon className="w-4 h-4 text-primary" />
            <span className="text-sm">{pkg.noches} noches</span>
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground">{pkg.excerpt}</p>

        {/* Monthly Prices */}
        {pkg.monthlyPrices && (
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-primary" />
              <p className="text-sm font-semibold text-foreground">Precios por mes</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {pkg.monthlyPrices.map((monthPrice) => (
                <div key={monthPrice.month} className="bg-background/80 backdrop-blur-sm rounded-md p-2.5 text-center border border-border/50 hover:border-primary/50 transition-colors">
                  <p className="text-xs text-muted-foreground font-medium mb-1.5">
                    {monthPrice.month}
                  </p>
                  {monthPrice.beforePrice && (
                    <p className="text-xs text-muted-foreground line-through mb-0.5">
                      USD {monthPrice.beforePrice}
                    </p>
                  )}
                  <p className="text-sm font-bold text-primary">
                    USD {monthPrice.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Availability Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Disponibilidad</span>
            <span className={`font-semibold ${isUrgent ? "text-destructive" : "text-primary"}`}>
              {pkg.seats} lugar{pkg.seats !== 1 ? "es" : ""} disponible{pkg.seats !== 1 ? "s" : ""}
            </span>
          </div>
          <Progress value={availabilityPercentage} className="h-2" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2 pt-2">
          <Button
            className="w-full bg-accent hover:bg-accent-hover shadow-button"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            Reservar por WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PackageCard;
