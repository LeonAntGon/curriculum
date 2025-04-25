"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/constants";

export function Header() {
  const scrollToNextSection = () => {
    const educationSection = document.getElementById("education");
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center py-20 px-4 bg-[radial-gradient(125%_125%_at_50%_10%,#fff_40%,#2463eb_100%)]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
        >
          {PERSONAL_INFO.name}
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-3"
        >
          {PERSONAL_INFO.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground mb-8"
        >
          {PERSONAL_INFO.subtitle}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button onClick={scrollToNextSection} size="lg" className="group">
            Explora mi perfil
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-0 right-0 flex justify-center"
      >
        <ArrowDown
          className="animate-bounce h-6 w-6 text-muted-foreground"
          onClick={scrollToNextSection}
        />
      </motion.div>
    </section>
  );
}