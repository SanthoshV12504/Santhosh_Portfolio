import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Jeppiaar Institute of Technology',
    period: '2021 – 2025',
    grade: 'CGPA: 8.0',
    current: true,
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Dr.G.S. Kalyanasundaram Matriculation Hr. Sec. School',
    period: 'Completed',
    grade: '88.6%',
    current: false,
  },
  {
    degree: 'Secondary School Leaving Certificate (SSLC)',
    institution: 'Dr.G.S. Kalyanasundaram Matriculation Hr. Sec. School',
    period: 'Completed',
    grade: '87%',
    current: false,
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>

        <div className="max-w-2xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-md ${
                edu.current ? 'border-accent/50' : ''
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-accent" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{edu.degree}</h3>
                        <p className="text-muted-foreground">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full">
                          {edu.grade}
                        </span>
                        {edu.current && (
                          <p className="text-xs text-muted-foreground mt-1">{edu.period}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
