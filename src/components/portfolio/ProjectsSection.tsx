import { ExternalLink, Bot, Newspaper } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'TechBriefs',
    description: 'A daily tech news digest web application that aggregates trending technology news and generates downloadable PDF summaries for easy reading.',
    icon: Newspaper,
    tags: ['Web App', 'News Aggregation', 'PDF Generation'],
    liveUrl: 'https://tech-briefs.onrender.com/',
  },
  {
    title: 'Chat Bot',
    description: 'Created a chatbot in Microsoft Power Virtual Agent integrating with ChatGPT to answer user queries in Microsoft Teams.',
    icon: Bot,
    tags: ['RPA', 'VB', 'Automation'],
    liveUrl: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <project.icon className="h-6 w-6 text-accent" />
                  </div>
                  {project.liveUrl && (
                    <Button 
                      variant="ghost" 
                      size="icon"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <CardTitle className="text-xl mt-4">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                {project.liveUrl && (
                  <Button variant="outline" size="sm" className="mt-4 w-full gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      View Live Demo
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
