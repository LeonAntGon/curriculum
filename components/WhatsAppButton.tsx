"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WhatsAppButton() {
  const whatsappNumber = "+1234567890"; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        asChild
        size="lg"
        className="rounded-full bg-green-500 hover:bg-green-600 whatsapp-button shadow-lg"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden md:inline">Contactame por aquí!</span>
        </a>
      </Button>
    </motion.div>
  );
}