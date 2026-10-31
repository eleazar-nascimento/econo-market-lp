import React, { useState } from 'react';
import {
  QrCode,
  Sparkles,
  Zap,
  CheckCircle2,
  FileCheck,
  Camera,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';

export const DualScannerShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'qr' | 'ai'>('qr');

  return (
    <section id="scanner" className="py-20 sm:py-28 bg-market-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Zap className="w-4 h-4 text-emerald-600" />
            Tecnologia Híbrida de Leitura
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Adeus digitação manual: Escaneie o cupom fiscal em segundos
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Criamos uma arquitetura com dois métodos inteligentes para você nunca ficar na mão no supermercado.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-slate-200/80 p-1.5 rounded-2xl border border-slate-300/60 max-w-md w-full">
            <button
              onClick={() => setActiveTab('qr')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'qr'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <QrCode className="w-4 h-4 text-emerald-600" />
              <span>Opção A: QR Code NFC-e</span>
            </button>

            <button
              onClick={() => setActiveTab('ai')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'ai'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Opção B: Foto com IA</span>
            </button>
          </div>
        </div>

        {/* Conteúdo Dinâmico da Tab */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-soft-md">
          {activeTab === 'qr' ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Lado Esquerdo: Descrição da Opção A */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Recomendado no Brasil (100% de Precisão)
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Leitor de QR Code Direto da SEFAZ
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Praticamente todo supermercado brasileiro imprime a <strong>NFC-e</strong> com um QR Code no rodapé do cupom. Basta apontar a câmera do EconoMarket:
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      ✓
                    </div>
                    <span><strong>Zero erro de centavos:</strong> Lê os dados oficiais registrados no fisco estadual.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      ✓
                    </div>
                    <span><strong>Instantâneo:</strong> Processa 40 produtos em menos de 2 segundos.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                      ✓
                    </div>
                    <span><strong>100% gratuito:</strong> Sem cobrança de IA ou taxas de uso.</span>
                  </li>
                </ul>
              </div>

              {/* Lado Direito: Visual do Cupom QR */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                <div className="w-32 h-32 mx-auto bg-white border-2 border-brand-600 rounded-2xl p-3 flex items-center justify-center shadow-sm relative">
                  <QrCode className="w-full h-full text-brand-600" />
                </div>
                <span className="block mt-4 text-xs font-bold text-slate-900">
                  NFC-e / SAT Fiscal
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Identifica código EAN, quantidade e preço unitário
                </span>
              </div>

            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Lado Esquerdo: Descrição da Opção B */}
              <div className="md:col-span-7">
                <div className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-purple-200">
                  <Sparkles className="w-3.5 h-3.5" />
                  Fallback com Gemini Flash Vision
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Fotografe qualquer cupom térmico ou recibo
                </h3>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  O cupom amassou no bolso, o QR Code desbotou na impressora térmica ou você comprou na feira? Sem problemas:
                </p>

                <ul className="mt-5 space-y-3 text-sm text-slate-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      ✓
                    </div>
                    <span><strong>Visão Multimodal:</strong> A IA lê letras apagadas, papéis dobrados e abreviações.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      ✓
                    </div>
                    <span><strong>Estruturação JSON:</strong> Converte a foto automaticamente em produtos limpos.</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-700">
                      ✓
                    </div>
                    <span><strong>Tela de Conferência:</strong> Você valida tudo antes de gravar no banco local.</span>
                  </li>
                </ul>
              </div>

              {/* Lado Direito: Visual de Foto com IA */}
              <div className="md:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                <div className="w-32 h-32 mx-auto bg-purple-50 border-2 border-purple-500 rounded-2xl p-3 flex items-center justify-center shadow-sm">
                  <Camera className="w-16 h-16 text-purple-600" />
                </div>
                <span className="block mt-4 text-xs font-bold text-slate-900">
                  OCR com Gemini Flash
                </span>
                <span className="text-[11px] text-slate-500 block">
                  Reconhece marcas, pesos e descrições abreviadas
                </span>
              </div>

            </div>
          )}

          {/* Banner de Garantia da Tela de Conferência */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-emerald-50/60 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 rounded-b-3xl">
            <div className="flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-brand-600 flex-shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                  Segurança Total (Human-in-the-loop)
                </span>
                <span className="text-xs sm:text-sm text-slate-700">
                  Ambos os métodos abrem a <strong>Tela de Conferência</strong> para você aprovar ou corrigir qualquer valor com 1 toque.
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

