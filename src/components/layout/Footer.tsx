import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-950 text-zinc-300">
            <div className="container py-12">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand Info */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Caboclo Construções</h3>
                        <p className="text-sm text-zinc-400 mb-6 max-w-xs">
                            Tudo o que você precisa para sua obra, da base ao acabamento, com os melhores preços da região.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="text-zinc-400 hover:text-primary transition-colors">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Links Rápidos</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/sobre" className="hover:text-primary transition-colors">Quem Somos</Link>
                            </li>
                            <li>
                                <Link href="/loja" className="hover:text-primary transition-colors">Nossos Produtos</Link>
                            </li>
                            <li>
                                <Link href="/promocoes" className="hover:text-primary transition-colors">Promoções</Link>
                            </li>
                            <li>
                                <Link href="/servicos" className="hover:text-primary transition-colors">Serviços</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Atendimento</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="/minha-conta" className="hover:text-primary transition-colors">Minha Conta</Link>
                            </li>
                            <li>
                                <Link href="/carrinho" className="hover:text-primary transition-colors">Meus Pedidos</Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:text-primary transition-colors">Fale Conosco</Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="hover:text-primary transition-colors">Política de Devolução</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contato</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>Av. Pinheiro Machado, R. Anhanguera, 1900 - Boa Esperança, Parnaíba - PI, 64215-195</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>(86) 99452-5475</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>atendimento@cabocloconstrucoes.com.br</span>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="border-t border-zinc-800">
                <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Caboclo Construções. Todos os direitos reservados.</p>
                    <div className="flex gap-4">
                        <Link href="/sobre" className="hover:text-primary">Termos de Uso</Link>
                        <Link href="/sobre" className="hover:text-primary">Política de Privacidade</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
