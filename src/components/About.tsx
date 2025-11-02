import { Award, Heart, Shield, Star } from "lucide-react";
import teamImage from "@/assets/team-qrz.jpg";

const About = () => {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Background with partial color */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Sobre a Turismos QRZ
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Fundada por Thiago Manhães, transformamos sonhos em experiências
            inesquecíveis com atendimento premium e personalização total.
          </p>
        </div>

        {/* Split Layout with Image and Text */}
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto mb-24">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl"></div>
            <img
              src={teamImage}
              alt="Equipe Turismos QRZ"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground font-medium">Anos de Experiência</div>
            </div>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Excelência Comprovada</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso compromisso é transformar cada jornada em uma lembrança premium.
                    Com anos de experiência, oferecemos consultoria especializada e personalizada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Parcerias Premium</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Trabalhamos com as principais companhias aéreas e operadoras de cruzeiros
                    do mundo, garantindo sempre as melhores condições exclusivas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-accent mb-2">Suporte Total</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Acompanhamento VIP em todas as etapas: antes, durante e depois da sua viagem.
                    Sua tranquilidade é nossa prioridade absoluta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl p-10 text-center shadow-card hover-lift border border-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mb-6 shadow-lg">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Experiência</h3>
              <p className="text-muted-foreground leading-relaxed">
                Anos de excelência em consultoria personalizada e atendimento premium.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl p-10 text-center shadow-card hover-lift border border-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl mb-6 shadow-lg">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Personalização</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cada viagem é única. Criamos roteiros exclusivos sob medida para você.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-dark rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-2xl p-10 text-center shadow-card hover-lift border border-border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary-dark rounded-2xl mb-6 shadow-lg">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-accent">Confiança</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suporte VIP completo em toda jornada. Sua segurança é nossa missão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
