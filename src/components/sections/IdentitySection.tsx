import { motion } from "framer-motion";
import GlitchImage from "../GlitchImage";
import fotoJuan from "@/assets/foto-juan-dirigiendo.jpg";

const staggerBlocks = [
  "Diseño espacios que cambian comportamientos.",
  "Vengo del cine. He construido mundos físicos. He dirigido equipos. He sobrevivido a presupuestos. Y sí, también sé usar Excel.",
  "No trabajo en decoración. Trabajo en intención. Impacto con alma.",
];

const IdentitySection = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-24 py-24 gap-12 md:gap-16">
      {/* Left - Text */}
      <div className="flex-1 flex flex-col justify-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl tracking-tighter"
        >
          JUAN A. GIL
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-muted-foreground leading-relaxed" style={{ fontSize: "1.5rem" }}
        >
          Director creativo especializado en experiencias inmersivas
        </motion.p>

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
          className="text-xl md:text-3xl lg:text-4xl text-center max-w-3xl leading-relaxed pt-8"
        >
          Si sigues aquí, probablemente no buscas algo estándar.
        </motion.p>
      </div>

      {/* Right - Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="flex-1 w-full max-w-lg md:max-w-none self-start md:self-center"
      >
        <GlitchImage
          src={fotoJuan}
          alt="Creative director backstage"
          className="w-full h-[50vh] md:h-[80vh] rounded-sm"
        />
      </motion.div>
    </section>
  );
};

export default IdentitySection;
