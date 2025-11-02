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
    window.open("https://wa.me/5521999999999", "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient"
        style={{ background: 'var(--gradient-cta-animated)' }}
      ></div>
      
      {/* Parallax decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <Plane className="absolute top-20 right-20 h-32 w-32 text-white animate-float" />
        <Sparkles className="absolute bottom-20 left-20 h-24 w-24 text-white animate-float" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-full border border-white/30">
            <Sparkles className="h-5 w-5 text-white animate-glow" />
            <span className="text-sm font-bold text-white tracking-wide">
              Experiência Premium Aguarda
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Pronto para sua próxima
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-secondary to-white">
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
              className="group relative overflow-hidden bg-white hover:bg-white/90 text-primary font-bold text-xl px-12 py-8 rounded-full shadow-2xl hover:shadow-gold-glow transition-all duration-500 hover:scale-110"
            >
              <Plane className="mr-3 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">Solicitar Orçamento VIP</span>
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-3 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-bold text-xl px-12 py-8 rounded-full shadow-xl transition-all duration-500 hover:scale-110"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Atendimento Imediato
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/90">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-glow"></div>
              <span className="font-semibold">Consultoria Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-glow"></div>
              <span className="font-semibold">Suporte VIP 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-white rounded-full shadow-lg animate-glow"></div>
              <span className="font-semibold">Experiências Exclusivas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
