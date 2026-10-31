import React from 'react';
import {
  TrendingDown,
  TrendingUp,
  QrCode,
  Sparkles,
  Check,
  ChevronRight,
  ShieldCheck,
  Zap,
  RotateCcw,
} from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 bg-gradient-to-b from-emerald-50/40 via-market-canvas to-market-canvas">
      {/* Elementos de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-brand-100/30 to-emerald-200/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Lado Esquerdo: Mensagem e Proposta de Valor */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-200/80 px-3.5 py-1.5 rounded-full mb-6 text-xs sm:text-sm font-bold text-emerald-800 shadow-2xs">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>O 1º Comparador Inteligente de Compras do Mês</span>
            </div>

            {/* Headline Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              Sua lista de compras inteligente.{' '}
              <span className="text-brand-600 block mt-1">
                Saiba o que subiu de preço
              </span>{' '}
              antes de chegar ao caixa.
            </h1>

            {/* Subtítulo Claro */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Repita a compra mensal com <strong>1 clique</strong>, acompanhe item a item a inflação dos seus produtos favoritos e escaneie a nota fiscal com <strong>100% de exatidão</strong> via QR Code ou Foto com IA.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-brand-600 hover:bg-brand-700 text-white font-bold text-base px-8 py-4 rounded-2xl shadow-soft-md hover:shadow-soft-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Testar Simulador ao Vivo</span>
                <ChevronRight className="w-5 h-5" />
              </a>

              <a
                href="#scanner"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-bold text-base px-6 py-4 rounded-2xl border border-slate-200 shadow-2xs transition-all"
              >
                <QrCode className="w-5 h-5 text-brand-600" />
                <span>Ver Scanner de Notas</span>
              </a>
            </div>

            {/* Badges de Confiança */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>100% Offline-First (Sem internet)</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                <span>QR Code NFC-e Direto da SEFAZ</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5 text-sky-500" />
                <span>Clonagem de Cesta com 1 Toque</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Mockup do App Real */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              
              {/* Glow decorativo */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-500 to-emerald-400 rounded-[44px] blur-xl opacity-30 animate-pulse" />

              {/* Moldura do Celular */}
              <div className="relative bg-white border-4 border-slate-900 rounded-[40px] shadow-soft-lg overflow-hidden p-4 sm:p-5">
                
                {/* Notch / Speaker */}
                <div className="w-28 h-4 bg-slate-900 rounded-full mx-auto mb-4" />

                {/* Topo do App */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Novembro / 2026
                    </span>
                    <h3 className="text-xl font-bold text-slate-900">
                      Compras do Mês
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-xl text-xs font-bold text-emerald-700">
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repetir</span>
                  </div>
                </div>

                {/* Banner Comparativo no Celular */}
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-3 my-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-700">
                      Comparativo Mensal
                    </span>
                    <span className="inline-flex items-center text-[11px] font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                      <TrendingDown className="w-3 h-3 mr-0.5" />
                      -8.4% mais barato
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div>
                      <span className="text-slate-600 block text-[10px]">Previsto</span>
                      <strong className="text-slate-900 text-sm font-bold">R$ 289,30</strong>
                    </div>
                    <div className="h-6 w-px bg-emerald-200" />
                    <div>
                      <span className="text-slate-600 block text-[10px]">Mês Anterior</span>
                      <span className="text-slate-600 text-sm">R$ 312,40</span>
                    </div>
                    <div className="h-6 w-px bg-emerald-200" />
                    <div className="text-right">
                      <span className="text-slate-600 block text-[10px]">Economia</span>
                      <strong className="text-emerald-700 text-sm font-bold">-R$ 23,10</strong>
                    </div>
                  </div>
                </div>

                {/* Lista de Itens no Celular */}
                <div className="space-y-2.5 my-3">
                  
                  {/* Item 1: Leite (Baixou) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-800 line-through">
                            Leite Integral 1L
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                            -10.9%
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-600">
                          6 UN × R$ 4,89 (era R$ 5,49)
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      R$ 29,34
                    </span>
                  </div>

                  {/* Item 2: Azeite (Subiu) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900">
                            Azeite de Oliva 500ml
                          </span>
                          <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-1.5 py-0.2 rounded-full">
                            +16.3%
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-600">
                          1 UN × R$ 42,90 (era R$ 36,90)
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-900">
                      R$ 42,90
                    </span>
                  </div>

                  {/* Item 3: Arroz (Baixou) */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-slate-900">
                            Arroz Camil 5kg
                          </span>
                          <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.2 rounded-full">
                            -8.0%
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-600">
                          1 UN × R$ 29,90 (era R$ 32,50)
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-900">
                      R$ 29,90
                    </span>
                  </div>
                </div>

                {/* Bottom Bar do Celular */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-600 uppercase block">
                      Subtotal
                    </span>
                    <strong className="text-base font-bold text-slate-900">
                      R$ 102,14
                    </strong>
                  </div>
                  <div className="flex items-center gap-1.5 bg-brand-600 text-white text-xs font-bold px-3 py-2 rounded-xl">
                    <QrCode className="w-4 h-4" />
                    <span>Escanear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

