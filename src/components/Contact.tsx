import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5527999936682", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:thiago@qrztech.com";
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/othiagoqrz/", "_blank");
  };

  return (
    <section id="contato" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Entre em Contato
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            Fale conosco e transforme sua próxima viagem em realidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Informações de Contato */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group relative bg-card rounded-3xl p-8 hover-lift shadow-card border border-border overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mb-6 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500 mx-auto">
                <Phone className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-accent">Telefone</h3>
              <p className="text-muted-foreground mb-2 font-medium">(27) 99993-6682</p>
              <p className="text-sm text-muted-foreground/70">Segunda à sábado</p>
              <p className="text-sm text-muted-foreground/70">08:00 às 19:30</p>
            </div>

            <div className="group relative bg-card rounded-3xl p-8 hover-lift shadow-card border border-border overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-secondary to-secondary-dark rounded-2xl mb-6 shadow-lg group-hover:shadow-gold-glow group-hover:scale-110 transition-all duration-500 mx-auto">
                <Mail className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-accent">Email</h3>
              <p className="text-muted-foreground mb-2 font-medium break-all">thiago@qrztech.com</p>
              <p className="text-sm text-muted-foreground/70">Resposta em até 24h</p>
            </div>

            <div className="group relative bg-card rounded-3xl p-8 hover-lift shadow-card border border-border overflow-hidden text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent to-primary-dark rounded-2xl mb-6 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500 mx-auto">
                <Instagram className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-accent">Instagram</h3>
              <p className="text-muted-foreground mb-2 font-medium">@othiagoqrz</p>
              <p className="text-sm text-muted-foreground/70">Acompanhe nossas novidades</p>
            </div>
          </div>

          {/* Localização */}
          <div className="group relative bg-card rounded-3xl p-10 hover-lift shadow-card border border-border overflow-hidden text-center mb-12">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-6 shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-500 mx-auto">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold mb-2 text-accent">Localização</h3>
            <p className="text-lg text-muted-foreground">Rua Doutor Jairo de Matos Pereira 600, Ed. Praia Corporate, Sala 406., Vila Velha, ES</p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow text-white uppercase font-bold text-lg px-12 py-8 rounded-full shadow-2xl transition-all duration-500 hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
              <span className="relative z-10">WHATSAPP</span>
            </Button>
            
            <Button
              onClick={handleEmail}
              size="lg"
              variant="outline"
              className="bg-white hover:bg-primary hover:text-white border-2 border-primary text-primary uppercase font-bold text-lg px-12 py-8 rounded-full shadow-xl transition-all duration-500 hover:scale-105"
            >
              <Mail className="mr-3 h-6 w-6" />
              ENVIAR EMAIL
            </Button>
            
            <Button
              onClick={handleInstagram}
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white border-2 border-accent text-accent uppercase font-bold text-lg px-12 py-8 rounded-full shadow-xl transition-all duration-500 hover:scale-105"
            >
              <Instagram className="mr-3 h-6 w-6" />
              INSTAGRAM
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
