
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "AI & Data Science Engineer",
      company: "Personal Projects",
      duration: "2023 - Present",
      location: "Jaipur, India",
      description: "Working on personal AI and data science projects to build practical experience and enhance skills.",
      skills: ["Python", "TensorFlow", "PyTorch", "Data Analysis"]
    },
    {
      title: "AI Research Assistant",
      company: "University Research Lab",
      duration: "2022 - 2023",
      location: "Jaipur, India",
      description: "Assisted in AI research projects, implementing machine learning models and analyzing results.",
      skills: ["Machine Learning", "Research", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="glass-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {exp.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-1">{exp.duration}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                <p className="text-sm mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
