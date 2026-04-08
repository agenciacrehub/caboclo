"use client";

import { useState } from "react";
import { ProductCard, type Product } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/button";
import productsData from "@/mocks/products.json";
import featuredData from "@/mocks/featured.json";

type TabId = "bestSellers" | "onSale" | "newArrivals";

const tabs: { id: TabId; label: string }[] = [
    { id: "bestSellers", label: "Mais Vendidos" },
    { id: "onSale", label: "Promoções" },
    { id: "newArrivals", label: "Novidades" },
];

export function FeaturedProducts() {
    const [activeTab, setActiveTab] = useState<TabId>("bestSellers");

    // Typecast products
    const products = productsData as unknown as Product[];

    // Get product IDs for the active tab
    const activeProductIds = featuredData[activeTab] || [];

    // Map IDs to actual Product objects and filter out missing ones
    const activeProducts = activeProductIds
        .map((id) => products.find((p) => p.id === id))
        .filter((p): p is Product => p !== undefined);

    return (
        <section className="py-16 bg-muted/30">
            <div className="container">
                <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-10">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        Produtos em Destaque
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Confira as melhores ofertas e os produtos mais procurados pelos nossos clientes.
                    </p>
                </div>

                {/* Custom Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${activeTab === tab.id
                                        ? "bg-background text-foreground shadow-sm font-semibold"
                                        : "hover:bg-background/50 hover:text-foreground"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid / Horizontal Scroll on Mobile */}
                <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 snap-x snap-mandatory hide-scrollbar">
                    {activeProducts.length > 0 ? (
                        activeProducts.map((product) => (
                            <div key={product.id} className="min-w-[280px] sm:min-w-0 snap-start">
                                <ProductCard product={product} />
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full py-12 text-center text-muted-foreground border-2 border-dashed rounded-xl">
                            Nenhum produto encontrado para esta lista.
                        </div>
                    )}
                </div>

                <div className="mt-8 flex justify-center">
                    <Button variant="outline" size="lg" className="px-8" asChild>
                        <a href="/loja">Ver Todos os Produtos</a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
