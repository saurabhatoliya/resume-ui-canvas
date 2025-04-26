
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Next24Tech",
      duration: "05 July 2024 To 05 sep 2024",
      location: "Remote",
      description: [
        "House Price Prediction System: Built predictive models using regression and ensemble methods, applying feature engineering and hyperparameter tuning to enhance performance.",
        "E-commerce Product Recommendation System: construct a hybrid recommendation engine using collaborative filtering and Content-Based Filtering",
        "Social Media Sentiment Analysis: Designed an NLP pipeline with TF-IDF,tokenization,and classification models to analyze the sentiment of social media."
      ],
      skills: ["Machine Learning", "NLP", "Data Analysis", "Python"]
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
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-sm">{desc}</li>
                  ))}
                </ul>
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
