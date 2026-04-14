import { motion } from "framer-motion";
import { useState } from "react";
import charlando from "@/assets/charlando.jpg";
import costaAzucar from "@/assets/costa-azucar.png";
import gamificacionBg from "@/assets/gamificacion-bg.png";
import disenoVisual from "@/assets/diseno-visual.png";
import disenoEspacios from "@/assets/diseno-espacios.png";
import disenoEspaciosNew from "@/assets/diseno-espacios-new.png";

const services = [
  {
    title: "Consultoría de Impacto",
    desc: "Tu proyecto tiene una grieta. Yo la encuentro y la convierto en el motor del concepto.",
    bg: charlando,
    bgPos: "center",
    alt: "Sesión de consultoría creativa sobre diseño de experiencias inmersivas",
  },
  {
    title: "Dirección Creativa de Eventos",
    desc: "No organizo citas. Diseño clímax narrativos.",
    bg: costaAzucar,
    bgPos: "top",
    alt: "Evento inmersivo con dirección creativa de Juan A. Gil del Pozo",
  },
  {
    title: "Diseño Visual",
    desc: "La estética no es un adorno. Es el lenguaje del subconsciente.",
    bg: disenoVisual,
    bgPos: "bottom",
    alt: "Diseño visual conceptual para experiencia inmersiva",
  },
  {
    title: "Gamificación",
    desc: "Transforma una actividad en una experiencia original y atractiva.",
    bg: gamificacionBg,
    bgPos: "center",
    alt: "Diseño de gamificación para experiencias interactivas",
  },
  {
    title: "Diseño de Espacios",
    desc: "Lugares que no se visitan. Se habitan.",
    bg: disenoEspaciosNew,
    bgPos: "center",
    alt: "Diseño de espacios inmersivos y arquitectura experiencial",
  },
  {
    title: "Escenografía y Decorados",
    desc: "Viaja a nuevos universos orgánicos y detallados.",
    bg: disenoEspacios,
    bgPos: "center",
    alt: "Escenografía detallada y decorados para producciones inmersivas",
  },
];

const ServiceCard = ({ title, desc, bg, bgPos, alt }: { title: string; desc: string; bg: string; bgPos: string; alt: string }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative h-64 md:h-80 overflow-hidden cursor-pointer group"
    >
      <div className="service-hover-corruption absolute inset-0">
        <img
          src={bg}
          alt={alt}
          className="w-full h-full object-cover contrast-110 transition-transform duration-700 group-hover:scale-105"
          style={{ objectPosition: bgPos }}
        />
      </div>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-heading mb-2" style={{ fontSize: "2.8rem" }}>
          {title}
        </h3>
        <p className="leading-relaxed" style={{ fontSize: "1.2rem", color: "hsl(var(--heading))" }}>
          {desc}
        </p>
      </div>
    </motion.article>
  );
};

const ServicesGrid = () => {
  return (
    <section id="servicios" className="min-h-[150dvh] px-6 md:px-12 lg:px-24 py-24 flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
