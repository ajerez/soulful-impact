import { motion } from "framer-motion";

const CleanScreen6 = () => {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="font-heading text-4xl md:text-7xl lg:text-9xl text-center tracking-tighter"
      >
        Si no impacta, sobra.
      </motion.h2>
    </section>
  );
};

export default CleanScreen6;
