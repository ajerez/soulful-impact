import { motion } from "framer-motion";
import GlitchImage from "../GlitchImage";
import lab01 from "@/assets/lab-01.jpg";
import lab02 from "@/assets/lab-02.jpg";
import lab03 from "@/assets/lab-03.jpg";
import lab04 from "@/assets/lab-04.jpg";
import lab05 from "@/assets/lab-05.jpg";
import lab06 from "@/assets/lab-06.png";

const copyLines = [
  "Antes del futuro, hubo experimentos.",
  "Escape rooms. Narrativas físicas. Entornos inmersivos.",
  "No eran juegos. Eran pruebas de coherencia.",
  "Con alma → la gente cambia.\nCon clichés → la gente hace fotos y luego pregunta dónde está la salida.",
  "Yo diseño para lo primero.",
];

const experiments = [
  { src: lab01, caption: "Experimento 01: Construir tensión sin palabras" },
  { src: lab02, caption: "Experimento 02: Disolver la frontera entre espectador y escena" },
  { src: lab03, caption: "Experimento 03: Narrativa a través de la oscuridad" },
  { src: lab04, caption: "Experimento 04: Provocando la pérdida de la noción del tiempo" },
  { src: lab06, caption: "Experimento 05: Inmersión sensorial completa" },
  { src: lab05, caption: "Experimento 06: El espacio como personaje" },
];

const LaboratorySection = () => {
  return (
    <section className="min-h-[130dvh] px-6 md:px-12 lg:px-24 py-24">
      {/* Copy */}
      <div className="max-w-3xl mx-auto mb-20 space-y-6">
        {copyLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.15 }}
            className="text-lg md:text-2xl leading-relaxed whitespace-pre-line"
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {experiments.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <GlitchImage src={exp.src} alt={exp.caption} className="w-full h-64 md:h-80" />
            <p className="font-mono text-xs text-muted-foreground mt-3 tracking-wide">
              {exp.caption}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex justify-center mt-20"
      >
        <button className="font-heading px-10 md:px-16 py-5 md:py-6 border-2 border-foreground text-foreground uppercase hover:bg-foreground hover:text-background transition-all duration-500" style={{ fontSize: "2rem" }}>
          HABLEMOS
        </button>
      </motion.div>
    </section>
  );
};

export default LaboratorySection;
