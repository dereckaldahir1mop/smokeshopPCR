import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, Search, User, X, Instagram, Twitter, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useCart } from '@/src/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

export const Navbar: React.FC = () => {
  const { totalItems, cart, removeFromCart, updateQuantity, totalPrice } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: 'COLECCIÓN', path: '/shop' },
    { name: 'HERENCIA', path: '/about' },
    { name: 'CONSERJERÍA', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-primary/10">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-serif italic tracking-tighter text-white group">
            Elite<span className="text-primary not-italic font-bold">Smoke</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-sans tracking-[0.3em] transition-all hover:text-primary ${
                  location.pathname === link.path ? 'text-primary' : 'text-neutral-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-primary">
            <Search className="w-4 h-4" />
          </Button>
          
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="relative text-neutral-400 hover:text-primary" />}>
              <ShoppingCart className="w-4 h-4" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center bg-primary text-black text-[8px] font-bold rounded-full">
                  {totalItems}
                </span>
              )}
            </SheetTrigger>
            <SheetContent className="bg-background border-primary/10 text-foreground w-full sm:max-w-md">
              <SheetHeader>
                <SheetTitle className="text-white font-serif italic text-2xl">Su Selección</SheetTitle>
              </SheetHeader>
              <div className="mt-12 flex flex-col h-[calc(100vh-180px)]">
                {cart.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center text-neutral-500 gap-6">
                    <div className="w-20 h-20 rounded-full border border-neutral-900 flex items-center justify-center">
                      <ShoppingCart className="w-6 h-6 opacity-20" />
                    </div>
                    <p className="font-serif italic">Su colección está vacía</p>
                    <Button render={<Link to="/shop" />} variant="outline" className="border-primary/20 rounded-none tracking-widest text-xs">
                      VER COLECCIÓN
                    </Button>
                  </div>
                ) : (
                  <>
                    <ScrollArea className="flex-1 -mx-6 px-6">
                      <div className="space-y-8">
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-6 group">
                            <div className="w-24 h-24 overflow-hidden bg-neutral-900 luxury-border flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                            </div>
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                              <h4 className="text-sm font-serif italic text-white truncate mb-1">{item.name}</h4>
                              <p className="text-[10px] font-sans tracking-widest text-primary mb-4">L.{item.price.toFixed(2)}</p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center border border-primary/10">
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="px-3 py-1 hover:text-primary transition-colors text-xs"
                                  >-</button>
                                  <span className="px-3 text-[10px] font-sans">{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="px-3 py-1 hover:text-primary transition-colors text-xs"
                                  >+</button>
                                </div>
                                <button 
                                  onClick={() => removeFromCart(item.id)}
                                  className="text-neutral-600 hover:text-primary transition-colors"
                                >
                                  <X className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                    <div className="mt-auto pt-8 border-t border-primary/10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-[10px] font-sans tracking-[0.3em] text-neutral-500 uppercase">Total</span>
                        <span className="text-2xl font-serif text-primary">L.{totalPrice.toFixed(2)}</span>
                      </div>
                      <Button className="w-full gold-gradient text-black font-bold rounded-none h-14 tracking-[0.2em] text-xs" render={<Link to="/checkout" />}>
                        PROCEDER AL PAGO
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden text-neutral-400" />}>
              <Menu className="w-4 h-4" />
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-primary/10 text-foreground">
              <SheetHeader>
                <SheetTitle className="text-white font-serif italic text-left">Elite Smoke</SheetTitle>
              </SheetHeader>
              <div className="mt-12 flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-2xl font-serif italic hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-primary/10 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-serif italic tracking-tighter text-white mb-8 block">
              Elite<span className="text-primary not-italic font-bold">Smoke</span>
            </Link>
            <p className="text-neutral-500 text-xs font-sans font-light leading-loose tracking-wide">
              Definiendo la cima de la cultura del fumador desde 2026. Un santuario para aquellos que aprecian los detalles más finos del oficio.
            </p>
            <div className="flex items-center gap-6 mt-10">
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-neutral-600 hover:text-primary transition-colors"><Facebook className="w-4 h-4" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-serif italic text-lg mb-8">Colecciones</h4>
            <ul className="space-y-4 text-[10px] font-sans tracking-[0.2em] text-neutral-600 uppercase">
              <li><Link to="/shop?cat=pipes" className="hover:text-primary transition-colors">Pipas Artesanales</Link></li>
              <li><Link to="/shop?cat=vaporizers" className="hover:text-primary transition-colors">Vapes de Precisión</Link></li>
              <li><Link to="/shop?cat=accessories" className="hover:text-primary transition-colors">Accesorios Finos</Link></li>
              <li><Link to="/shop?cat=papers" className="hover:text-primary transition-colors">Papeles Premium</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif italic text-lg mb-8">Conserjería</h4>
            <ul className="space-y-4 text-[10px] font-sans tracking-[0.2em] text-neutral-600 uppercase">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contáctenos</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Política de Envío</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Consultas Privadas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Términos de Servicio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif italic text-lg mb-8">El Círculo</h4>
            <p className="text-[10px] font-sans tracking-widest text-neutral-600 mb-6 uppercase">Suscríbase para actualizaciones privadas.</p>
            <div className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Dirección de Correo" 
                className="bg-transparent border-b border-primary/20 py-2 text-[10px] font-sans tracking-widest text-white focus:outline-none focus:border-primary transition-colors"
              />
              <Button size="sm" className="bg-transparent border border-primary/20 text-primary hover:bg-primary/10 font-bold rounded-none tracking-widest text-[9px] h-10">UNIRSE</Button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[9px] font-sans tracking-[0.3em] text-neutral-700 uppercase">
          <p>© 2026 Elite Smoke. Todos los Derechos Reservados.</p>
          <div className="flex items-center gap-12">
            <span>Solo 21+</span>
            <div className="flex items-center gap-4 opacity-30">
              <div className="w-8 h-px bg-white" />
              <div className="w-8 h-px bg-white" />
              <div className="w-8 h-px bg-white" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
