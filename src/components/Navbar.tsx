import React, { useState } from 'react';
import { ShoppingBag, Menu, X, Smartphone, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white shadow-soft-sm group-hover:bg-brand-700 transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Econo<span className="text-brand-600">Market</span>
              </span>
              <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                Lista & Comparador de Preços
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#como-funciona" className="hover:text-brand-600 transition-colors">
              Como Funciona
            </a>
            <a href="#simulador" className="hover:text-brand-600 transition-colors">
              Simulador Interativo
            </a>
            <a href="#scanner" className="hover:text-brand-600 transition-colors">
              Scanner de Notas
            </a>
            <a href="#beneficios" className="hover:text-brand-600 transition-colors">
              Benefícios
            </a>
            <a href="#faq" className="hover:text-brand-600 transition-colors">
              Dúvidas
            </a>
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              100% Offline & Seguro
            </span>
            <a
              href="#baixar"
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-soft-sm hover:shadow-soft-md transition-all transform hover:-translate-y-0.5"
            >
              <Smartphone className="w-4 h-4" />
              Baixar App Grátis
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#como-funciona"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
            >
              Como Funciona
            </a>
            <a
              href="#simulador"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
            >
              Simulador Interativo
            </a>
            <a
              href="#scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
            >
              Scanner de Notas
            </a>
            <a
              href="#beneficios"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
            >
              Benefícios
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-700 font-semibold hover:bg-slate-50"
            >
              Dúvidas
            </a>
            <div className="pt-2">
              <a
                href="#baixar"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-brand-600 text-white px-4 py-3 rounded-xl font-bold text-center"
              >
                <Smartphone className="w-4 h-4" />
                Baixar App Grátis
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

