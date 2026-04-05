const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        Juan A. Gil del Pozo. © {new Date().getFullYear()}. Málaga. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
