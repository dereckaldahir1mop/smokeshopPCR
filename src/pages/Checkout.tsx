import React, { useState } from 'react';
import { useCart } from '@/src/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Truck, CreditCard, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checkout: React.FC = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) setStep(step + 1);
    else {
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setStep(4);
        clearCart();
      }, 2000);
    }
  };

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Tu carrito está vacío</h2>
        <Button asChild className="bg-primary text-black font-bold">
          <Link to="/shop">Ir a la tienda</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="flex items-center gap-4 mb-12">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step >= 1 ? 'bg-primary text-black' : 'bg-neutral-800 text-neutral-500'}`}>1</div>
        <div className="h-px flex-1 bg-neutral-800" />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step >= 2 ? 'bg-primary text-black' : 'bg-neutral-800 text-neutral-500'}`}>2</div>
        <div className="h-px flex-1 bg-neutral-800" />
        <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold ${step >= 3 ? 'bg-primary text-black' : 'bg-neutral-800 text-neutral-500'}`}>3</div>
      </div>

      {step === 4 ? (
        <div className="text-center py-20 flex flex-col items-center gap-6">
          <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-4xl font-black uppercase tracking-tighter">¡Pedido Confirmado!</h1>
          <p className="text-neutral-400 max-w-md">
            Gracias por tu compra. Hemos enviado los detalles a tu correo electrónico. Tu pedido llegará en 24-48 horas.
          </p>
          <Button asChild className="bg-primary text-black font-bold px-8">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <form onSubmit={handleNext} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Truck className="w-6 h-6 text-primary" /> Datos de Envío
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-500">Nombre</label>
                      <Input required className="bg-neutral-900 border-neutral-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-500">Apellido</label>
                      <Input required className="bg-neutral-900 border-neutral-800" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase text-neutral-500">Dirección</label>
                    <Input required className="bg-neutral-900 border-neutral-800" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-500">Ciudad</label>
                      <Input required className="bg-neutral-900 border-neutral-800" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-neutral-500">Código Postal</label>
                      <Input required className="bg-neutral-900 border-neutral-800" />
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-primary" /> Método de Pago
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-primary bg-primary/5 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-4 h-4 rounded-full border-4 border-primary" />
                        <span className="font-bold">Tarjeta de Crédito / Débito</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-5 bg-neutral-800 rounded" />
                        <div className="w-8 h-5 bg-neutral-800 rounded" />
                      </div>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-4 cursor-pointer">
                      <div className="w-4 h-4 rounded-full border border-neutral-700" />
                      <span className="font-bold text-neutral-400">Transferencia Bancaria</span>
                    </div>
                    <div className="p-4 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors flex items-center gap-4 cursor-pointer">
                      <div className="w-4 h-4 rounded-full border border-neutral-700" />
                      <span className="font-bold text-neutral-400">Pago contra entrega</span>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Resumen Final</h2>
                  <p className="text-neutral-400">Por favor, revisa que toda la información sea correcta antes de finalizar.</p>
                  <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Envío a:</span>
                      <span className="font-bold">Calle Falsa 123, Springfield</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">Método:</span>
                      <span className="font-bold">Tarjeta de Crédito</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between pt-8">
                {step > 1 ? (
                  <Button type="button" variant="ghost" onClick={() => setStep(step - 1)} className="text-neutral-400">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Atrás
                  </Button>
                ) : (
                  <div />
                )}
                <Button type="submit" disabled={isProcessing} className="bg-primary text-black font-black px-10 h-12">
                  {isProcessing ? 'Procesando...' : step === 3 ? 'FINALIZAR COMPRA' : 'CONTINUAR'}
                </Button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-1">
            <Card className="bg-neutral-900 border-neutral-800 sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg text-white">Tu Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-neutral-400">{item.quantity}x {item.name}</span>
                      <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <Separator className="bg-neutral-800" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-neutral-500">Envío</span>
                    <span className="text-primary font-bold">GRATIS</span>
                  </div>
                  <Separator className="bg-neutral-800" />
                  <div className="flex justify-between text-lg font-black">
                    <span className="text-white">TOTAL</span>
                    <span className="text-primary">${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
