const Footer = () => {
  return (
    <footer className="pb-8 text-muted-foreground">
      <div className="page">
        <div className="flex flex-col justify-between gap-2 border-t border-primary/30 pt-6 font-mono text-xs md:flex-row">
          <p>© {new Date().getFullYear()} Umesh Torawane</p>
          <p>Linted, type-checked and deployed to GitHub Pages with GitHub Actions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
