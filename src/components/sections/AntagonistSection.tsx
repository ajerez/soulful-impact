import { motion } from "framer-motion";

const blocks = [
  "El problema no es la falta de creatividad. Es la falta de alma.",
  "Todo es inmersivo. Todo está optimizado. Nada arriesga. Nada sorprende. Nada permanece.",
  "El público no quiere más estímulos. Quiere algo que importe.",
];

const AntagonistSection = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-16 md:gap-24">
      {blocks.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: i * 0.15 }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-center max-w-3xl leading-relaxed"
        >
          {text}
        </motion.p>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-xs md:text-sm text-muted-foreground tracking-[0.3em] uppercase"
      >
        Impacto. No ruido.
      </motion.p>
    </section>
  );
};

export default AntagonistSection;
