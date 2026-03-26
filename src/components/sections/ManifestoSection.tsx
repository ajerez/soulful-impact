import { motion } from "framer-motion";

const lines = [
  "Vale. No tengo una máquina del tiempo.",
  "Pero llevo casi veinte años viendo cómo se repiten los mismos errores.",
  "Si todo es espectacular, nada sorprende. Si todo es monetizable, poco vale. Si todo se parece, nadie recuerda.",
  "Y no pienso diseñar ese futuro.",
];

const ManifestoSection = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-16 md:gap-24 text-background" style={{ backgroundColor: "hsl(var(--heading))" }}>
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: i * 0.15 }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-center max-w-4xl leading-relaxed"
        >
          {text}
        </motion.p>
      ))}
    </section>
  );
};

export default ManifestoSection;
