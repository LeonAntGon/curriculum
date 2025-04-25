"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PROJECTS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <AnimatedSection id="projects" className="py-20 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Proyectos & Portafolio</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="project-card"
            >
              <Card className="overflow-hidden h-full">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    {project.status && (
                      <Badge variant="outline">{project.status}</Badge>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{project.description}</p>
                </CardHeader>
                <CardContent>
                  {project.features && (
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-muted-foreground mb-2">Tecnologías</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, i) => (
                          <Badge key={i} variant="secondary">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex gap-2">
                  {project.githubLink && (
                    <Button asChild variant="outline" size="sm">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Ver Código
                      </a>
                    </Button>
                  )}
                  {project.demoLink && (
                    <Button asChild size="sm">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver proyecto
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}