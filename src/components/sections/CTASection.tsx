"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Estou sempre aberta a novos desafios e oportunidades interessantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  <Mail className="w-5 h-5 mr-2" />
                  Entrar em Contato
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xs sm:max-w-sm aspect-square flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="text-center text-xl">
                    Contatos
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-6 py-6">
                  <a
                    href="mailto:fernandaffoliveira9536@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-base">
                      fernandaffoliveira9536@gmail.com
                    </span>
                  </a>
                  <a
                    href="tel:+5511993215554"
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-base">(11) 99321-5554</span>
                  </a>
                </div>
              </DialogContent>
            </Dialog>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/fernanda-f-oliveira-awsservices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a
                href="https://github.com/ferfaoliver-ferreira"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
