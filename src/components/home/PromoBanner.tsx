import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PromoBanner() {
    return (
        <section className="bg-primary text-white py-16 sm:py-20 relative overflow-hidden">
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 mix-blend-overlay"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 mix-blend-overlay"></div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="max-w-2xl space-y-4">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                            Oferta Especial de Fim de Mês
                        </h2>
                        <p className="text-secondary/90 text-lg sm:text-xl">
                            Aproveite até 30% de desconto em toda a linha de Acabamentos e Tintas.
                            Renove sua casa com qualidade e economia.
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold text-primary hover:bg-white" asChild>
                            <Link href="/promocoes">
                                Ver Promoções <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
