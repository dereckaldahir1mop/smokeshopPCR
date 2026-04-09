import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase mb-6">Contáctanos</h1>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            ¿Tienes dudas sobre un producto o tu pedido? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">WhatsApp Directo</h4>
                    <p className="text-sm text-neutral-500">+504 9233-2499 </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Email</h4>
                    <p className="text-sm text-neutral-500">smokeshoppcr@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900 border-neutral-800 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Ubicación</h4>
                    <p className="text-sm text-neutral-500">Puerto Cortés,Honduras. (Solo Online)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="p-8 rounded-3xl bg-primary text-black">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Horario de Atención</h3>
              <div className="space-y-2 font-medium">
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Lunes - Viernes</span>
                  <span>09:00 - 20:00</span>
                </div>
                <div className="flex justify-between border-b border-black/10 pb-2">
                  <span>Sábados</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl">
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-8">Envíanos un mensaje</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-500">Nombre Completo</label>
                <Input className="bg-neutral-900 border-neutral-800" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-500">Email</label>
                <Input type="email" className="bg-neutral-900 border-neutral-800" placeholder="tu@email.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-500">Asunto</label>
                <Input className="bg-neutral-900 border-neutral-800" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-neutral-500">Mensaje</label>
                <textarea 
                  className="w-full min-h-[150px] bg-neutral-900 border border-neutral-800 rounded-md p-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <Button className="w-full bg-primary text-black hover:bg-primary/90 font-black h-12">
                <Send className="w-4 h-4 mr-2" /> ENVIAR MENSAJE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
