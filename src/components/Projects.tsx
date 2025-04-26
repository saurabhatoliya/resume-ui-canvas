
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gym Management System",
      description: "Full-stack application for gym management with features for member tracking, payment processing, and workout planning.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      githubLink: "https://github.com/saurabhatoliya/gym-management-system",
      liveLink: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Built a scalable e-commerce platform with product management, cart functionality, and secure payment integration.",
      technologies: ["Next.js", "MongoDB", "Stripe", "AWS"],
      githubLink: "https://github.com/saurabhatoliya/ecommerce-platform",
      liveLink: "#"
    },
    {
      title: "AI-based Task Management",
      description: "Developed an AI-powered task management system with smart prioritization and scheduling features.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      githubLink: "https://github.com/saurabhatoliya/ai-task-manager",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">{tech}</Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
