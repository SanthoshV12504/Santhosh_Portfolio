import { ArrowDown, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="container-narrow relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="order-2 md:order-1 animate-fade-in">
            <p className="text-accent font-medium mb-4 tracking-wide uppercase text-sm">
              Hello, I'm
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Santhosh Velmurugan
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-light">
              Aspiring Software Developer
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Passionate B.Tech Information Technology student with hands-on experience in RPA development,
              Python, and web technologies. Eager to contribute to innovative software solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button onClick={scrollToContact} className="gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>

              <Button variant="outline" onClick={scrollToProjects} className="gap-2">
                <ExternalLink className="h-4 w-4" />
                View Projects
              </Button>
            </div>
          </div>

          {/* Profile Photo */}
          <div
            className="order-1 md:order-2 flex justify-center animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-border shadow-lg bg-gradient-to-br from-muted to-secondary">
              <img
                src="/profile.jpg"
                alt="Santhosh Velmurugan"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
          <span className="text-xs tracking-wider uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

