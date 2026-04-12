const Footer = () => {
  return (
    <footer className="py-8 px-8 flex flex-col md:flex-row items-center justify-between gap-2">
      <p className="text-muted-foreground uppercase tracking-widest" style={{ fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Juan A. Gil Del Pozo · Málaga · Todos los derechos reservados.
      </p>
      <a
        href="https://es.linkedin.com/in/juan-alfonso-gil-del-pozo-604239204"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors" style={{ fontSize: '0.75rem' }}
      >
        LINKEDIN
      </a>
    </footer>
  );
};

export default Footer;
