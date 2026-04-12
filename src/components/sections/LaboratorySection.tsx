import { motion } from "framer-motion";
import GlitchImage from "../GlitchImage";
import lab01 from "@/assets/lab-01.jpg";
import lab02 from "@/assets/lab-02.jpg";
import lab03 from "@/assets/lab-03.jpg";
import lab04 from "@/assets/lab-04-new.jpg";
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
  { src: lab01, caption: "Experimento 01: Construir tensión sin palabras", alt: "Escenografía inmersiva diseñada para construir tensión narrativa sin diálogos" },
  { src: lab02, caption: "Experimento 02: Disolver la frontera entre espectador y escena", alt: "Experiencia inmersiva donde el espectador se integra en la escena" },
  { src: lab03, caption: "Experimento 03: Narrativa a través de la oscuridad", alt: "Diseño de espacio oscuro con narrativa sensorial envolvente" },
  { src: lab04, caption: "Experimento 04: Provocando la pérdida de la noción del tiempo", alt: "Entorno inmersivo diseñado para alterar la percepción temporal" },
  { src: lab06, caption: "Experimento 05: Inmersión sensorial completa", alt: "Instalación de inmersión sensorial completa con iluminación dramática" },
  { src: lab05, caption: "Experimento 06: El espacio como personaje", alt: "Escenografía donde el espacio arquitectónico actúa como personaje narrativo" },
];

const LaboratorySection = ({ onContact }: { onContact?: () => void }) => {
  return (
    <section id="laboratorio" className="min-h-[130dvh] px-6 md:px-12 lg:px-24 pt-24 pb-[30rem]">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {experiments.map((exp, i) => (
          <motion.article
            key={i}
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <div className="service-hover-corruption relative overflow-hidden w-full h-64 md:h-80">
              <img src={exp.src} alt={exp.alt} className="w-full h-full object-cover" />
            </div>
            <p className="font-mono text-xs text-muted-foreground mt-3 tracking-wide">
              {exp.caption}
            </p>
          </motion.article>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-center max-w-3xl mx-auto leading-relaxed mt-16"
        style={{ fontSize: "1.5rem", color: "#C2B280" }}
      >
        Hay quien mira la escena. Tú has entrado en ella.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center mt-10"
      >
        <button onClick={onContact} className="btn-magnetic font-heading px-10 md:px-16 uppercase tracking-widest" style={{ fontSize: "2rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
          <span>QUE NO SEA MEDIOCRE</span>
        </button>
      </motion.div>
    </section>
  );
};

export default LaboratorySection;
