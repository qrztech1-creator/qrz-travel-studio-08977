import { Headphones, Users, Sparkles, HeartHandshake, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Headphones,
    title: "Atendimento VIP 24/7",
    description:
      "Equipe premium dedicada pronta para criar experiências personalizadas e exclusivas.",
  },
  {
    icon: Users,
    title: "Parcerias Globais",
    description:
      "Conexões exclusivas com as melhores companhias aéreas e cruzeiros de luxo do mundo.",
  },
  {
    icon: Sparkles,
    title: "Experiências Únicas",
    description:
      "Roteiros exclusivos sob medida que superam expectativas e criam memórias eternas.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Completo",
    description:
      "Acompanhamento VIP em todas as etapas para garantir sua total tranquilidade.",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium dark background with gradient */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-dark)' }}></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30">
            <Award className="h-4 w-4 text-secondary animate-glow" />
            <span className="text-sm font-semibold text-secondary">Diferenciais Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Por Que Escolher a QRZ?
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-secondary to-secondary-dark mx-auto mb-8 rounded-full shadow-gold-glow"></div>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
            Exclusividade e sofisticação em cada detalhe da sua jornada
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Glowing icon container */}
                <div className="relative inline-flex items-center justify-center mb-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative w-24 h-24 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-gold-glow transition-all duration-500">
                    <Icon className="h-12 w-12 text-white animate-glow" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-secondary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Premium Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-2">10+</div>
            <div className="text-white/80">Anos de Experiência</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-2">5000+</div>
            <div className="text-white/80">Clientes Satisfeitos</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="text-5xl font-bold text-secondary mb-2">100+</div>
            <div className="text-white/80">Destinos Exclusivos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
