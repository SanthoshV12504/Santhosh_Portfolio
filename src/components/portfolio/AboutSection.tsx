import { Badge } from '@/components/ui/badge';

const technicalSkills = ['Python', 'SQL', 'Java', 'Frontend', 'RPA (UiPath)'];
const softSkills = ['Communication', 'Teamwork', 'Problem-Solving'];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Summary */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a dedicated B.Tech Information Technology student 
              with a strong foundation in programming and software development. A first graduate with a quick 
              learning mindset, team spirit, and a commitment to delivering quality results on time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am passionate about creating efficient solutions and continuously learning new technologies 
              to stay at the forefront of the ever-evolving tech landscape.
            </p>
          </div>

          {/* Skills */}
          <div>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-foreground mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium bg-background border border-border hover:bg-muted transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
