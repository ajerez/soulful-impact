import { motion } from "framer-motion";
import logoFirma from "@/assets/Logo_firma_Juan.svg";

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
              : "text-lg md:text-2xl font-light"
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
        className="mt-8 flex flex-col items-center gap-[70px]"
      >
        <button onClick={onContact} className="btn-magnetic font-heading px-10 md:px-16 uppercase tracking-widest" style={{ fontSize: "2rem", paddingTop: "1rem", paddingBottom: "1rem" }}>
          <span>HABLEMOS</span>
        </button>
        <img src={logoFirma} alt="Logo firma" className="h-[80px] w-auto invert opacity-70" />
      </motion.div>

    </section>
  );
};

export default FinalManifesto;
