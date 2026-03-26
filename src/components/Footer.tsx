const Footer = () => {
  return (
    <footer className="py-8 text-center">
      <p className="text-xs text-muted-foreground uppercase tracking-widest">
        © {new Date().getFullYear()} Juan A. Gil del Pozo. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
