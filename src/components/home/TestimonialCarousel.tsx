"use client";

import { useState } from "react";
import testimonialsData from "@/mocks/testimonials.json";
import { StarRating } from "@/components/shop/StarRating";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 1; // Simplify for mobile first

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };

    return (
        <section className="py-20 bg-primary/5">
            <div className="container">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                        O que nossos clientes dizem
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        A satisfação de quem constrói com a gente é a nossa maior recompensa.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonialsData.map((testimonial) => (
                                <div key={testimonial.id} className="min-w-full px-4 sm:px-12">
                                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-border/50 text-center relative">
                                        <Quote className="h-12 w-12 text-primary/10 absolute top-6 left-6" />
                                        <div className="flex flex-col items-center gap-6 relative z-10">
                                            <StarRating rating={testimonial.rating} size={24} />
                                            <p className="text-lg md:text-xl italic text-foreground leading-relaxed font-medium">
                                                "{testimonial.text}"
                                            </p>
                                            <div>
                                                <h4 className="font-bold text-foreground text-lg">{testimonial.author}</h4>
                                                <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 z-10 h-10 w-10 sm:h-12 sm:w-12 mx-auto flex items-center justify-center rounded-full bg-white text-primary shadow-md hover:bg-primary hover:text-white transition-colors"
                        aria-label="Depoimento anterior"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 z-10 h-10 w-10 sm:h-12 sm:w-12 flex items-center justify-center rounded-full bg-white text-primary shadow-md hover:bg-primary hover:text-white transition-colors"
                        aria-label="Próximo depoimento"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    <div className="flex justify-center mt-8 gap-2">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/50"
                                    }`}
                                aria-label={`Ir para o depoimento ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
