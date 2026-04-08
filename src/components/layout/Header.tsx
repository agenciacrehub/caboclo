"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, Search, User, MapPin } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Header() {
    const [isMounted, setIsMounted] = useState(false);
    const totalItems = useCartStore((state) => state.getTotalItems());

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
            {/* Top bar - Info */}
            <div className="hidden bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground sm:flex sm:justify-between sm:items-center">
                <div className="container flex justify-between">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>Entregamos em toda a região. Consulte seu CEP.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Atendimento: (86) 99452-5475</span>
                        <span>Seg a Sex: 7h às 18h | Sáb: 7h às 13h</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="container flex h-16 items-center justify-between gap-4">
                {/* Mobile Menu & Logo */}
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Menu</span>
                    </Button>
                    <Link href="/" className="flex items-center gap-2">
                        <div className="p-1.5 rounded-md flex items-center gap-2">
                            <img src="/images/logo_caboclo.jpg" alt="Logo Caboclo Construções" width={40} height={40} className="rounded-full" />
                            <span className="text-lg font-bold leading-none">
                                <span className="text-primary">Caboclo</span> <br />
                                <span className="text-primary">Construções</span></span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                    <Link href="/" className="transition-colors hover:text-primary">
                        Início
                    </Link>
                    <Link href="/loja" className="transition-colors hover:text-primary">
                        Loja
                    </Link>
                    <Link href="/promocoes" className="transition-colors hover:text-primary text-destructive flex items-center gap-1">
                        Promoções
                    </Link>
                    <Link href="/servicos" className="transition-colors hover:text-primary">
                        Serviços
                    </Link>
                    <Link href="/sobre" className="transition-colors hover:text-primary">
                        Sobre
                    </Link>
                    <Link href="/contato" className="transition-colors hover:text-primary">
                        Contato
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden lg:flex flex-1 max-w-sm items-center relative">
                    <Input
                        type="search"
                        placeholder="Buscar produtos..."
                        className="w-full pl-4 pr-10 rounded-full bg-muted/50 border-transparent focus-visible:ring-primary focus-visible:border-primary"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-0 h-full rounded-r-full text-muted-foreground hover:bg-transparent hover:text-primary">
                        <Search className="h-4 w-4" />
                    </Button>
                </div>

                {/* Actions (User, Cart) */}
                <div className="flex items-center gap-2 sm:gap-4">
                    <Button variant="ghost" size="icon" className="hidden sm:flex hover:text-primary hover:bg-primary/10 rounded-full">
                        <User className="h-5 w-5" />
                        <span className="sr-only">Minha Conta</span>
                    </Button>

                    <Button variant="ghost" size="icon" className="relative hover:text-primary hover:bg-primary/10 rounded-full" asChild>
                        <Link href="/carrinho">
                            <ShoppingCart className="h-5 w-5" />
                            {isMounted && totalItems > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 rounded-full"
                                >
                                    {totalItems}
                                </Badge>
                            )}
                            <span className="sr-only">Carrinho</span>
                        </Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
