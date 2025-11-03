import golLogo from "@/assets/partners/gol.jpg";
import latamLogo from "@/assets/partners/latam.jpg";
import azulLogo from "@/assets/partners/azul.jpg";
import airfranceLogo from "@/assets/partners/airfrance.jpg";
import qatarLogo from "@/assets/partners/qatar.png";
import emiratesLogo from "@/assets/partners/emirates.png";

const Partners = () => {
  const partners = [
    { name: "Gol", logo: golLogo },
    { name: "LATAM", logo: latamLogo },
    { name: "Azul", logo: azulLogo },
    { name: "Air France", logo: airfranceLogo },
    { name: "Qatar Airways", logo: qatarLogo },
    { name: "Emirates", logo: emiratesLogo },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-accent mb-6 tracking-tight">
            Parceiros
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex animate-scroll">
            {/* Primeiro conjunto de logos */}
            {partners.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center p-6 bg-card rounded-2xl hover-lift shadow-card border border-border group"
                style={{ width: '200px', height: '120px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Segundo conjunto de logos para loop infinito */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center p-6 bg-card rounded-2xl hover-lift shadow-card border border-border group"
                style={{ width: '200px', height: '120px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
