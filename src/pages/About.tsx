import React from 'react';
import { ShieldCheck, Users, Target, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img 
          src="https://picsum.photos/seed/about/1920/1080" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase mb-6">
            Nuestra <span className="text-primary">Historia</span>
          </h1>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Redefiniendo la cultura del humo con calidad, diseño y una experiencia premium desde 2020.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase">Misión & Visión</h2>
            <p className="text-neutral-400 leading-relaxed">
              En Smoke Shop Elite, no solo vendemos productos; curamos experiencias. Nuestra misión es proporcionar a nuestra comunidad acceso a los mejores accesorios del mercado mundial, garantizando siempre la máxima calidad y discreción.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Visualizamos un futuro donde la parafernalia sea vista como una pieza de diseño y funcionalidad, eliminando estigmas a través de la sofisticación y el servicio al cliente excepcional.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-center items-center text-center">
              <ShieldCheck className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold text-white">Calidad</h4>
            </div>
            <div className="aspect-square rounded-3xl bg-primary p-8 flex flex-col justify-center items-center text-center text-black">
              <Users className="w-10 h-10 mb-4" />
              <h4 className="font-bold">Comunidad</h4>
            </div>
            <div className="aspect-square rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-center items-center text-center">
              <Target className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold">Enfoque</h4>
            </div>
            <div className="aspect-square rounded-3xl bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-center items-center text-center">
              <Award className="w-10 h-10 text-primary mb-4" />
              <h4 className="font-bold">Excelencia</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-950 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase mb-4">Nuestros Valores</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary uppercase">Discreción Total</h3>
              <p className="text-neutral-500 text-sm">Entendemos la importancia de tu privacidad. Todos nuestros envíos son 100% discretos, sin marcas externas que revelen el contenido.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary uppercase">Curaduría Experta</h3>
              <p className="text-neutral-500 text-sm">Cada producto en nuestro catálogo ha sido probado y seleccionado por expertos para asegurar que solo recibas lo mejor.</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary uppercase">Soporte Continuo</h3>
              <p className="text-neutral-500 text-sm">No solo te vendemos un producto, te acompañamos en su uso. Nuestro equipo está siempre disponible para resolver tus dudas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
