"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const newsletterSchema = z.object({
    email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export function Newsletter() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<NewsletterFormValues>({
        resolver: zodResolver(newsletterSchema),
    });

    const onSubmit = async (data: NewsletterFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log(data);

        toast.success("E-mail cadastrado com sucesso!", {
            description: "Você receberá nossas melhores ofertas em breve.",
        });

        reset();
    };

    return (
        <section className="py-20 bg-brand-light relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-brand/10 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-brand/10 blur-3xl"></div>

            <div className="container relative z-10">
                <div className="max-w-3xl mx-auto flex flex-col items-center text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-brand/20">
                    <div className="bg-brand-light text-brand p-4 rounded-full mb-6 relative">
                        <Mail className="h-8 w-8" />
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>

                    <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
                        Ofertas Exclusivas no seu E-mail
                    </h2>
                    <p className="text-muted-foreground mb-8 max-w-xl">
                        Cadastre-se para receber promoções antecipadas, dicas de obra e novidades da Caboclo Construções diretamente na sua caixa de entrada.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="w-full">
                                <Input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    className="h-12 border-gray-300 focus-visible:ring-brand bg-gray-50 text-foreground"
                                    disabled={isSubmitting}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>
                                )}
                            </div>
                            <Button
                                type="submit"
                                size="lg"
                                className="h-12 bg-brand text-white hover:bg-brand-dark px-6 w-full sm:w-auto"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Cadastrar"}
                                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                            </Button>
                        </div>
                        <p className="text-xs text-muted-foreground mt-4">
                            Não enviamos spam. Você pode se descadastrar a qualquer momento.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
