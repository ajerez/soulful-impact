import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CleanScreen5 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const fillOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  return (
    <section ref={ref} className="min-h-[100dvh] flex flex-col items-center justify-center px-6 gap-6 md:gap-8">
      <h2
        className="text-4xl md:text-7xl lg:text-9xl font-black text-center tracking-tighter"
        style={{
          WebkitTextStroke: "2px hsl(40 10% 90%)",
          color: "transparent",
        }}
      >
        LAS IDEAS SON FÁCILES
      </h2>
      <motion.h2
        style={{ opacity: fillOpacity }}
        className="text-4xl md:text-7xl lg:text-9xl font-black text-center tracking-tighter"
      >
        EJECUTARLAS BIEN ES DISEÑO
      </motion.h2>
    </section>
  );
};

export default CleanScreen5;
