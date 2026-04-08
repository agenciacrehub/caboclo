import React from "react";
import { ProductCard, type Product } from "@/components/shop/ProductCard";
import productsData from "@/mocks/products.json";

export default function LojaPage() {
    const products = productsData as unknown as Product[];

    return (
        <div className="container py-8">
            <div className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-bold tracking-tight text-primary">Catálogo de Produtos</h1>
                <p className="mt-2 text-muted-foreground">Encontre ferramentas, cimento, elétrica e muito mais para sua obra.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
