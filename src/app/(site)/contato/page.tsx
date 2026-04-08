"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactSchema = z.object({
    nome: z.string().min(3, "Nome deve ter no mínimo 3 caracteres."),
    email: z.string().email("E-mail inválido."),
    telefone: z.string().min(10, "Telefone inválido."),
    assunto: z.string().min(5, "Assunto deve ter no mínimo 5 caracteres."),
    mensagem: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContatoPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Formulário de contato:", data);

        toast.success("Mensagem enviada com sucesso!", {
            description: "Nossa equipe entrará em contato em breve.",
        });

        reset();
    };

    return (
        <div className="flex flex-col min-h-screen bg-white pb-20">
            {/* Header Section */}
            <section className="bg-primary/5 py-16 md:py-24 border-b border-border">
                <div className="container max-w-4xl text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
                        Fale Conosco
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Estamos prontos para ouvir você. Tire suas dúvidas, faça sugestões ou solicite um orçamento.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mt-12 md:mt-20 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info & Map */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-8">Nossas Informações</h2>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Endereço</h3>
                                        <p className="text-muted-foreground">Av. Pinheiro Machado,<br />R. Anhanguera, 1900 - Boa Esperança,<br />Parnaíba - PI, 64215-195</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Telefone / WhatsApp</h3>
                                        <p className="text-muted-foreground">(11) 99999-0000<br />(11) 3333-4444</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">E-mail</h3>
                                        <p className="text-muted-foreground">contato@cabocloconstrucoes.com.br<br />vendas@cabocloconstrucoes.com.br</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0 h-fit">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-foreground mb-1">Horário de Funcionamento</h3>
                                        <p className="text-muted-foreground">Segunda a Sexta: 07h às 18h<br />Sábados: 07h às 13h</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl overflow-hidden border border-border bg-muted aspect-video relative shadow-sm">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.6450523426543!2d-41.75692892564692!3d-2.9180349970583306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ec3aac5f0847c5%3A0xee67b6326123597a!2zQ2Fib2NsbyBDb250cnXDp8O1ZXM!5e0!3m2!1spt-BR!2sbr!4v1775619588726!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de localização Caboclo Construções"
                                className="absolute inset-0"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-border">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="nome">Nome Completo</Label>
                                <Input
                                    id="nome"
                                    placeholder="Seu nome"
                                    {...register("nome")}
                                    className={errors.nome ? "border-red-500 focus-visible:ring-red-500" : ""}
                                />
                                {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="email">E-mail</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Seu e-mail"
                                        {...register("email")}
                                        className={errors.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                                    <Input
                                        id="telefone"
                                        placeholder="(00) 00000-0000"
                                        {...register("telefone")}
                                        className={errors.telefone ? "border-red-500 focus-visible:ring-red-500" : ""}
                                    />
                                    {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="assunto">Assunto</Label>
                                <Input
                                    id="assunto"
                                    placeholder="Ex: Orçamento de material básico"
                                    {...register("assunto")}
                                    className={errors.assunto ? "border-red-500 focus-visible:ring-red-500" : ""}
                                />
                                {errors.assunto && <p className="text-red-500 text-sm mt-1">{errors.assunto.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="mensagem">Mensagem</Label>
                                <Textarea
                                    id="mensagem"
                                    placeholder="Escreva como podemos te ajudar..."
                                    className={`min-h-[150px] resize-none ${errors.mensagem ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                                    {...register("mensagem")}
                                />
                                {errors.mensagem && <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>}
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className="w-full h-14 text-lg"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                                {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
