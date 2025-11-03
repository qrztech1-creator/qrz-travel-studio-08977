import { Button } from "@/components/ui/button";
import { Plane, MessageCircle, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
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
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Lighter Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Viagem dos sonhos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/35 to-accent/30"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white py-32">
        <div className="max-w-5xl mx-auto space-y-10 animate-fade-in backdrop-blur-sm bg-black/10 rounded-3xl p-8 shadow-lg">
          <h1 className="text-6xl md:text-8xl font-bold leading-tight text-balance tracking-tight drop-shadow-md">
            Transforme seus{" "}
            <span className="highlight-word">
              sonhos em realidade
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto text-balance leading-relaxed font-light drop-shadow-sm">
            Experiências personalizadas — passagens, cruzeiros de luxo,
            pacotes exclusivos e atendimento VIP em cada detalhe.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-accent via-accent to-primary hover:shadow-xl text-white uppercase font-bold text-lg px-10 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Plane className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                SOLICITAR ORÇAMENTO
              </span>
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/40 text-white hover:bg-white hover:text-primary uppercase font-bold text-lg px-10 py-7 rounded-full shadow-xl transition-all duration-500 hover:scale-105"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              ATENDIMENTO VIP
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow"></div>
              <span className="text-sm font-medium">Consultoria Especializada</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-glow"></div>
              <span className="text-sm font-medium">Atendimento Personalizado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
