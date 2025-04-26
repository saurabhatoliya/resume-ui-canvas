
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Ola Booking Analysis",
      description: "Comprehensive analysis of Ola ride data using SQL, Excel, and Power BI",
      details: [
        "Performed data cleansing and transformation in Excel to ensure data integrity.",
        "Utilized SQL for advanced querying and exploratory data analysis (EDA) to derive key ride metrics.",
        "Developed an interactive Power BI dashboard for trend analysis, revenue segmentation, and customer behavior insights.",
        "Conducted KPI tracking on ride volume, cancellation patterns, payment distribution, and rating comparisons"
      ],
      technologies: ["SQL", "Excel", "Power BI", "Data Analysis"],
      githubLink: "#"
    },
    {
      title: "Movie Recommendation System",
      description: "A Movie Recommendation System that suggests movies based on user preferences",
      details: [
        "Built a recommendation system similar to Netflix and Amazon Prime",
        "Implemented data collection, preprocessing, and exploratory analysis",
        "Developed machine learning models for personalized recommendations",
        "Created insights to guide content acquisition decisions"
      ],
      technologies: ["HTML", "CSS", "Javascript", "Jupyter Notebook", "Machine Learning"],
      githubLink: "#"
    },
    {
      title: "Disease Outbreak Prediction System",
      description: "Data-driven system to predict potential disease outbreaks",
      details: [
        "Designed a system to analyze health, environmental, and demographic factors",
        "Implemented data collection, preprocessing, and visualization",
        "Created early detection system for potential outbreaks",
        "Enhanced resource allocation and containment strategies"
      ],
      technologies: ["HTML", "CSS", "Javascript", "Jupyter Notebook", "Machine Learning"],
      githubLink: "#"
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
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-sm">{detail}</li>
                  ))}
                </ul>
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
