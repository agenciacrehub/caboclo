import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
    { id: 1, image: "https://picsum.photos/id/1015/500/500", likes: 124, comments: 12 },
    { id: 2, image: "https://picsum.photos/id/1020/500/500", likes: 89, comments: 5 },
    { id: 3, image: "https://picsum.photos/id/1025/500/500", likes: 256, comments: 34 },
    { id: 4, image: "https://picsum.photos/id/1031/500/500", likes: 145, comments: 8 },
    { id: 5, image: "https://picsum.photos/id/1035/500/500", likes: 312, comments: 45 },
    { id: 6, image: "https://picsum.photos/id/1040/500/500", likes: 198, comments: 21 },
];

export function SocialMedia() {
    return (
        <section className="py-16 bg-white">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-foreground flex items-center gap-3">
                            <Instagram className="h-8 w-8 text-pink-600" />
                            Siga nosso Instagram
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                            Acompanhe dicas de obra, ofertas exclusivas e os bastidores das nossas entregas.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="https://instagram.com" target="_blank">
                                <Instagram className="mr-2 h-4 w-4" /> @cabocloconstrucoes
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                            <Link href="https://facebook.com" target="_blank">
                                <Facebook className="mr-2 h-4 w-4" /> Facebook
                            </Link>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="hidden sm:flex">
                            <Link href="https://youtube.com" target="_blank">
                                <Youtube className="mr-2 h-4 w-4 text-red-600" /> YouTube
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Instagram Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    {posts.map((post) => (
                        <Link
                            key={post.id}
                            href="https://instagram.com"
                            target="_blank"
                            className="relative aspect-square overflow-hidden group rounded-xl bg-muted block"
                        >
                            <Image
                                src={post.image}
                                alt={`Instagram post ${post.id}`}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="flex items-center gap-6 text-white font-semibold">
                                    <div className="flex items-center gap-2">
                                        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                        </svg>
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="h-6 w-6 fill-white" viewBox="0 0 24 24">
                                            <path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18z" />
                                        </svg>
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
