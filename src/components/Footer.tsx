const Footer = () => {
  return (
    <footer className="py-8 px-8 flex items-center justify-between">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        Juan A. Gil del Pozo. © {new Date().getFullYear()}. Málaga. Todos los derechos reservados.
      </p>
      <a
        href="https://es.linkedin.com/in/juan-alfonso-gil-del-pozo-604239204"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
      >
        LINKEDIN
      </a>
    </footer>
  );
};

export default Footer;
