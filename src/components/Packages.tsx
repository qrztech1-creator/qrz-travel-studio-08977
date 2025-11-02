import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Sparkles, BadgeCheck } from "lucide-react";

const airlines = [
  {
    name: "GOL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Gol_Linhas_A%C3%A9reas_logo.svg/320px-Gol_Linhas_A%C3%A9reas_logo.svg.png",
  },
  {
    name: "LATAM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/LATAM-Logo.svg/320px-LATAM-Logo.svg.png",
  },
  {
    name: "Azul",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Azul_Brazilian_Airlines_logo.svg/320px-Azul_Brazilian_Airlines_logo.svg.png",
  },
  {
    name: "Emirates",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/320px-Emirates_logo.svg.png",
  },
  {
    name: "Qatar",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Qatar_Airways_Logo.svg/320px-Qatar_Airways_Logo.svg.png",
  },
  {
    name: "Air France",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/320px-Air_France_Logo.svg.png",
  },
  {
    name: "TAP",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/TAP_Air_Portugal_Logo.svg/320px-TAP_Air_Portugal_Logo.svg.png",
  },
];

const packages = [
  {
    destination: "Dubai",
    highlight: "7 dias de luxo",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
  },
  {
    destination: "Paris",
    highlight: "Romance e cultura",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
  },
  {
    destination: "Maldivas",
    highlight: "Paraíso tropical",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
  },
  {
    destination: "Nova York",
    highlight: "Experiência urbana",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
  },
  {
    destination: "Tokyo",
    highlight: "Cultura e modernidade",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
  },
  {
    destination: "Santorini",
    highlight: "Ilhas gregas premium",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
  },
];

const Packages = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-secondary animate-glow" />
            <span className="text-sm font-semibold text-primary">Ofertas Exclusivas</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Pacotes Premium
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Experiências exclusivas com as principais companhias do mundo
          </p>
        </div>

        {/* Airlines Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-accent mb-8">
            Parceiros Premium
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12 max-w-6xl mx-auto">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-110"
              >
                <img
                  src={airline.logo}
                  alt={airline.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-card hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.destination}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/50 to-transparent opacity-80"></div>
                  
                  {/* Exclusive Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-secondary to-secondary-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <BadgeCheck className="h-4 w-4 text-white" />
                    <span className="text-xs font-bold text-white">Exclusivo QRZ</span>
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{pkg.destination}</h3>
                  <p className="text-white/90 mb-6 font-light">{pkg.highlight}</p>
                  <Button
                    onClick={scrollToContact}
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/40 text-white hover:bg-white hover:text-primary font-bold rounded-xl transition-all duration-300"
                  >
                    Consultar Disponibilidade
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
