import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CleanScreen2 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const tracking = useTransform(scrollYProgress, [0.2, 0.6], [0.5, 0]);

  return (
    <section ref={ref} className="min-h-[100dvh] flex items-center justify-center smoke-bg px-6">
      <motion.h2
        style={{ letterSpacing: useTransform(tracking, (v) => `${v}em`) }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="font-heading text-3xl md:text-5xl lg:text-7xl text-center max-w-5xl leading-tight"
      >
        Diseñar no es decorar.{"\n"}Es decidir qué importa.
      </motion.h2>
    </section>
  );
};

export default CleanScreen2;
