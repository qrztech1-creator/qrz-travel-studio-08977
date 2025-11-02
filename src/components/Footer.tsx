import { Facebook, Instagram, Mail, Phone, MapPin, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-accent text-accent-foreground overflow-hidden">
      {/* World map texture background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="worldmap" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor"/>
              <circle cx="50" cy="30" r="1" fill="currentColor"/>
              <circle cx="80" cy="60" r="1" fill="currentColor"/>
              <circle cx="30" cy="80" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#worldmap)"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="https://i.postimg.cc/L5qzYQmh/logoqrz-Editado.png"
                alt="Turismos QRZ"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-accent-foreground/80 leading-relaxed max-w-md mb-6 text-lg">
              Transformando sonhos em experiências premium desde o primeiro
              contato. Sua jornada exclusiva começa com a Turismos QRZ.
            </p>
            <div className="flex items-center gap-3 text-secondary">
              <Plane className="h-5 w-5 animate-float" />
              <span className="font-semibold">Experiências que transformam vidas</span>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Links Úteis</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#inicio"
                  className="text-accent-foreground/80 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-accent-foreground/80 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-accent-foreground/80 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Serviços Premium
                </a>
              </li>
              <li>
                <a
                  href="#depoimentos"
                  className="text-accent-foreground/80 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-accent-foreground/80 hover:text-secondary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Contato VIP
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-secondary">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent-foreground/90 font-medium">
                    (27) 99993-6682
                  </p>
                  <p className="text-accent-foreground/60 text-sm">
                    Segunda à sábado — 08:00 às 19:30
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent-foreground/90 font-medium break-all">
                    thiago@qrztech.com
                  </p>
                  <p className="text-accent-foreground/60 text-sm">
                    Email de contato
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent-foreground/90 font-medium">
                    @othiagoqrz
                  </p>
                  <p className="text-accent-foreground/60 text-sm">
                    Instagram
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-accent-foreground/90 font-medium">
                    Rua Doutor Jairo de Matos Pereira 600
                  </p>
                  <p className="text-accent-foreground/60 text-sm">
                    Ed. Praia Corporate, Sala 406., Vila Velha, ES
                  </p>
                </div>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-semibold text-sm mb-4 text-secondary">Redes Sociais</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-dark transition-all duration-300 hover:scale-110 hover:shadow-gold-glow"
                >
                  <Facebook className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="group relative inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-secondary hover:to-secondary-dark transition-all duration-300 hover:scale-110 hover:shadow-gold-glow"
                >
                  <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-accent-foreground/70 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Turismos QRZ. Todos os direitos
              reservados.
            </p>
            <p className="text-accent-foreground/70 text-sm text-center md:text-right">
              Desenvolvido por <a href="https://qrztech.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-semibold hover:underline">QRZ Tech</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
