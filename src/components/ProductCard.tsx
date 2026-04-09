import React from 'react';
import { Product } from '@/src/data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '@/src/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} añadido al carrito`, {
      style: { background: '#0a0a0a', color: '#d4af37', border: '1px solid #d4af37' }
    });
  };

  return (
    <Card className="group bg-transparent border-none overflow-hidden transition-all duration-700">
      <div className="relative aspect-[4/5] overflow-hidden luxury-border mb-6">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
          <Button size="icon" variant="secondary" className="rounded-full bg-white/90 text-black hover:bg-primary hover:text-black transition-all duration-300 translate-y-4 group-hover:translate-y-0" render={<Link to={`/product/${product.id}`} />}>
            <Eye className="w-4 h-4" />
          </Button>
          <Button 
            size="icon" 
            className="rounded-full bg-primary text-black hover:bg-primary/90 transition-all duration-300 translate-y-4 group-hover:translate-y-0 delay-75"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
        {product.featured && (
          <div className="absolute top-0 left-0 bg-primary text-black font-sans font-bold uppercase text-[8px] tracking-[0.2em] px-3 py-1">
            Limited
          </div>
        )}
      </div>
      <CardContent className="p-0 text-center">
        <span className="text-[9px] font-sans tracking-[0.3em] text-primary uppercase mb-2 block">{product.brand || 'Elite'}</span>
        <h3 className="font-serif text-xl text-white mb-2 group-hover:italic transition-all duration-500">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h3>
        <p className="text-primary font-sans font-light tracking-widest text-sm">L.{product.price.toFixed(2)}</p>
      </CardContent>
    </Card>
  );
};
