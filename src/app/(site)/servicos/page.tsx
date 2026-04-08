import { Truck, Calculator, MessageSquare, ClipboardList, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        icon: Truck,
        title: "Entrega Expressa",
        description: "Contamos com frota própria para garantir que seu material chegue na obra no prazo combinado, sem atrasos. Entregamos em toda a região metropolitana.",
    },
    {
        icon: Calculator,
        title: "Orçamento Online",
        description: "Envie sua lista de materiais pelo site ou WhatsApp. Nossa equipe retorna rapidamente com o melhor preço e condições de pagamento exclusivas.",
    },
    {
        icon: MessageSquare,
        title: "Atendimento por WhatsApp",
        description: "Tire dúvidas técnicas, acompanhe seu pedido ou solicite produtos direto com nossos vendedores pelo WhatsApp de forma humana e ágil.",
    },
    {
        icon: ClipboardList,
        title: "Projetos Especiais",
        description: "Atendimento diferenciado para construtoras, arquitetos e engenheiros, com faturamento facilitado e acompanhamento dedicado do início ao fim da obra.",
    }
];

export default function ServicosPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary/5 py-16 md:py-24 border-b border-border">
                <div className="container max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                        Nossos Serviços
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Muito além de vender materiais, nós oferecemos soluções completas para facilitar a sua obra.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div key={i} className="flex flex-col p-8 rounded-3xl bg-white border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-brand-light w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6">
                                        <Icon className="h-8 w-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed flex-1">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary text-white">
                <div className="container text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">Precisa de ajuda com sua obra?</h2>
                    <p className="text-primary-foreground/90 text-lg mb-10">
                        Nossa equipe está pronta para te atender. Entre em contato agora mesmo e faça um orçamento sem compromisso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold text-primary hover:bg-white" asChild>
                            <Link href="/contato">Fale Conosco</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg text-white border-white hover:bg-white hover:text-primary" asChild>
                            <Link href="/loja">Ver Produtos <ArrowRight className="ml-2 h-5 w-5" /></Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
