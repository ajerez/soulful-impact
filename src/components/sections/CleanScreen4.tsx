import { motion } from "framer-motion";

const CleanScreen4 = () => {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center bg-black px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-heading text-3xl md:text-5xl lg:text-7xl text-center max-w-5xl leading-tight"
      >
        La gente no desea más despliegues de efectos.<br />Quiere significado.
      </motion.p>
    </section>
  );
};

export default CleanScreen4;
