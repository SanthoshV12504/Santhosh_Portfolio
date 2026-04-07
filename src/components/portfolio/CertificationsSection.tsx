import { Award, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const certifications = [
  {
    title: 'Python Programming',
    issuer: 'GUVI',
    description:
      'Comprehensive Python programming certification covering fundamentals to advanced concepts.',
    link: 'https://www.guvi.in/share-certificate/71B5vDn281U37g6t47',
  },
  {
    title: 'Data Analytics & Visualization',
    issuer: 'Forage',
    description:
      'Virtual experience program focusing on data analytics and visualization techniques.',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_a7qqfmGW34QCcogAA_1722059021683_completion_certificate.pdf',
  },
  {
    title: 'RPA Foundation',
    issuer: 'UiPath',
    description:
      'Foundation course in Robotic Process Automation using UiPath platform.',
    link: 'https://drive.google.com/file/d/1DRTg7Ps31ZmtTRkq-tLyleAJp9w36-tb/view?pli=1',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Award className="h-7 w-7 text-accent" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {cert.title}
                </h3>

                <p className="text-accent text-sm font-medium mb-3">
                  {cert.issuer}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Certificate Link */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  View Certificate
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;

