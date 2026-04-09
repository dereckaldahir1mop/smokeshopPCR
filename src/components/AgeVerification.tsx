import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ShieldAlert } from 'lucide-react';

export const AgeVerification: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setIsOpen(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[500px] bg-background border-primary/20 text-foreground p-12 rounded-none" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader className="flex flex-col items-center gap-8">
          <div className="text-3xl font-serif italic tracking-tighter text-white">
            Elite<span className="text-primary not-italic font-bold">Smoke</span>
          </div>
          <div className="space-y-4 text-center">
            <DialogTitle className="text-3xl font-serif italic text-white uppercase tracking-widest">Verificación</DialogTitle>
            <DialogDescription className="text-center text-neutral-500 font-sans font-light tracking-widest leading-loose uppercase text-[10px]">
              Debe tener la edad legal en su jurisdicción para entrar en este santuario. Al entrar, confirma que tiene al menos 21 años de edad.
            </DialogDescription>
          </div>
        </DialogHeader>
        <div className="flex flex-col gap-4 mt-12">
          <Button onClick={handleVerify} className="w-full gold-gradient text-black font-bold h-14 rounded-none tracking-[0.2em] text-xs">
            TENGO MÁS DE 21
          </Button>
          <Button variant="ghost" onClick={handleDecline} className="w-full text-neutral-600 hover:text-primary tracking-[0.2em] text-[10px]">
            SALIR
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
