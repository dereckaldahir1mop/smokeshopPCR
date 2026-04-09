import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/src/data';
import { ProductCard } from '@/src/components/ProductCard';
import { ArrowRight, Truck, ShieldCheck, Zap, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);

  const categories = [
    { name: 'Pipas & Bongs', id: 'pipes', icon: '💨', img: 'https://picsum.photos/seed/luxury-pipe/800/800' },
    { name: 'Vaporizadores', id: 'vaporizers', icon: '🔋', img: 'https://picsum.photos/seed/luxury-vape/800/800' },
    { name: 'Accesorios', id: 'accessories', icon: '🌿', img: 'https://picsum.photos/seed/luxury-acc/800/800' },
    { name: 'Papelillos', id: 'papers', icon: '📄', img: 'https://picsum.photos/seed/luxury-paper/800/800' },
  ];

  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section - Luxury Editorial Style */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img 
          src="https://picsum.photos/seed/luxury-smoke/1920/1080" 
          alt="Luxury Hero" 
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse-slow"
        />
        
        <div className="container mx-auto px-4 relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-primary font-sans tracking-[0.4em] text-xs uppercase mb-8 block font-medium">
              ESTABLISHED 2026 — ELITE SELECTION
            </span>
            <h1 className="text-7xl md:text-9xl font-serif italic text-white mb-10 leading-[0.85] tracking-tighter">
              El Arte de la <br />
              <span className="gold-text-gradient not-italic font-bold">Elevación Pura.</span>
            </h1>
            <p className="text-lg md:text-xl font-sans text-neutral-300 mb-12 leading-relaxed max-w-xl mx-auto font-light">
               Descubre instrumentos de fumar sofisticados para verdaderos conocedores
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button size="lg" className="gold-gradient text-black hover:opacity-90 font-bold px-12 h-14 rounded-none tracking-widest" asChild>
                <Link to="/shop">EXPLORAR COLECCIÓN</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/40 text-primary hover:bg-primary/10 px-12 h-14 rounded-none tracking-widest" asChild>
                <Link to="/about">NUESTRA HERENCIA</Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 opacity-50">
          <span className="text-[10px] tracking-[0.3em] uppercase text-white font-medium">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Brand Philosophy - Minimalist Luxury */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { icon: ShieldCheck, title: 'Calidad Inigualable', desc: 'Cada pieza es seleccionada a mano y rigurosamente probada para asegurar su rendimiento y perfección estética.' },
            { icon: Truck, title: 'Discreción Global', desc: 'Nuestro servicio de entrega de guante blanco garantiza su privacidad con embalajes seguros y sin marcas.' },
            { icon: Star, title: 'Servicio a Medida', desc: 'Consultas personalizadas con nuestros expertos para encontrar la adición perfecta a su colección.' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-8 group-hover:border-primary transition-colors duration-500">
                <item.icon className="w-6 h-6 text-primary font-light" />
              </div>
              <h3 className="text-2xl font-serif italic text-white mb-4">{item.title}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed font-sans font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collection - Grid Layout */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="text-primary font-sans tracking-[0.3em] text-[10px] uppercase mb-4 block">Selección Curada</span>
            <h2 className="text-5xl md:text-6xl font-serif text-white uppercase tracking-tighter">La Serie <span className="italic">Signature</span></h2>
          </div>
          <Button variant="link" className="text-primary font-sans tracking-widest text-xs uppercase group p-0" asChild>
            <Link to="/shop" className="flex items-center gap-3">
              Ver Todas las Obras Maestras <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories - Editorial Split */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.slice(0, 2).map((cat, i) => (
            <Link 
              key={cat.id} 
              to={`/shop?cat=${cat.id}`}
              className="group relative h-[600px] overflow-hidden luxury-border"
            >
              <img src={cat.img} alt={cat.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700" />
              <div className="absolute inset-0 p-12 flex flex-col justify-end items-start">
                <span className="text-primary font-sans tracking-[0.3em] text-[10px] uppercase mb-4 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">Descubrir</span>
                <h3 className="text-4xl md:text-5xl font-serif text-white italic tracking-tighter mb-6">{cat.name}</h3>
                <div className="w-12 h-px bg-primary group-hover:w-24 transition-all duration-700" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter - Elegant Minimalist */}
      <section className="container mx-auto px-4">
        <div className="relative py-24 px-8 md:px-20 border-y border-primary/20 text-center overflow-hidden">
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif text-white italic mb-8">
              Únase al <span className="not-italic font-bold gold-text-gradient">Círculo Elite.</span>
            </h2>
            <p className="text-neutral-400 font-sans font-light mb-12 tracking-wide">
              Reciba acceso exclusivo a lanzamientos limitados, historias de herencia y eventos privados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Correo Electrónico" 
                className="bg-transparent border-b border-primary/30 py-3 px-2 text-white font-sans font-light focus:outline-none focus:border-primary transition-colors flex-1"
              />
              <Button className="bg-primary text-black hover:bg-primary/90 font-bold px-8 rounded-none tracking-widest text-xs">
                SUSCRIBIRSE
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}>
    {children}
  </span>
);
