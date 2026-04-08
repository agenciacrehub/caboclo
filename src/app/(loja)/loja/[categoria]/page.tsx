export default async function CategoriaPage({ params }: { params: { categoria: string } }) {
    const { categoria } = await params;
    return (
        <div className="container py-12">
            <h1 className="text-3xl font-bold mb-4 text-primary">Categoria: {categoria}</h1>
            <p className="text-muted-foreground">Produtos desta categoria.</p>
        </div>
    );
}
