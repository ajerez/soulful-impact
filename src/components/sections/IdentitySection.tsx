import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import fotoJuan1 from "@/assets/foto-juan-dirigiendo.jpg";
import fotoJuan2 from "@/assets/foto-juan-retrato.png";
import fotoJuan3 from "@/assets/foto-juan-premio.png";

const staggerBlocks = [
  "Diseño espacios que cambian comportamientos.",
  "Vengo del cine. He construido mundos físicos. He dirigido equipos. He sobrevivido a presupuestos. Y sí, también sé usar Excel.",
  "No trabajo en decoración. Trabajo en intención. Impacto con alma.",
];

const images = [
  { src: fotoJuan1, alt: "Juan A. Gil del Pozo dirigiendo en un set de producción" },
  { src: fotoJuan3, alt: "Juan A. Gil del Pozo recibiendo un premio de diseño creativo" },
  { src: fotoJuan2, alt: "Retrato profesional de Juan A. Gil del Pozo, director creativo" },
];

const IdentitySection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="identidad" className="min-h-[110dvh] flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 py-24 gap-12 md:gap-16">
      {/* Left - Text */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl tracking-tighter"
        >
          JUAN A. GIL DEL POZO
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="leading-relaxed" style={{ fontSize: "1.5rem", color: "#C49A45" }}
        >
          Director creativo especializado en experiencias inmersivas residente en Torre del Mar (Málaga)
        </motion.h2>

        {staggerBlocks.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.2 }}
            className="leading-relaxed" style={{ fontSize: "1.5rem" }}
          >
            {text}
          </motion.p>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center max-w-3xl leading-relaxed pt-8"
          style={{ fontSize: "1.5rem", color: "#C2B280" }}
        >
          Sigues aquí. Buena señal. Probablemente no te conformas con lo estándar.
        </motion.p>
      </div>

      {/* Right - Image carousel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 w-full max-w-lg md:max-w-none self-start md:self-center relative"
      >
        <div className="relative w-full h-[50vh] md:h-[80vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0"
            >
              <img
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="w-full h-full object-cover object-top contrast-125 rounded-sm"
                style={{ filter: "grayscale(75%)" }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default IdentitySection;
