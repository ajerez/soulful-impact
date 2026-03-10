import { motion } from "framer-motion";

const questions = [
  "¿Quieres gustar o quieres importar?",
  "¿Quieres algo original o algo 'como en otros sitios'?",
  "¿Estás dispuesto a descartar ideas mediocres?",
  "¿Vas a ejecutar bien o solo presentar bonito?",
  "¿Estás dispuesto a que alguien no lo entienda para que el resto nunca lo olvide?",
];

const QuestionsSection = () => {
  return (
    <section className="min-h-[120dvh] flex flex-col items-center justify-center px-6 md:px-12 py-24 gap-10 md:gap-14">
      {questions.map((q, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="text-xl md:text-3xl lg:text-4xl font-light text-center max-w-4xl"
        >
          {q}
        </motion.p>
      ))}

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-xs text-muted-foreground tracking-[0.2em] mt-8"
      >
        Si alguna te incomoda, vamos bien.
      </motion.p>
    </section>
  );
};

export default QuestionsSection;
