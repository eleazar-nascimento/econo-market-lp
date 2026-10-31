import React from 'react';
import { ShoppingBag, ShieldCheck, Heart, Smartphone, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="baixar" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner de Download no Topo do Footer */}
        <div className="bg-gradient-to-r from-brand-700 to-emerald-600 rounded-3xl p-8 sm:p-12 mb-16 text-white text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-3.5 py-1 rounded-full text-white inline-block mb-3">
              Comece a Economizar Hoje
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Pronta para nunca mais se assustar no caixa do mercado?
            </h3>
            <p className="mt-3 text-emerald-100 text-sm sm:text-base">
              Baixe o EconoMarket gratuitamente no seu celular e tenha controle total dos preços na sua próxima compra.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white px-6 py-4 rounded-2xl font-bold text-sm shadow-md transition-all">
              <Smartphone className="w-5 h-5 text-emerald-400" />
              <span>Instalar no Android</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50 text-slate-900 px-6 py-4 rounded-2xl font-bold text-sm shadow-md transition-all">
              <Smartphone className="w-5 h-5 text-brand-600" />
              <span>Instalar no iOS (Apple)</span>
            </button>
          </div>
        </div>

        {/* Links do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-sm">
          {/* Coluna 1: Marca */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">
                Econo<span className="text-brand-500">Market</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              O aplicativo offline-first definitivo para quem realiza compras mensais de supermercado e quer proteger o orçamento familiar da inflação.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#como-funciona" className="hover:text-emerald-400 transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-emerald-400 transition-colors">
                  Simulador Interativo
                </a>
              </li>
              <li>
                <a href="#scanner" className="hover:text-emerald-400 transition-colors">
                  Scanner de Notas (NFC-e / IA)
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-emerald-400 transition-colors">
                  Benefícios da Dona de Casa
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Recursos */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Tecnologia & Dados
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <span className="text-slate-300">100% Offline (WatermelonDB)</span>
              </li>
              <li>
                <span className="text-slate-300">Integração SEFAZ (QR Code)</span>
              </li>
              <li>
                <span className="text-slate-300">Gemini 2.5 Flash Vision OCR</span>
              </li>
              <li>
                <span className="text-slate-300">Design com Alto Contraste</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Privacidade */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">
              Segurança & Privacidade
            </h4>
            <div className="flex items-start gap-2 text-xs text-slate-400 mb-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <span>Seus dados são gravados localmente no seu aparelho. Sem anúncios rastreadores.</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Desenvolvido com foco na privacidade da família brasileira.
            </p>
          </div>
        </div>

        {/* Linha Final */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} EconoMarket. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para quem cuida da economia da casa.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

