"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { EXPERIENCE } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="py-20 bg-muted/40">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experiencia Laboral</h2>
        
        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card>
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-1/3 h-48">
                    <Image
                      src={exp.image}
                      alt={exp.title}
                      fill
                      className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <CardHeader>
                      <div>
                        <CardTitle>{exp.title}</CardTitle>
                        <p className="text-muted-foreground">{exp.company} | {exp.period}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-1">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}