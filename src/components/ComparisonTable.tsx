import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const rows = [
    {
      feature: 'Comparativo de preços mês a mês',
      econo: true,
      paper: false,
      generic: false,
    },
    {
      feature: 'Leitura de QR Code NFC-e da SEFAZ',
      econo: true,
      paper: false,
      generic: false,
    },
    {
      feature: 'Leitura de cupom físico por foto (IA)',
      econo: true,
      paper: false,
      generic: false,
    },
    {
      feature: 'Detecção de itens que subiram ou baixaram',
      econo: true,
      paper: false,
      generic: false,
    },
    {
      feature: 'Clonar compra do mês com 1 clique',
      econo: true,
      paper: false,
      generic: 'Parcial',
    },
    {
      feature: '100% Offline (sem depender do 4G do mercado)',
      econo: true,
      paper: true,
      generic: 'Parcial',
    },
    {
      feature: 'Totalizador em tempo real na palma da mão',
      econo: true,
      paper: false,
      generic: false,
    },
    {
      feature: 'Privacidade total (dados no seu aparelho)',
      econo: true,
      paper: true,
      generic: false,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-market-canvas border-t border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Comparativo Direto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            Por que trocar o papel e apps comuns pelo EconoMarket?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Descubra por que listas comuns não te ajudam a economizar de verdade.
          </p>
        </div>

        {/* Tabela Responsiva */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-soft-md">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="py-5 px-6 text-sm font-bold text-slate-900 w-1/2">
                    Funcionalidade
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-bold text-slate-500 w-1/6">
                    Caderno / Papel
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-bold text-slate-500 w-1/6">
                    Bloco de Notas
                  </th>
                  <th className="py-5 px-4 text-center text-sm font-bold text-brand-600 bg-emerald-50/70 w-1/6 border-x border-emerald-100">
                    <div className="flex items-center justify-center gap-1">
                      <Sparkles className="w-4 h-4 text-brand-600" />
                      <span>EconoMarket</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {row.feature}
                    </td>

                    {/* Papel */}
                    <td className="py-4 px-4 text-center">
                      {row.paper === true ? (
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : row.paper === false ? (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-xs text-slate-500 font-semibold">{row.paper}</span>
                      )}
                    </td>

                    {/* Apps Genéricos */}
                    <td className="py-4 px-4 text-center">
                      {row.generic === true ? (
                        <Check className="w-5 h-5 text-emerald-600 mx-auto" />
                      ) : row.generic === false ? (
                        <X className="w-5 h-5 text-slate-300 mx-auto" />
                      ) : (
                        <span className="text-xs text-slate-500 font-semibold">{row.generic}</span>
                      )}
                    </td>

                    {/* EconoMarket */}
                    <td className="py-4 px-4 text-center bg-emerald-50/40 border-x border-emerald-100">
                      <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center mx-auto shadow-2xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

