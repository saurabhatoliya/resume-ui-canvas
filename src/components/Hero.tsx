
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
          Saurabh Kumar Atoliya
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
          AI & Data Science Engineer
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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
            <a href="https://linkedin.com/in/saurabhatoliya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="mailto:saurabhatoliya637@gmail.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
