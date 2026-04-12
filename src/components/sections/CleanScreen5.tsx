import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CleanScreen5 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fillOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={ref} className="min-h-[100dvh] flex flex-col items-center justify-center px-6 gap-6 md:gap-8">
      <p
        className="font-heading text-4xl md:text-7xl lg:text-9xl text-center tracking-tighter outline-text"
      >
        LAS <span className="neon-flicker-ideas">IDEAS</span> SON FÁCILES
      </p>
      <motion.p
        style={{ opacity: fillOpacity }}
        className="font-heading text-4xl md:text-7xl lg:text-9xl text-center tracking-tighter"
      >
        EJECUTARLAS BIEN ES DISEÑO
      </motion.p>
    </section>
  );
};

export default CleanScreen5;
