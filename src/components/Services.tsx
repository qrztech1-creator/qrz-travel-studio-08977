import { Button } from "@/components/ui/button";
import passagensImg from "@/assets/services/passagens.jpg";
import cruzeirosImg from "@/assets/services/cruzeiros.jpg";
import pacotesImg from "@/assets/services/pacotes.jpg";
import roteirosImg from "@/assets/services/roteiros.jpg";

const services = [
  {
    image: passagensImg,
    title: "Passagens Aéreas",
    description:
      "Tarifas premium com as melhores companhias internacionais. Voe com conforto e estilo.",
  },
  {
    image: cruzeirosImg,
    title: "Cruzeiros",
    description:
      "Experiências premium com MSC, Costa, Royal Caribbean. Navegue com exclusividade.",
  },
  {
    image: pacotesImg,
    title: "Pacotes Exclusivos",
    description:
      "All-inclusive premium: hospedagem 5 estrelas, transfers VIP e experiências únicas.",
  },
  {
    image: roteirosImg,
    title: "Roteiros Personalizados",
    description:
      "Consultoria especializada para criar sua viagem dos sonhos com suporte total.",
  },
];

const Services = () => {
  const scrollToContact = () => {
    // Abrir link direto para WhatsApp em vez de rolar para a seção de contato
    window.open(
      "https://api.whatsapp.com/send/?phone=5527999936682&text&type=phone_number&app_absent=0",
      "_blank"
    );
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
            return (
              <div
                key={index}
                className="group relative bg-card rounded-3xl overflow-hidden shadow-card border border-border flex flex-col min-h-[480px] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-b from-transparent to-card"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <Button
                    onClick={scrollToContact}
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 rounded-xl uppercase font-bold mt-auto"
                  >
                    COTAR AGORA
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
