import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CleanScreen1 = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  
  const opacity1 = useTransform(scrollYProgress, [0.15, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.5, 0.6, 0.75, 0.85], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.5, 0.65], [1.02, 1]);

  return (
    <section ref={ref} className="relative min-h-[100dvh] flex items-center justify-center bg-black px-6">
      <div className="max-w-4xl text-center">
        <motion.p
          style={{ opacity: opacity1 }}
          className="font-heading text-3xl md:text-5xl lg:text-7xl absolute inset-0 flex items-center justify-center px-6 mx-auto"
          style={{ maxWidth: "718px" }}
        >
          Si todo es experiencia, nada lo es.
        </motion.p>
        <motion.p
          style={{ opacity: opacity2, scale: scale2 }}
          className="font-heading text-3xl md:text-5xl lg:text-7xl whitespace-pre-line"
        >
          La creatividad no murió.{"\n"}Se volvió eficiente.
        </motion.p>
      </div>
    </section>
  );
};

export default CleanScreen1;
