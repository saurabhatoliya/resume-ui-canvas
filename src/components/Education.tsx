
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      school: "Jaipur Engineering College and Research Center",
      degree: "Bachelor of Technology in Artificial Intelligence and Data science Engineering",
      duration: "Expected May 2026",
      location: "Jaipur, Rajasthan",
      details: "CGPA: 8.10 / 10.00"
    },
    {
      school: "LBS Public School",
      degree: "Higher Secondary Education",
      duration: "May 2022",
      location: "Jaipur, Rajasthan",
      details: "Percentage: 72.8"
    },
    {
      school: "Swami Vivekanand Govt Model School",
      degree: "Secondary Education",
      duration: "May 2020",
      location: "Harsana, Alwar, Rajasthan",
      details: "Percentage: 74.4"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <Card key={index} className="glass-card fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {edu.school}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary font-medium mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-1">{edu.duration}</p>
                <p className="text-sm text-muted-foreground mb-2">{edu.location}</p>
                <p className="text-sm font-medium">{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
