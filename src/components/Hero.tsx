
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="order-2 md:order-1">
            <img
              src="/lovable-uploads/8fbedf28-f79b-4167-aae4-8166385954fa.png"
              alt="Saurabh Kumar Atoliya with robots"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto object-cover aspect-square"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 md:order-2 text-left">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
              Saurabh Kumar Atoliya
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              AI & Data Science Engineer
            </p>
            <div className="text-lg text-muted-foreground mb-8">
              Hello, my name is Saurabh Kumar Atoliya. I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at JECRC Foundation. I have a deep passion for technology and data, and I am enthusiastic about applying my knowledge and skills to solve complex, real-world problems. With a strong foundation in AI and data science, I am eager to contribute to innovative projects and continue learning in this dynamic field.
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+91-9782326450" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91-9782326450
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:saurabhatoliya637@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  saurabhatoliya637@gmail.com
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/saurabh-atoliya-841213254/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/saurabhatoliya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:saurabhatoliya637@gmail.com">Contact Me</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
