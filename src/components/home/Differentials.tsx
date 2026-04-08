import { Truck, ShieldCheck, CreditCard, HeadphonesIcon } from "lucide-react";

const differentials = [
    {
        icon: Truck,
        title: "Entrega Rápida",
        description: "Frota própria garantindo agilidade na sua obra.",
    },
    {
        icon: ShieldCheck,
        title: "Qualidade Garantida",
        description: "Trabalhamos apenas com as melhores marcas do mercado.",
    },
    {
        icon: CreditCard,
        title: "Pagamento Facilitado",
        description: "Parcele suas compras em até 12x sem juros no cartão.",
    },
    {
        icon: HeadphonesIcon,
        title: "Atendimento Especializado",
        description: "Nossa equipe ajuda você a encontrar o material certo.",
    },
];

export function Differentials() {
    return (
        <section className="py-16 bg-white border-b border-border">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/60 transition-colors border border-primary/10"
                            >
                                <div className="bg-primary text-white p-4 rounded-full mb-5 shadow-sm">
                                    <Icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
