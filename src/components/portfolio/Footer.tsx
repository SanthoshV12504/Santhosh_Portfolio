const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow text-center">
        <p className="text-muted-foreground text-sm">
          © {currentYear} Santhosh Velmurugan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
