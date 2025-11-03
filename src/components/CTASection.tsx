import { Button } from "@/components/ui/button";
import { MessageCircle, Plane, Sparkles } from "lucide-react";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/5527999936682", "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
          alt="Viagem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/70"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Pronto para sua próxima
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-white">
              aventura exclusiva?
            </span>
          </h2>
          
          <p className="text-2xl md:text-3xl text-white/95 font-light max-w-2xl mx-auto">
            Fale com a Turismos QRZ e crie seu pacote premium personalizado
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden bg-white hover:bg-white/90 text-primary uppercase font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Plane className="mr-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">SOLICITAR ORÇAMENTO VIP</span>
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-3 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary uppercase font-bold text-xl px-12 py-8 rounded-full shadow-xl transition-all duration-500 hover:scale-110"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              ATENDIMENTO IMEDIATO
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-glow"></div>
              <span className="font-semibold">Consultoria Especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-glow"></div>
              <span className="font-semibold">Atendimento Personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
