"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { AnimatedSection } from "@/components/AnimatedSection";
import { EDUCATION, CERTIFICATIONS } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Educación y Certificaciones</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Educación</h3>
          {EDUCATION.map((edu, index) => (
            <Card key={index} className="mb-4">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div>
                    <h4 className="text-lg font-medium">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.level}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="font-medium">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.year}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Certificaciones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <Card key={index} className="overflow-hidden flex flex-col">
                <div className="relative h-48">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h4 className="text-lg font-medium mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">{cert.date}</p>
                  <p className="text-sm mb-4 flex-grow">{cert.description}</p>
                  {cert.link && (
                    <Button asChild variant="outline" className="w-full mt-auto">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Ver Certificado <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}