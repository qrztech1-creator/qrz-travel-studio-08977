import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppFloat = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5527999936682", "_blank");
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Contato via WhatsApp"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full"
      />
    </button>
  );
};

export default WhatsAppFloat;
