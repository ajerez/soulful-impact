import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import contactBg from "@/assets/d67af94e-42d3-4ddb-97e5-c49d2364e05c.jpg";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactModal = ({ open, onClose }: ContactModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await fetch("https://formspree.io/f/xpqokadr", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSubmitted(true);
    } catch {
      // silently fail
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/20 py-3 text-white/90 text-lg md:text-2xl placeholder:text-white/40 placeholder:text-lg placeholder:md:text-2xl focus:border-[#C49A45] focus:outline-none transition-colors duration-300 font-body";

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] grid grid-cols-1 md:grid-cols-2"
          style={{ backgroundColor: "#0f0620" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="fixed top-5 right-6 z-[110] text-white/70 hover:text-white transition-colors duration-300"
            aria-label="Cerrar"
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {/* Left — Image */}
          <div className="hidden md:block h-[100dvh] overflow-hidden">
            <img
              src={contactBg}
              alt="Contacto"
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          {/* Right — Form */}
          <div className="flex items-center justify-center h-[100dvh] overflow-y-auto p-8 md:p-16">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="show"
              className="w-full max-w-md space-y-8"
            >
              <motion.h2
                variants={fadeUp}
                className="font-heading text-4xl md:text-5xl text-white/90 tracking-tight"
              >
                HABLEMOS DE VERDAD
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="font-body text-lg md:text-2xl text-white/50 leading-relaxed"
              >
                Cuéntame qué tienes en mente.
                <br />
                Será un placer escuchar tu propuesta y buscar formas para convertirlo en algo que perdure.
              </motion.p>

              {submitted ? (
                <motion.div variants={fadeUp} className="space-y-4 pt-4">
                  <p className="font-heading text-2xl text-[#C49A45]">MENSAJE ENVIADO</p>
                  <p className="font-body text-white/60 text-lg md:text-2xl">
                    Gracias. Te responderé pronto.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  action="https://formspree.io/f/xpqokadr"
                  method="POST"
                  variants={stagger}
                  initial="hidden"
                  animate="show"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="[TRABAJO] Nueva propuesta desde la web"
                  />

                  <motion.div variants={fadeUp}>
                    <input
                      type="text"
                      name="nombre"
                      placeholder="Nombre"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <input
                      type="tel"
                      name="telefono"
                      placeholder="Teléfono"
                      className={inputClass}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <textarea
                      name="mensaje"
                      placeholder="¿Qué tienes en mente?"
                      required
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  <motion.div variants={fadeUp} className="pt-4">
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-magnetic font-heading px-8 py-4 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ fontSize: "1.5rem", borderRadius: "34px" }}
                    >
                      <span className="flex items-center justify-center gap-3">
                        {sending ? (
                          <>
                            ENVIANDO...
                            <Loader2 size={18} className="animate-spin" />
                          </>
                        ) : (
                          <>
                            LANZAR PROPUESTA
                            <ArrowRight
                              size={18}
                              className="group-hover:translate-x-2 transition-transform duration-300"
                            />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.div>
                </motion.form>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
