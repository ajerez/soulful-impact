import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = ({ onContact }: { onContact?: () => void }) => {
  return (
    <section aria-label="Hero" className="relative min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale pointer-events-none"
        style={{ backgroundImage: `url(${heroBg})`, opacity: 0.1875 }}
        role="img"
        aria-label="Fondo abstracto de experiencia inmersiva"
      />
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: "20%", background: "linear-gradient(to bottom, transparent, black)" }}
      />
      <div className="max-w-4xl text-center space-y-8">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl lg:text-9xl tracking-tight md:-tracking-wider"
        >
          Vengo del{" "}
          <span className="glitch-futuro">
            futuro
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground leading-relaxed"
        >
          Todo es perfecto. Todo es predecible. Todo es rentable. Todo es impecable.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-heading text-2xl md:text-4xl"
        >
          Y todo es terriblemente aburrido.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.0 }}
          className="text-lg md:text-2xl text-muted-foreground"
        >
          He vuelto antes de que eso pase.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.8 }}
        >
          <button
            onClick={onContact}
            className="mt-8 btn-magnetic font-heading px-10 md:px-16 uppercase tracking-widest" style={{ paddingTop: "1rem", paddingBottom: "1rem", fontSize: "2rem" }}
          >
            <span>HAGAMOS ALGO REAL</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
