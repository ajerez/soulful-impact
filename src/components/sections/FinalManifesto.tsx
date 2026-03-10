import { motion } from "framer-motion";

const lines = [
  "Las experiencias no deberían llenar espacio.",
  "Deberían cambiar algo.",
  "El futuro todavía es editable.",
];

const FinalManifesto = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-10 md:gap-14">
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          className={`text-center max-w-4xl leading-relaxed ${
            i === lines.length - 1
              ? "text-2xl md:text-4xl lg:text-5xl font-bold"
              : "text-xl md:text-3xl lg:text-4xl font-light"
          }`}
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8"
      >
        <button className="px-10 md:px-16 py-5 md:py-6 border-2 border-foreground text-foreground text-base md:text-xl tracking-[0.3em] uppercase font-bold hover:bg-foreground hover:text-background transition-all duration-500">
          QUE NO SEA MEDIOCRE
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-xs text-muted-foreground text-center max-w-md mt-12"
      >
        Si has llegado hasta aquí, ya somos dos que pensamos parecido.
      </motion.p>
    </section>
  );
};

export default FinalManifesto;
