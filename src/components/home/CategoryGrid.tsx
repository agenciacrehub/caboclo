import Link from "next/link";
import Image from "next/image";
import { type LucideIcon, Package, Wrench, Zap, Droplet, PaintRoller, PaintBucket } from "lucide-react";
import categoriesData from "@/mocks/categories.json";

// Map string icon names from JSON to actual React Components
const iconMap: Record<string, LucideIcon> = {
    Package,
    Wrench,
    Zap,
    Droplet,
    PaintRoller,
    PaintBucket,
};

// Map each slug to a consistent distinct color class for the brand
const categoryColors: Record<string, string> = {
    "cimento-e-argamassa": "bg-slate-100 text-slate-700 hover:bg-slate-200",
    "ferramentas": "bg-orange-50 text-orange-700 hover:bg-orange-100",
    "eletrica": "bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
    "hidraulica": "bg-blue-50 text-blue-700 hover:bg-blue-100",
    "acabamentos": "bg-stone-100 text-stone-700 hover:bg-stone-200",
    "tintas": "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
};

export function CategoryGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="flex flex-col items-center text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Compre por Categoria
                    </h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl">
                        Navegue pelos nossos departamentos e encontre exatamente o que sua obra precisa. Trabalhamos com as melhores marcas do mercado.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {categoriesData.map((category) => {
                        const colorClass = categoryColors[category.slug] || "bg-muted hover:bg-muted/80";

                        return (
                            <Link
                                key={category.id}
                                href={`/loja/${category.slug}`}
                                className="group relative flex flex-col items-center justify-center p-6 rounded-2xl transition-all duration-300 overflow-hidden min-h-[160px] shadow-sm hover:shadow-md"
                            >
                                {category.image && (
                                    <>
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
                                    </>
                                )}

                                <div className="relative z-10 flex flex-col items-center">
                                    <h3 className="font-bold tracking-wide text-center text-sm md:text-base leading-tight text-white drop-shadow-lg">
                                        {category.name}
                                    </h3>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
