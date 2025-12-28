import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Intern Experience
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="relative overflow-hidden border-l-4 border-l-accent">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="hidden md:flex h-12 w-12 rounded-full bg-accent/10 items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">RPA Developer Intern</h3>
                      <p className="text-accent font-medium">Worldline</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4" />
                      <span>Aug 2023 – Dec 2023</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Learned advanced techniques for automating interactions with databases, including tasks like advanced data retrieval and 
complex updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Covered more advanced techniques for automating tasks on the web, including handling dynamic web elements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>Gained hands-on experience in RPA best practices and workflow design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
