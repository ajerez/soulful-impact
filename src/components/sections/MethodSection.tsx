import { motion } from "framer-motion";

const lines = [
  { text: "Impacto con estructura.", size: "font-heading text-3xl md:text-5xl lg:text-6xl" },
  { text: "Concepto antes que estética. Narrativa antes que decoración.", size: "text-xl md:text-3xl lg:text-4xl" },
  { text: "Ejecución impecable.", size: "font-heading text-3xl md:text-5xl lg:text-6xl" },
  { text: "No es perfeccionismo. Es respeto por el resultado.", size: "text-xl md:text-3xl lg:text-4xl" },
];

const MethodSection = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-10 md:gap-14">
      {lines.map((line, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className={`${line.size} text-center max-w-4xl leading-relaxed`}
        >
          {line.text}
        </motion.p>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-xl md:text-3xl lg:text-4xl text-center max-w-4xl leading-relaxed mt-8"
      >
        Y evitar que una gran idea acabe pareciendo una feria temática de aeropuerto.
      </motion.p>
    </section>
  );
};

export default MethodSection;
