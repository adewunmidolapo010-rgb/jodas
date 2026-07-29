import ServiceCard from "./ServiceCard";

function Services() {

  const services = [
    {
      title: "Laptop Repair",
      description: "Fast and reliable laptop repairs.",
      icon: "💻"
    },
    {
      title: "Desktop Repair",
      description: "Professional desktop troubleshooting.",
      icon: "🖥️"
    },
    {
      title: "Computer Sales",
      description: "Quality laptops and desktops at affordable prices.",
      icon: "🛒"
    },
    {
      title: "Networking",
      description: "Home and office network installation.",
      icon: "🌐"
    }
  ];

  return (
    <section id="services">

      <h2>Our Services</h2>

      <div className="services-grid">

        {services.map((service, index) => (

          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />

        ))}

      </div>

    </section>
  );
}

export default Services;