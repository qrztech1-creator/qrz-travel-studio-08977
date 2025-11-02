import { Button } from "@/components/ui/button";
import { Plane, Ship, Package, MapPin, Sparkles } from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Passagens Aéreas",
    description:
      "Tarifas premium com as melhores companhias internacionais. Voe com conforto e estilo.",
    action: "Consultar",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Ship,
    title: "Cruzeiros de Luxo",
    description:
      "Experiências premium com MSC, Costa, Royal Caribbean. Navegue com exclusividade.",
    action: "Consultar",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Package,
    title: "Pacotes Exclusivos",
    description:
      "All-inclusive premium: hospedagem 5 estrelas, transfers VIP e experiências únicas.",
    action: "Consultar",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: MapPin,
    title: "Roteiros Personalizados",
    description:
      "Consultoria especializada para criar sua viagem dos sonhos com suporte total.",
    action: "Consultar",
    gradient: "from-orange-500 to-red-600",
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicos" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Tudo o que você precisa para viver momentos inesquecíveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl p-8 hover-lift shadow-card border border-border overflow-hidden flex flex-col min-h-[420px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon with animated background */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-accent group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  {service.description}
                </p>
                <Button
                  onClick={scrollToContact}
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 rounded-xl uppercase font-bold mt-auto"
                >
                  COTAR AGORA
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
