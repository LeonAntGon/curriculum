"use client";

import { Card, CardContent } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { SKILLS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <AnimatedSection id="skills" className="py-20 bg-muted/40">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-sm py-1.5">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}