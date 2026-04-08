"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, ShoppingBag } from "lucide-react";
import { toast } from "sonner";

export default function CheckoutPage() {
    const router = useRouter();
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    if (items.length === 0 && !isSuccess) {
        router.push("/carrinho");
        return null;
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        clearCart();
        setIsSubmitting(false);
        setIsSuccess(true);

        toast.success("Pedido finalizado com sucesso!");
    };

    if (isSuccess) {
        return (
            <div className="container py-24 flex flex-col items-center justify-center text-center max-w-md mx-auto relative z-10">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mb-6">
                    <CheckCircle2 className="h-16 w-16" />
                </div>
                <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
                <p className="text-muted-foreground mb-8">
                    Obrigado por comprar na Caboclo Construções. Seu pedido foi recebido e está sendo processado. Você receberá atualizações no seu e-mail.
                </p>
                <Button size="lg" onClick={() => router.push("/loja")} className="w-full">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Voltar para a Loja
                </Button>
            </div>
        );
    }

    return (
        <div className="container py-8 max-w-5xl">
            <h1 className="text-3xl font-bold mb-8 text-primary">Finalizar Compra</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Area */}
                <div className="lg:col-span-2 space-y-8">
                    <form id="checkout-form" onSubmit={handleSubmit}>
                        <Card>
                            <CardHeader>
                                <CardTitle>Endereço de Entrega</CardTitle>
                                <CardDescription>Informe onde deseja receber seus materiais.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="nome">Nome Completo</Label>
                                        <Input id="nome" required placeholder="João da Silva" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="telefone">Telefone</Label>
                                        <Input id="telefone" required placeholder="(11) 90000-0000" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-2 col-span-1">
                                        <Label htmlFor="cep">CEP</Label>
                                        <Input id="cep" required placeholder="00000-000" />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <Label htmlFor="endereco">Endereço</Label>
                                        <Input id="endereco" required placeholder="Rua das Flores, 123" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="cidade">Cidade</Label>
                                        <Input id="cidade" required placeholder="São Paulo" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="estado">Estado</Label>
                                        <Input id="estado" required placeholder="SP" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="mt-8">
                            <CardHeader>
                                <CardTitle>Pagamento</CardTitle>
                                <CardDescription>Ambiente seguro para pagamento.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="cartao">Número do Cartão</Label>
                                    <Input id="cartao" required placeholder="0000 0000 0000 0000" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="validade">Validade (MM/AA)</Label>
                                        <Input id="validade" required placeholder="12/25" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="cvv">CVV</Label>
                                        <Input id="cvv" required placeholder="123" type="password" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </div>

                {/* Summary Sidebar */}
                <div>
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Resumo da Compra</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <span className="text-muted-foreground truncate w-40" title={item.name}>
                                        {item.quantity}x {item.name}
                                    </span>
                                    <span className="font-medium">
                                        {new Intl.NumberFormat("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        }).format(item.price * item.quantity)}
                                    </span>
                                </div>
                            ))}

                            <Separator className="my-4" />

                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Subtotal</span>
                                <span>
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(getTotalPrice())}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Frete</span>
                                <span className="text-green-600 font-medium">Grátis</span>
                            </div>

                            <Separator className="my-4" />

                            <div className="flex justify-between font-bold text-lg">
                                <span>Total</span>
                                <span className="text-primary">
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(getTotalPrice())}
                                </span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button
                                type="submit"
                                form="checkout-form"
                                className="w-full h-12 text-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Processando..." : "Confirmar Pagamento"}
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
