import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Experiência Profissional
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha trajetória profissional e contribuições em organizações de
              destaque.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-primary/20"></div>

            {/* Experience Item - Alpha Fisio */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        Fundadora da Clínica Alpha Fisio
                      </CardTitle>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="secondary" className="w-fit">
                        2007 - 2025
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">
                        19 anos
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Sou fundadora da Clínica Alpha Fisio, um projeto que liderei
                    com dedicação por 19 anos, entre 2007 e 2025. Durante quase
                    duas décadas, fui a responsável direta pela visão
                    estratégica e pela gestão integral da organização,
                    garantindo não apenas a excelência no atendimento técnico,
                    mas também a sustentabilidade e o crescimento do negócio.
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Responsabilidades:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Liderança e Gestão: Coordenação de equipes e
                            processos internos para assegurar um padrão elevado
                            de cuidado aos pacientes.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Desenvolvimento Organizacional: Implementação de
                            soluções para otimizar a operação da clínica ao
                            longo de 19 anos de mercado.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Estratégia de Negócio: Planejamento e execução de
                            ações que consolidaram a Alpha Fisio como uma
                            referência em sua área de atuação.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience Item - E-book Infoproduto */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        E-book Cuidados Pós-Operatórios (Infoproduto)
                      </CardTitle>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="secondary" className="w-fit">
                        2025
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">
                        Projeto Pessoal
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Projeto nascido da intersecção estratégica entre minha
                    trajetória de quase uma década na área da Saúde e a
                    transição para o setor de Tecnologia. O objetivo foi validar
                    o uso de Inteligência Artificial na criação de um
                    infoproduto de alta qualidade, transformando conhecimento
                    técnico especializado em um manual prático, acessível e
                    comercializável.
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Diferenciais do Projeto:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Expertise de Domínio: Aplicação de anos de
                            experiência clínica em reabilitação para garantir a
                            precisão técnica das orientações pós-cirúrgicas.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Engenharia de Prompt e IA: Utilização de ferramentas
                            de IA para estruturar, organizar e otimizar o
                            conteúdo, reduzindo o tempo de produção sem perder a
                            autoridade científica.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Visão de Produto: Desenvolvimento focado na jornada
                            do usuário (paciente), transformando orientações
                            complexas em um guia passo a passo.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Transição de Carreira: Demonstração real de como a
                            tecnologia pode potencializar setores tradicionais,
                            criando soluções eficientes para o mercado digital.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">IA Generativa</Badge>
                      <Badge variant="outline">Engenharia de Prompt</Badge>
                      <Badge variant="outline">Infoprodutos</Badge>
                      <Badge variant="outline">Curadoria de Conteúdo</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Experience Item - CityShield */}
            <div className="relative flex gap-8 pb-12">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </div>

              <Card className="flex-1 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-primary">
                        CityShield: Segurança Urbana Inteligente
                      </CardTitle>
                    </div>
                    <div className="flex flex-col md:items-end">
                      <Badge variant="default" className="w-fit bg-yellow-500">
                        Em Andamento
                      </Badge>
                      <span className="text-sm text-muted-foreground mt-1">
                        Fev 2026 - Presente
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    Solução de vanguarda para cidades inteligentes, integrando
                    monitoramento físico e digital para resposta coordenada a
                    incidentes. Arquitetura Event-driven e Serverless para
                    processar fluxos de vídeo e logs de rede em tempo real,
                    utilizando IA para identificar ameaças e orquestrar ações
                    imediatas com órgãos de segurança.
                  </CardDescription>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">
                        Principais Recursos:
                      </h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Monitoramento de vídeo em tempo real com Amazon
                            Kinesis Video Streams e Amazon Rekognition
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Análise preditiva e GenAI com Amazon Bedrock para
                            tomada de decisão estratégica
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Segurança multicamada com Amazon GuardDuty e AWS WAF
                            para proteção de borda
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Orquestração Serverless com AWS Lambda garantindo
                            desacoplamento entre detecção e resposta
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Notificação crítica via Amazon SNS para Polícia,
                            SAMU e Bombeiros em tempo real
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>
                            Persistência escalável com Amazon DynamoDB e Amazon
                            S3 para evidências
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="outline">AWS Lambda</Badge>
                      <Badge variant="outline">Amazon Bedrock</Badge>
                      <Badge variant="outline">Amazon Kinesis</Badge>
                      <Badge variant="outline">Amazon Rekognition</Badge>
                      <Badge variant="outline">Amazon SNS</Badge>
                      <Badge variant="outline">DynamoDB</Badge>
                      <Badge variant="outline">CloudWatch</Badge>
                      <Badge variant="outline">GuardDuty</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
