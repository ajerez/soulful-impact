import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { title: "Consultoría de Impacto", desc: "Tu proyecto tiene una grieta. Yo la encuentro y la convierto en el motor del concepto.", bg: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80" },
  { title: "Dirección Creativa de Eventos", desc: "No organizo citas. Diseño clímax narrativos.", bg: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { title: "Diseño Visual", desc: "La estética no es un adorno. Es el lenguaje del subconsciente.", bg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80" },
  { title: "Narrativa", desc: "Si el espacio no cuenta una historia, solo es un pasillo.", bg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80" },
  { title: "Diseño de Espacios", desc: "Locales que no se visitan. Se habitan.", bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

const ServiceCard = ({ title, desc, bg }: { title: string; desc: string; bg: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative h-64 md:h-80 overflow-hidden cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center contrast-125 transition-transform duration-700"
        style={{
          backgroundImage: `url(${bg})`,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          filter: "grayscale(75%)",
        }}
      />
      {hovered && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{
              backgroundImage: `url(${bg})`,
              mixBlendMode: "multiply",
              filter: "hue-rotate(90deg) saturate(3)",
              animation: "glitch-1 0.3s infinite linear",
            }}
          />
        </>
      )}
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-heading mb-2" style={{ fontSize: "2.8rem" }}>{title}</h3>
        <p className="leading-relaxed" style={{ fontSize: "1.2rem", color: "hsl(var(--heading))" }}>{desc}</p>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  return (
    <section className="min-h-[150dvh] px-6 md:px-12 lg:px-24 py-24 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
