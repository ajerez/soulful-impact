import { motion } from "framer-motion";

const lines = [
  "Las experiencias no deberían llenar espacio.",
  "Deberían cambiar algo.",
  "El futuro todavía es editable.",
];

const FinalManifesto = ({ onContact }: { onContact?: () => void }) => {
  return (
    <section id="hablemos" className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-10 md:gap-14">
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, delay: i * 0.2 }}
          className={`text-center max-w-4xl leading-relaxed ${
            i === lines.length - 1
              ? "font-heading text-3xl md:text-5xl lg:text-6xl"
              : "text-xl md:text-3xl lg:text-4xl font-light"
          }`}
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-8"
      >
        <button onClick={onContact} className="font-heading px-10 md:px-16 py-5 md:py-6 border-2 border-foreground text-foreground uppercase hover:bg-foreground hover:text-background transition-all duration-500" style={{ fontSize: "2rem", borderRadius: "50px" }}>
          HABLEMOS
        </button>
      </motion.div>

    </section>
  );
};

export default FinalManifesto;
