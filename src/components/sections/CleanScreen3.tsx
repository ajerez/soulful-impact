import { motion } from "framer-motion";

const CleanScreen3 = () => {
  return (
    <section className="relative min-h-[120dvh] flex items-center justify-center overflow-hidden">
      {/* Video bg placeholder - using dark gradient as fallback */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[hsl(0,0%,8%)] to-black" />
      <div className="absolute inset-0 bg-black/60" />

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
        className="relative z-10 font-heading text-3xl md:text-5xl lg:text-7xl text-center max-w-5xl px-6 leading-tight"
      >
        Un buen espacio no solo se mira. Se recuerda.
      </motion.h2>
    </section>
  );
};

export default CleanScreen3;
