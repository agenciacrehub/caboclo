import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { type Product } from "@/components/shop/ProductCard";
import productsData from "@/mocks/products.json";
import { AddToCartButton } from "@/components/shop/AddToCartButton";

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find the product in our mock data
    const products = productsData as unknown as Product[];
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        notFound();
    }

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <div className="container py-8">
            <Link
                href="/loja"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
            >
                <ChevronLeft className="mr-1 h-4 w-4" />
                Voltar para a loja
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Product Image Area */}
                <div className="flex flex-col gap-4">
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-muted/20 border">
                        {product.images && product.images.length > 0 ? (
                            <Image
                                src={product.images[0]}
                                alt={product.name}
                                fill
                                priority
                                className="object-cover"
                            />
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-semibold text-2xl">
                                Foto do Produto
                            </div>
                        )}
                        {discount > 0 && (
                            <Badge className="absolute left-4 top-4 z-10 text-sm py-1 px-3" variant="destructive">
                                {discount}% OFF
                            </Badge>
                        )}
                    </div>
                </div>

                {/* Product Info Area */}
                <div className="flex flex-col">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {product.name}
                    </h1>

                    <div className="mt-4 flex items-end gap-3">
                        <span className="text-3xl font-bold text-primary">
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(product.price)}
                        </span>
                        {product.originalPrice && (
                            <span className="text-lg text-muted-foreground line-through mb-1">
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(product.originalPrice)}
                            </span>
                        )}
                    </div>

                    <div className="mt-6">
                        <h2 className="sr-only">Product description</h2>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {product.description}
                        </p>
                    </div>

                    <div className="mt-8">
                        <div className="flex items-center gap-2 mb-2">
                            <div className={`h-3 w-3 rounded-full ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`} />
                            <span className="text-sm font-medium">
                                {product.stock > 0 ? `${product.stock} unidades em estoque` : "Fora de estoque temporariamente"}
                            </span>
                        </div>
                        <AddToCartButton product={product} />
                    </div>

                    <div className="mt-10 border-t pt-8">
                        <h3 className="text-lg font-medium text-foreground mb-4">Informações Técnicas</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                            {Object.entries(product.technicalInfo || {}).map(([key, value]) => (
                                <div key={key} className="flex justify-between border-b border-muted/50 pb-2">
                                    <span className="text-sm text-muted-foreground">{key}</span>
                                    <span className="text-sm font-medium text-foreground">{value as string}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
