"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-20 bg-muted/40">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Medios de contacto</h2>
        
        <div className="max-w-md mx-auto">
          <Card>
            
            <CardContent className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <PhoneIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Teléfono</h3>
                  <a
                    href="tel:+543813380751"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    +54 381 338-0751
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <MailIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <a
                    href="mailto:leonarddevweb@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    leonarddevweb@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full">
                  <LinkedinIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">LinkedIn</h3>
                  <a
                    href={PERSONAL_INFO.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Ver Perfil
                  </a>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}