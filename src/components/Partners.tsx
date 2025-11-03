const Partners = () => {
  const partners = [
    { name: "Gol", logo: "https://i.postimg.cc/25rKn9x8/357a8c0b-417a-4eab-a540-d8442ee043d9.png", scale: "scale-150" },
    { name: "LATAM", logo: "https://i.postimg.cc/hvkCv2Gw/latam.png", scale: "scale-150" },
    { name: "Azul", logo: "https://i.postimg.cc/rmvbRVnv/f817a25e-8566-4623-a37a-85edb55309c5.png", scale: "scale-150" },
    { name: "Air France", logo: "https://i.postimg.cc/m2R4mjjQ/828c3e37-74cb-46bd-ab8f-c99f39b6f3f3.png", scale: "scale-100" },
    { name: "Qatar Airways", logo: "https://i.postimg.cc/B6173WSv/c97abdc7-512e-453e-9b8f-dc23ed3d448f.png", scale: "scale-150" },
    { name: "Emirates", logo: "https://i.postimg.cc/xdLbVtrr/myr.png", scale: "scale-100" }
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
                className="flex-shrink-0 mx-6 flex items-center justify-center p-4 bg-card rounded-2xl hover-lift shadow-card border border-border group overflow-hidden"
                style={{ width: '200px', height: '100px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${partner.scale}`}
                />
              </div>
            ))}
            {/* Segundo conjunto de logos para loop infinito */}
            {partners.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-6 flex items-center justify-center p-4 bg-card rounded-2xl hover-lift shadow-card border border-border group overflow-hidden"
                style={{ width: '200px', height: '100px' }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-h-24 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${partner.scale}`}
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