"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import   Coffee  from "@/components/sections/coffee";

export function GitHubProfile() {
  const githubUsername = "LeonAntGon";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center space-y-4"
    >
      <Coffee/>
      <p className="text-muted-foreground">
        Puedes encontrar el código fuente de todos mis proyectos en mi repositorio de GitHub
      </p>
      <Button asChild variant="outline" size="lg">
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2"
        >
          <Github className="h-5 w-5" />
          <span>Ver Repositorio</span>
        </a>
      </Button>
    </motion.div>
  );
}