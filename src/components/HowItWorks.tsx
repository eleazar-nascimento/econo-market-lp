import React from 'react';
import { RotateCcw, ShoppingCart, QrCode, TrendingDown } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: '01',
      icon: <RotateCcw className="w-6 h-6 text-brand-600" />,
      title: 'Planeje com 1 Toque',
      description:
        'Clique em "Repetir Mês" e sua lista do mês anterior carrega com as quantidades habituais e os últimos preços conhecidos.',
    },
    {
      step: '02',
      icon: <ShoppingCart className="w-6 h-6 text-brand-600" />,
      title: 'Modo "No Carrinho"',
      description:
        'Conforme coloca os produtos no carrinho, dê o check com o polegar. O app calcula o subtotal acumulado em tempo real.',
    },
    {
      step: '03',
      icon: <QrCode className="w-6 h-6 text-brand-600" />,
      title: 'Escaneie a Nota no Caixa',
      description:
        'Aponte a câmera para o QR Code da NFC-e ou tire uma foto do cupom. Os preços finais são extraídos com 100% de exatidão.',
    },
    {
      step: '04',
      icon: <TrendingDown className="w-6 h-6 text-emerald-600" />,
      title: 'Descubra sua Economia',
      description:
        'Veja na hora os badges verdes de economia e os vermelhos de inflação, sabendo exatamente quanto sua compra variou vs o mês passado.',
    },
  ];

  return (
    <section id="como-funciona" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Simples e Rápido
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            Como funciona na sua rotina do mês
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Do sofá de casa até o caixa do supermercado em 4 passos intuitivos.
          </p>
        </div>

        {/* 4 Passos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-market-canvas border border-slate-200 rounded-3xl p-6 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-slate-300">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

