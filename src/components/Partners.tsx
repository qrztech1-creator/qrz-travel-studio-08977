import golLogo from "@/assets/partners/gol.jpg";
import latamLogo from "@/assets/partners/latam.jpg";
import azulLogo from "@/assets/partners/azul.jpg";
import airfranceLogo from "@/assets/partners/airfrance.jpg";
import qatarLogo from "@/assets/partners/qatar.png";

const Partners = () => {
  const partners = [
    { name: "Gol", logo: golLogo },
    { name: "LATAM", logo: latamLogo },
    { name: "Azul", logo: azulLogo },
    { name: "Air France", logo: airfranceLogo },
    { name: "Qatar Airways", logo: qatarLogo },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center p-6 bg-card rounded-2xl hover-lift shadow-card border border-border group"
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
    </section>
  );
};

export default Partners;
