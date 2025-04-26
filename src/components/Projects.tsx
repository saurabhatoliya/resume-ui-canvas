
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Image Generation App",
      description: "A web application that uses machine learning to generate unique images based on text descriptions.",
      technologies: ["React", "Python", "TensorFlow", "Flask"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filtering and analysis capabilities.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based system for controlling home devices using voice commands and machine learning.",
      technologies: ["Python", "Raspberry Pi", "TensorFlow", "MQTT"],
      githubLink: "#",
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
