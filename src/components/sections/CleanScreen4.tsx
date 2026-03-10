import { motion } from "framer-motion";

const CleanScreen4 = () => {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-black px-6">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-heading text-3xl md:text-5xl lg:text-7xl text-center max-w-5xl leading-tight"
      >
        El público no quiere más estímulos.<br />Quiere significado.
      </motion.h2>
    </section>
  );
};

export default CleanScreen4;
