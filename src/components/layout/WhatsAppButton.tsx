import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5586994525475";
    const message = encodeURIComponent("Olá! Vim pelo site da Caboclo Construções e gostaria de um orçamento.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco no WhatsApp"
                className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 hover:shadow-xl transition-all duration-300 group"
            >
                <MessageCircle className="w-8 h-8" />

                {/* Tooltip on hover */}
                <span className="absolute right-full mr-4 bg-black/80 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden sm:block">
                    Fale com a gente!
                </span>
            </Link>
        </div>
    );
}
