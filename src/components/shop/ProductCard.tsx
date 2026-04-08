"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

export interface Product {
    id: string;
    slug: string;
    name: string;
    categoryId: string;
    price: number;
    originalPrice: number | null;
    images: string[];
    description: string;
    stock: number;
    tags?: string[];
    technicalInfo?: Record<string, string>;
}

export function ProductCard({ product }: { product: Product }) {
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0] || "/placeholder.jpg",
            quantity: 1,
        });

        toast.success("Produto adicionado ao carrinho", {
            description: product.name,
            action: {
                label: "Ver carrinho",
                onClick: () => window.location.href = "/carrinho",
            },
        });
    };

    const discount = product.originalPrice
        ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
        : 0;

    return (
        <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md border-border/50">
            <Link href={`/loja/produto/${product.slug}`} className="group relative block aspect-square overflow-hidden bg-muted/20">
                {product.images && product.images.length > 0 ? (
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-semibold text-xl">
                        Foto Produto
                    </div>
                )}

                {discount > 0 && (
                    <Badge className="absolute left-2 top-2 z-10" variant="destructive">
                        {discount}% OFF
                    </Badge>
                )}
            </Link>

            <CardContent className="flex flex-1 flex-col p-4">
                <div className="flex-1">
                    {product.tags && product.tags.length > 0 && (
                        <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                            {product.tags[0]}
                        </p>
                    )}
                    <Link href={`/loja/produto/${product.slug}`}>
                        <h3 className="line-clamp-2 text-sm font-semibold hover:text-primary transition-colors">
                            {product.name}
                        </h3>
                    </Link>
                </div>

                <div className="mt-4 flex items-end gap-2">
                    <span className="text-lg font-bold text-primary">
                        {new Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                        }).format(product.price)}
                    </span>
                    {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through mb-[2px]">
                            {new Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(product.originalPrice)}
                        </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    className="w-full gap-2"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0}
                >
                    <ShoppingCart className="h-4 w-4" />
                    {product.stock === 0 ? "Esgotado" : "Comprar"}
                </Button>
            </CardFooter>
        </Card>
    );
}
