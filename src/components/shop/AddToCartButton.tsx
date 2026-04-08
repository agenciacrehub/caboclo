"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { type Product } from "./ProductCard";

export function AddToCartButton({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore((state) => state.addItem);

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            slug: product.slug,
            name: product.name,
            price: product.price,
            originalPrice: product.originalPrice,
            image: product.images[0] || "/placeholder.jpg",
            quantity,
        });

        toast.success(`${quantity}x ${product.name} adicionado ao carrinho`, {
            action: {
                label: "Ver carrinho",
                onClick: () => window.location.href = "/carrinho",
            },
        });
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    if (product.stock === 0) {
        return (
            <Button className="w-full md:w-auto" disabled>
                Produto Esgotado
            </Button>
        )
    }

    return (
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center border rounded-md">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                    className="rounded-none rounded-l-md hover:bg-muted"
                >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Diminuir quantidade</span>
                </Button>
                <div className="w-12 text-center text-sm font-medium">{quantity}</div>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleIncrease}
                    disabled={quantity >= product.stock}
                    className="rounded-none rounded-r-md hover:bg-muted"
                >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Aumentar quantidade</span>
                </Button>
            </div>

            <Button className="flex-1 md:flex-none gap-2" onClick={handleAddToCart} size="lg">
                <ShoppingCart className="h-5 w-5" />
                Adicionar ao Carrinho
            </Button>
        </div>
    );
}
