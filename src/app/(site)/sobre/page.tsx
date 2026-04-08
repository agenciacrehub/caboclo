import Image from "next/image";
import { CheckCircle2, Users, Building, TrendingUp } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-FaYhBUEOj-2dRMCBgGoouoUa6de7AY0SSc1aUgqC6hhfpn3HEqhZi7VWCG5omkCJiPCc-jur1Enj_weLf2xh996i9OSoqCS9e4gW5Na1uZxAXgsOJlLP0Oyyb0TPwamwJzTr7rsKn6m7PWUIBhVid8rqr_fu3xk2RnEZYa25KV_VjYPhODJSw5iDx1k/w640-h360/popo.jpg"
                        alt="Caboclo Construções Loja"
                        fill
                        className="object-cover opacity-20"
                    />
                </div>
                <div className="container relative z-10 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
                        Construindo sonhos <br className="hidden md:block" />desde 1995
                    </h1>
                    <p className="text-lg md:text-xl text-primary-foreground/90">
                        A Caboclo Construções nasceu do desejo de oferecer materiais de qualidade com preço justo para as famílias da nossa região.
                    </p>
                </div>
            </section>

            {/* History & Mission */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-foreground">A Nossa História</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Fundada há quase 30 anos por Seu João e Dona Maria, a Caboclo começou como um pequeno depósito de bairro. Com muito trabalho, dedicação e focado no atendimento ao cliente, crescemos e nos tornamos a maior loja de materiais de construção da cidade.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Hoje, somos referência não só na fundação, mas no acabamento fino, possuindo parcerias com as maiores marcas do Brasil para garantir que a sua obra não pare.
                            </p>

                            <div className="pt-4 space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-foreground">Nossa Missão</h3>
                                        <p className="text-muted-foreground">Facilitar a construção e reforma oferecendo os melhores produtos com o melhor atendimento.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-foreground">Nossa Visão</h3>
                                        <p className="text-muted-foreground">Ser o parceiro número 1 na mente do consumidor e dos profissionais do setor.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl">
                            <Image
                                src="https://picsum.photos/id/175/800/800"
                                alt="História da empresa"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers */}
            <section className="py-16 bg-muted">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <Building className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-4xl font-extrabold text-foreground mb-2">29+</h3>
                            <p className="text-muted-foreground font-medium">Anos de Mercado</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <Users className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-4xl font-extrabold text-foreground mb-2">50k+</h3>
                            <p className="text-muted-foreground font-medium">Clientes Atendidos</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-4xl font-extrabold text-foreground mb-2">15k+</h3>
                            <p className="text-muted-foreground font-medium">Itens em Estoque</p>
                        </div>
                        <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
                            <CheckCircle2 className="h-10 w-10 text-primary mx-auto mb-4" />
                            <h3 className="text-4xl font-extrabold text-foreground mb-2">100%</h3>
                            <p className="text-muted-foreground font-medium">Satisfação</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-foreground mb-4">Nossa Equipe de Liderança</h2>
                        <p className="text-muted-foreground text-lg">
                            Pessoas apaixonadas por construir relacionamentos construtivos com você.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            { name: "João Silva", role: "Fundador e CEO", image: "https://picsum.photos/id/1005/400/400" },
                            { name: "Maria Clara", role: "Diretora Comercial", image: "https://picsum.photos/id/1027/400/400" },
                            { name: "Roberto Alves", role: "Gerente de Logística", image: "https://picsum.photos/id/1011/400/400" },
                        ].map((member, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden mb-6 relative shadow-lg">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                                <p className="text-primary font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
