"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, Github, Linkedin, Mail, Phone, Zap } from "lucide-react";
import { useScrollToSection } from "../../hooks/useScroll";

export default function HeroSection() {
  const scrollToSection = useScrollToSection();

  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="relative container mx-auto px-4 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Disponível para novos projetos
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Fernanda Oliveira
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Assistente Cloud & AWS Cloud Practitioner. Transformando
              infraestrutura em possibilidades na nuvem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 bg-transparent"
                >
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
          </div>

          <div className="flex justify-center gap-6">
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/fernanda-f-oliveira-awsservices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://github.com/ferfaoliver-ferreira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Github className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
