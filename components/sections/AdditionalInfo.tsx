"use client";

import { AnimatedSection } from "@/components/AnimatedSection";
import { ADDITIONAL_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function AdditionalInfo() {
  return (
    <AnimatedSection className="py-20 container mx-auto">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Information adicional</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADDITIONAL_INFO.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex items-start space-x-3"
            >
              <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <p>{info}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}