import { motion } from "framer-motion";

const lines = [
  "No soy para todo el mundo.",
  "Si buscas algo rápido, barato y con muchos neones, hay opciones maravillosas ahí fuera.",
  "Si quieres copiar algo que ya funciona, tampoco soy tu persona.",
  "Si quieres hacerlo de verdad, entonces hablamos.",
  "Impacto con alma.",
];

const FinalFilter = () => {
  return (
    <section className="min-h-[110dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-10 md:gap-14">
      {lines.map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: i * 0.15 }}
          className={`text-center max-w-3xl leading-relaxed ${
            i === lines.length - 1
              ? "font-heading text-3xl md:text-5xl"
              : "text-xl md:text-3xl lg:text-4xl font-light"
          }`}
        >
          {text}
        </motion.p>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.2 }}
        className="text-center max-w-4xl leading-relaxed mt-4"
        style={{ fontSize: "1.5rem", color: "#C2B280" }}
      >
        Si has llegado hasta aquí, ya somos dos que pensamos parecido.
      </motion.p>
    </section>
  );
};

export default FinalFilter;
