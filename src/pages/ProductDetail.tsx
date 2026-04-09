import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/src/data';
import { Button } from '@/components/ui/button';
import { useCart } from '@/src/context/CartContext';
import { ShoppingCart, ArrowLeft, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Producto no encontrado</h2>
        <Button render={<Link to="/shop" />} className="bg-primary text-black font-bold">
          Volver a la tienda
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" render={<Link to="/shop" />} className="mb-8 text-neutral-400 hover:text-white">
        <div className="flex items-center">
          <ArrowLeft className="w-4 h-4 mr-2" /> Volver a la tienda
        </div>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="relative rounded-3xl overflow-hidden bg-neutral-900 aspect-square">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {product.featured && (
            <Badge className="absolute top-6 left-6 bg-primary text-black font-black px-4 py-1 uppercase text-xs">
              Destacado
            </Badge>
          )}
        </div>

        <div className="flex flex-col">
          <div className="mb-8">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">
              {product.brand || 'Elite Collection'}
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4 uppercase">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-black text-primary">L.{product.price.toFixed(2)}</span>
              <Badge variant="outline" className="border-neutral-800 text-neutral-400">
                En Stock: {product.stock} unidades
              </Badge>
            </div>
            <p className="text-neutral-400 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="space-y-6 mb-12">
            <Button 
              size="lg" 
              className="w-full bg-primary text-black hover:bg-primary/90 font-black h-14 text-lg"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="w-5 h-5 mr-2" /> AGREGAR AL CARRITO
            </Button>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <Truck className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-bold uppercase text-neutral-500">Envío Gratis</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <ShieldCheck className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-bold uppercase text-neutral-500">Pago Seguro</span>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-neutral-900 border border-neutral-800">
                <RefreshCcw className="w-6 h-6 text-primary mb-2" />
                <span className="text-[10px] font-bold uppercase text-neutral-500">Devoluciones</span>
              </div>
            </div>
          </div>

          <Separator className="bg-neutral-900 mb-8" />

          <div className="space-y-4">
            <h4 className="font-bold text-white uppercase tracking-tighter">Especificaciones</h4>
            <div className="grid grid-cols-2 gap-y-2 text-sm">
              <span className="text-neutral-500">Categoría</span>
              <span className="text-white text-right capitalize">{product.category}</span>
              <span className="text-neutral-500">Material</span>
              <span className="text-white text-right">Premium Grade</span>
              <span className="text-neutral-500">Disponibilidad</span>
              <span className="text-primary text-right font-bold">Inmediata</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
