import Image from "next/image";
import { Tag } from "lucide-react";
import promosData from "@/mocks/promotions.json";
import { CountdownTimer } from "@/components/ui/CountdownTimer";

export default function PromocoesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Section */}
            <section className="bg-primary py-16 md:py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10">
                    <Image
                        src="https://img.freepik.com/free-photo/african-american-woman-with-model-house-table-near-safety-helmet-equipments_23-2148040017.jpg"
                        alt="Promoções"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container relative z-10 text-center max-w-4xl">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 max-w-fit mx-auto backdrop-blur-sm">
                        <Tag className="h-6 w-6 text-accent mr-2" />
                        <span className="font-semibold tracking-wide text-sm uppercase text-white">Ofertas Exclusivas</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Construa mais, <br className="hidden md:block" />gastando menos
                    </h1>
                    <p className="text-xl text-primary-foreground/90">
                        Acompanhe nossas ofertas por tempo limitado e garanta os melhores materiais para sua obra.
                    </p>
                </div>
            </section>

            {/* Promos List */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="flex flex-col gap-12 max-w-5xl mx-auto">
                        {promosData.map((promo) => (
                            <div
                                key={promo.id}
                                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border flex flex-col md:flex-row group"
                            >
                                {/* Visual side */}
                                <div className="md:w-2/5 md:min-w-[320px] bg-primary/5 p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border relative overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <Tag className="h-16 w-16 text-primary mb-6 drop-shadow-sm" />
                                    <h2 className="text-2xl font-bold text-center text-foreground mb-4">
                                        {promo.title}
                                    </h2>
                                    <p className="text-center text-muted-foreground font-medium mb-8">
                                        Válido até expirar o cronômetro
                                    </p>

                                    <CountdownTimer targetDate={promo.validUntil} />
                                </div>

                                {/* Content side */}
                                <div className="p-8 md:w-3/5 flex flex-col justify-center">
                                    <div className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground font-bold rounded-full text-sm mb-4 w-fit">
                                        Desconto Especial de {promo.discountPercentage}%
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 leading-tight">
                                        {promo.description}
                                    </h3>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        Aproveite esta condição para antecipar a compra dos materiais da sua obra. O desconto já está sendo aplicado nos produtos vinculados a esta promoção no catálogo.
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href="/loja"
                                            className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors shadow-sm"
                                        >
                                            Aproveitar Oferta
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
