import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, Product } from '@/src/data';
import { ProductCard } from '@/src/components/ProductCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const currentCategory = searchParams.get('cat') || 'all';
  const sortBy = searchParams.get('sort') || 'newest';

  const categories = [
    { id: 'all', name: 'Todas las Colecciones' },
    { id: 'pipes', name: 'Pipas Artesanales' },
    { id: 'vaporizers', name: 'Vapes de Precisión' },
    { id: 'accessories', name: 'Accesorios Finos' },
    { id: 'papers', name: 'Papeles Premium' },
    { id: 'cleaners', name: 'Cuidado y Limpieza' },
  ];

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    if (currentCategory !== 'all') {
      result = result.filter(p => p.category === currentCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.brand?.toLowerCase().includes(query)
      );
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [currentCategory, searchQuery, sortBy]);

  const handleCategoryChange = (catId: string) => {
    setSearchParams(prev => {
      if (catId === 'all') prev.delete('cat');
      else prev.set('cat', catId);
      return prev;
    });
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24 border-b border-primary/10 pb-12">
        <div className="max-w-2xl">
          <span className="text-primary font-sans tracking-[0.4em] text-[10px] uppercase mb-4 block">La Colección</span>
          <h1 className="text-6xl md:text-7xl font-serif italic text-white tracking-tighter uppercase leading-none">
            Selección <span className="not-italic font-bold gold-text-gradient">Curada.</span>
          </h1>
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 text-primary" />
            <input 
              placeholder="BUSCAR EN LA COLECCIÓN..." 
              className="w-full pl-8 bg-transparent border-b border-primary/20 py-2 text-[10px] font-sans tracking-widest text-white focus:outline-none focus:border-primary transition-colors uppercase"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-primary">
                <SlidersHorizontal className="w-4 h-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background border-primary/10 text-foreground">
              <SheetHeader>
                <SheetTitle className="text-white font-serif italic">Filtros</SheetTitle>
              </SheetHeader>
              <div className="mt-12 space-y-12">
                <div>
                  <h4 className="text-[10px] font-sans tracking-[0.3em] text-neutral-500 uppercase mb-6">Categorías</h4>
                  <div className="flex flex-col gap-4">
                    {categories.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryChange(cat.id)}
                        className={`text-left text-sm font-serif italic transition-all ${
                          currentCategory === cat.id ? 'text-primary text-lg' : 'text-neutral-500 hover:text-white'
                        }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-20">
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-32 space-y-16">
            <div>
              <h4 className="text-[10px] font-sans tracking-[0.4em] text-neutral-500 uppercase mb-8">Colecciones</h4>
              <div className="flex flex-col gap-6">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`text-left text-sm font-serif italic transition-all duration-500 relative group ${
                      currentCategory === cat.id 
                        ? 'text-primary translate-x-4' 
                        : 'text-neutral-600 hover:text-white hover:translate-x-2'
                    }`}
                  >
                    {currentCategory === cat.id && <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-px bg-primary" />}
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-sans tracking-[0.4em] text-neutral-500 uppercase mb-8">Ordenar Por</h4>
              <select 
                className="w-full bg-transparent border-b border-primary/20 py-2 text-[10px] font-sans tracking-widest text-neutral-400 focus:outline-none focus:border-primary transition-colors uppercase"
                value={sortBy}
                onChange={(e) => setSearchParams(p => { p.set('sort', e.target.value); return p; })}
              >
                <option value="newest">Novedades</option>
                <option value="price-low">Precio: Menor a Mayor</option>
                <option value="price-high">Precio: Mayor a Menor</option>
              </select>
            </div>
            
            <div className="p-8 luxury-border bg-primary/[0.02]">
              <h4 className="font-serif italic text-primary text-lg mb-4">Conserjería Privada</h4>
              <p className="text-[10px] font-sans tracking-widest text-neutral-500 leading-loose uppercase mb-6">Nuestros expertos están disponibles para consultas personalizadas.</p>
              <Button size="sm" className="w-full bg-transparent border border-primary/30 text-primary hover:bg-primary/10 font-bold rounded-none tracking-widest text-[9px] h-12">CONTÁCTENOS</Button>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-neutral-600">
              <X className="w-8 h-8 mb-6 opacity-20" />
              <p className="font-serif italic text-xl">No se encontraron obras maestras que coincidan con sus criterios.</p>
              <Button variant="link" onClick={() => { setSearchQuery(''); handleCategoryChange('all'); }} className="text-primary font-sans tracking-widest text-[10px] uppercase mt-4">
                Reiniciar Filtros
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
