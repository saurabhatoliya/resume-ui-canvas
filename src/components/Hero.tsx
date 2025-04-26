
import React from 'react';
import { Button } from "@/components/ui/button";

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
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          Passionate about building intelligent systems and solving complex problems through data science and machine learning.
        </p>
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
