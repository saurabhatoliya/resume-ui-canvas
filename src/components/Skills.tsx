
import React from 'react';
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: "C", proficiency: 85 },
        { name: "C++", proficiency: 85 },
        { name: "Python", proficiency: 90 },
        { name: "JavaScript", proficiency: 85 },
        { name: "HTML/CSS", proficiency: 85 }
      ]
    },
    {
      category: "Tech Stacks",
      skills: [
        { name: "Jupyter Notebook", proficiency: 90 },
        { name: "Machine Learning", proficiency: 85 },
        { name: "Data Structures", proficiency: 85 },
        { name: "Algorithms", proficiency: 80 },
        { name: "DBMS", proficiency: 80 }
      ]
    },
    {
      category: "Tools & Frameworks",
      skills: [
        { name: "GitHub", proficiency: 85 },
        { name: "SQL", proficiency: 90 },
        { name: "WordPress", proficiency: 80 },
        { name: "Pandas/Numpy", proficiency: 85 },
        { name: "Tableau/Seaborn", proficiency: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="glass-card p-6 rounded-xl fade-in"
              style={{animationDelay: `${catIndex * 0.1}s`}}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
