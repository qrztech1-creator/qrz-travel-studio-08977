import { Star, Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Rio de Janeiro, RJ",
    text: "A Turismos QRZ transformou nossas férias em família! Atendimento VIP impecável e cada detalhe foi perfeito. Uma experiência verdadeiramente premium!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "João Santos",
    location: "São Paulo, SP",
    text: "Profissionalismo e dedicação excepcionais. Thiago cuidou de absolutamente tudo, nos deixando apenas aproveitar cada momento. Experiência cinco estrelas!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Ana Costa",
    location: "Belo Horizonte, MG",
    text: "Meu cruzeiro foi sensacional graças à QRZ! Atendimento personalizado premium, tarifas exclusivas e suporte total. Simplesmente perfeito do início ao fim.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-24 bg-gradient-subtle relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2 rounded-full mb-6">
            <Star className="h-4 w-4 text-secondary fill-secondary animate-glow" />
            <span className="text-sm font-semibold text-primary">Avaliações Premium</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Experiências Reais
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-light">
            O que nossos clientes VIP dizem sobre nós
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-3xl p-10 hover-lift shadow-card border border-border overflow-hidden transition-all duration-500 ${
                index === activeIndex ? "ring-2 ring-primary shadow-xl scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Decorative quote */}
              <Quote className="absolute top-6 right-6 h-16 w-16 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Avatar with glow */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="relative w-20 h-20 rounded-full border-4 border-white shadow-lg group-hover:border-primary transition-all duration-300"
                />
              </div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-secondary text-secondary animate-glow"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg italic relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border/50 pt-6">
                <p className="font-bold text-lg text-accent">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.location}
                </p>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-gradient-to-r from-primary to-secondary"
                  : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
