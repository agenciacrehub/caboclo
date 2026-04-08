"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
    {
        id: 1,
        image: "/images/slides/1.jpg",
        title: "Tudo para sua obra, do alicerce ao telhado",
        subtitle: "Encontre os melhores materiais de construção com os melhores preços da região. Qualidade e entrega rápida garantidas.",
        cta1: { text: "Ver Ofertas", link: "/promocoes" },
        cta2: { text: "Nossos Produtos", link: "/loja" },
    },
    {
        id: 2,
        image: "/images/slides/2.jpg",
        title: "Acabamentos de Alta Qualidade",
        subtitle: "Renove sua casa com nossa linha premium de pisos, revestimentos e tintas das melhores marcas do mercado.",
        cta1: { text: "Comprar Agora", link: "/loja/acabamentos" },
        cta2: { text: "Falar com Vendedor", link: "/contato" },
    },
    {
        id: 3,
        image: "/images/slides/3.jpg",
        title: "Ferramentas Profissionais",
        subtitle: "Equipe-se com o que há de melhor. Linha completa de ferramentas manuais e elétricas para todos os tipos de trabalho.",
        cta1: { text: "Ver Ferramentas", link: "/loja/ferramentas" },
        cta2: { text: "Saiba Mais", link: "/sobre" },
    },
];

export function HeroCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden bg-zinc-900 group">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 bg-black/50 z-10" />
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className={`img-hero object-cover transition-transform duration-[10000ms] ease-linear ${index === currentSlide ? "scale-105" : "scale-100"
                            }`}
                        priority={index === 0}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 md:px-6">
                        <div className="max-w-3xl space-y-6">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-md">
                                {slide.title}
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto drop-shadow">
                                {slide.subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button size="lg" className="text-base h-12 px-8" asChild>
                                    <Link href={slide.cta1.link}>{slide.cta1.text}</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="text-base h-12 px-8 bg-black/20 text-white border-white hover:bg-white hover:text-black" asChild>
                                    <Link href={slide.cta2.link}>{slide.cta2.text}</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                aria-label="Slide anterior"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 flex items-center justify-center rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/50"
                aria-label="Próximo slide"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 rounded-full transition-all ${index === currentSlide ? "w-8 bg-primary" : "w-2.5 bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
