"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight, ShoppingCart } from "lucide-react";

export default function CarrinhoPage() {
    const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if (items.length === 0) {
        return (
            <div className="container py-16 flex flex-col items-center justify-center text-center">
                <div className="bg-muted p-6 rounded-full mb-6 text-muted-foreground">
                    <ShoppingCart className="h-12 w-12" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h1>
                <p className="text-muted-foreground mb-8 max-w-sm">
                    Você ainda não adicionou nenhum produto ao seu carrinho de compras.
                </p>
                <Link href="/loja">
                    <Button size="lg">Continuar Comprando</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8 text-primary">Meu Carrinho</h1>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Cart Items List */}
                <div className="flex-1">
                    <div className="border rounded-lg overflow-hidden">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-muted text-muted-foreground hidden sm:table-header-group">
                                <tr>
                                    <th className="px-4 py-3 font-medium">Produto</th>
                                    <th className="px-4 py-3 font-medium text-center">Ações</th>
                                    <th className="px-4 py-3 font-medium text-center">Quantidade</th>
                                    <th className="px-4 py-3 font-medium text-right">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map((item) => (
                                    <tr key={item.id} className="border-t flex flex-col sm:table-row pb-4 sm:pb-0">
                                        <td className="p-4 sm:p-4">
                                            <div className="flex items-center gap-4">
                                                <div className="relative h-16 w-16 bg-muted rounded shrink-0 overflow-hidden flex items-center justify-center text-xs text-muted-foreground">
                                                    {item.image ? (
                                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                                    ) : (
                                                        "Foto"
                                                    )}
                                                </div>
                                                <div className="flex flex-col">
                                                    <Link href={`/loja/produto/${item.slug}`} className="font-semibold hover:text-primary transition-colors line-clamp-2">
                                                        {item.name}
                                                    </Link>
                                                    <span className="text-muted-foreground text-sm font-medium mt-1">
                                                        {new Intl.NumberFormat("pt-BR", {
                                                            style: "currency",
                                                            currency: "BRL",
                                                        }).format(item.price)}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Mobile view layout helpers */}
                                        <td className="px-4 sm:py-4 flex justify-between items-center sm:table-cell sm:text-center mt-4 sm:mt-0">
                                            <span className="sm:hidden text-muted-foreground font-medium">Ações:</span>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeItem(item.id)}
                                                className="text-destructive hover:text-destructive hover:bg-destructive/10 h-8"
                                            >
                                                <Trash2 className="h-4 w-4 mr-1 sm:mr-0" />
                                                <span className="sm:hidden">Remover</span>
                                            </Button>
                                        </td>

                                        <td className="px-4 py-2 flex justify-between items-center sm:table-cell sm:text-center sm:py-4 border-t sm:border-0 mt-2 sm:mt-0 pt-2 sm:pt-4">
                                            <span className="sm:hidden text-muted-foreground font-medium">Quantidade:</span>
                                            <div className="flex items-center justify-center border rounded-md w-fit sm:mx-auto">
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-none"
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    disabled={item.quantity <= 1}
                                                >
                                                    <Minus className="h-3 w-3" />
                                                </Button>
                                                <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 rounded-none"
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >
                                                    <Plus className="h-3 w-3" />
                                                </Button>
                                            </div>
                                        </td>

                                        <td className="px-4 pb-2 pt-2 flex justify-between items-center sm:table-cell text-right sm:py-4 font-bold border-t sm:border-0 mt-2 sm:mt-0">
                                            <span className="sm:hidden text-muted-foreground font-medium">Subtotal:</span>
                                            <span className="text-primary text-base">
                                                {new Intl.NumberFormat("pt-BR", {
                                                    style: "currency",
                                                    currency: "BRL",
                                                }).format(item.price * item.quantity)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <Link href="/loja">
                            <Button variant="outline" className="hover:text-primary hover:bg-primary/10">Continuar Comprando</Button>
                        </Link>
                        <Button
                            variant="ghost"
                            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                            onClick={() => {
                                if (confirm("Tem certeza que deseja esvaziar seu carrinho?")) {
                                    clearCart();
                                }
                            }}
                        >
                            Esvaziar Carrinho
                        </Button>
                    </div>
                </div>

                {/* Cart Summary */}
                <div className="lg:w-80 shrink-0">
                    <div className="border rounded-lg p-6 bg-muted/10 sticky top-24">
                        <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>

                        <div className="space-y-3 text-sm border-b pb-4 mb-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Subtotal ({items.length} itens)</span>
                                <span>
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(getTotalPrice())}
                                </span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Adicional de Entrega</span>
                                <span className="text-muted-foreground">A calcular</span>
                            </div>
                        </div>

                        <div className="flex justify-between font-bold text-lg mb-6">
                            <span>Total</span>
                            <span className="text-primary">
                                {new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                }).format(getTotalPrice())}
                            </span>
                        </div>

                        <Link href="/checkout" className="w-full block">
                            <Button className="w-full text-lg h-12 gap-2" size="lg">
                                Ir para o Checkout
                                <ArrowRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
