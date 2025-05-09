
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Phone, UserRound } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Saurabh Kumar Atoliya</h1>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <a href="#education">Education</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#experience">Experience</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#skills">Skills</a>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/saurabhatoliya" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/saurabh-atoliya-841213254/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:saurabhatoliya637@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="p-0">
                  <Avatar className="w-10 h-10 border-2 border-primary/50 cursor-pointer hover:border-primary transition-colors">
                    <AvatarImage 
                      src="/path/to/profile-photo.jpg" 
                      alt="Saurabh Kumar Atoliya" 
                      className="object-cover"
                    />
                    <AvatarFallback>
                      <UserRound className="w-6 h-6 text-muted-foreground" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-4">
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Contact Information</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <span>+91 9928631908</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <span>saurabhatoliya637@gmail.com</span>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

