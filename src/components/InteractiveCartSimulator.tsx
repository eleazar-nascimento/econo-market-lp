import React, { useState } from 'react';
import {
  TrendingDown,
  TrendingUp,
  Minus,
  Check,
  Plus,
  Trash2,
  Sparkles,
  RotateCcw,
  ShoppingCart,
  QrCode,
  DollarSign,
} from 'lucide-react';

interface SimItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  currentPrice: number;
  previousPrice: number;
  checked: boolean;
}

const INITIAL_SIM_ITEMS: SimItem[] = [
  {
    id: '1',
    name: 'Arroz Tipo 1 Camil 5kg',
    category: 'Mercearia',
    quantity: 1,
    unit: 'UN',
    currentPrice: 29.90,
    previousPrice: 32.50,
    checked: false,
  },
  {
    id: '2',
    name: 'Feijão Carioca Kicaldo 1kg',
    category: 'Mercearia',
    quantity: 2,
    unit: 'UN',
    currentPrice: 7.90,
    previousPrice: 7.50,
    checked: true,
  },
  {
    id: '3',
    name: 'Leite Integral Piracanjuba 1L',
    category: 'Laticínios',
    quantity: 8,
    unit: 'UN',
    currentPrice: 4.89,
    previousPrice: 5.49,
    checked: true,
  },
  {
    id: '4',
    name: 'Azeite de Oliva Extra Virgem 500ml',
    category: 'Mercearia',
    quantity: 1,
    unit: 'UN',
    currentPrice: 42.90,
    previousPrice: 36.90,
    checked: false,
  },
  {
    id: '5',
    name: 'Café Torrado Pilão 500g',
    category: 'Matinais',
    quantity: 2,
    unit: 'UN',
    currentPrice: 19.38,
    previousPrice: 17.90,
    checked: false,
  },
  {
    id: '6',
    name: 'Sabão em Pó Omo 1.6kg',
    category: 'Limpeza',
    quantity: 1,
    unit: 'UN',
    currentPrice: 28.90,
    previousPrice: 29.90,
    checked: true,
  },
];

export const InteractiveCartSimulator: React.FC = () => {
  const [items, setItems] = useState<SimItem[]>(INITIAL_SIM_ITEMS);

  const toggleCheck = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const next = Math.max(1, item.quantity + delta);
          return { ...item, quantity: next };
        }
        return item;
      })
    );
  };

  const resetSimulator = () => {
    setItems(INITIAL_SIM_ITEMS);
  };

  // Cálculos
  const currentTotal = items.reduce(
    (acc, i) => acc + i.currentPrice * i.quantity,
    0
  );
  const previousTotal = items.reduce(
    (acc, i) => acc + i.previousPrice * i.quantity,
    0
  );
  const difference = currentTotal - previousTotal;
  const percentChange =
    previousTotal > 0 ? (difference / previousTotal) * 100 : 0;
  const isCheaper = difference < 0;

  const checkedTotal = items
    .filter((i) => i.checked)
    .reduce((acc, i) => acc + i.currentPrice * i.quantity, 0);

  const formatBRL = (val: number) =>
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      val
    );

  return (
    <section id="simulador" className="py-20 sm:py-28 bg-white border-y border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-brand-50 border border-brand-200 text-brand-700 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-brand-600" />
            Experimente Agora
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Simulador Interativo: Veja a mágica dos preços acontecer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Dê check nos produtos, altere as quantidades e acompanhe como o EconoMarket calcula em tempo real o que baixou ou subiu de preço.
          </p>
        </div>

        {/* Container do Simulador */}
        <div className="bg-market-canvas border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-soft-md max-w-4xl mx-auto">
          
          {/* Top Bar do Simulador */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Cesta de Exemplo
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Lista de Supermercado
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={resetSimulator}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-3.5 py-2 rounded-xl text-xs font-bold shadow-2xs transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Resetar Dados
              </button>
            </div>
          </div>

          {/* Banner de Balanço Mensal */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 my-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-brand-600">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="font-bold text-slate-900 text-base">
                  Balanço Geral do Carrinho
                </span>
              </div>

              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                  isCheaper
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                    : 'bg-rose-50 border-rose-200 text-rose-700'
                }`}
              >
                {isCheaper ? (
                  <TrendingDown className="w-4 h-4" />
                ) : (
                  <TrendingUp className="w-4 h-4" />
                )}
                <span>
                  {Math.abs(Math.round(percentChange * 10) / 10)}%{' '}
                  {isCheaper ? 'mais econômico que mês passado' : 'mais caro que mês passado'}
                </span>
              </div>
            </div>

            {/* 3 Colunas de Totais */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-600 uppercase block">
                  Total Mês Atual
                </span>
                <span className="text-2xl font-bold text-slate-900 block mt-0.5">
                  {formatBRL(currentTotal)}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-600 uppercase block">
                  Total Mês Anterior
                </span>
                <span className="text-2xl font-semibold text-slate-500 block mt-0.5">
                  {formatBRL(previousTotal)}
                </span>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-600 uppercase block">
                  Diferença no Bolso
                </span>
                <span
                  className={`text-2xl font-bold block mt-0.5 ${
                    isCheaper ? 'text-emerald-700' : 'text-rose-600'
                  }`}
                >
                  {difference > 0 ? '+' : ''}
                  {formatBRL(difference)}
                </span>
              </div>
            </div>
          </div>

          {/* Lista de Produtos Interativa */}
          <div className="space-y-3">
            {items.map((item) => {
              const diff = item.currentPrice - item.previousPrice;
              const percent = Math.round((diff / item.previousPrice) * 1000) / 10;
              const itemTotal = item.quantity * item.currentPrice;

              return (
                <div
                  key={item.id}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all ${
                    item.checked
                      ? 'bg-slate-100/70 border-slate-200 opacity-70'
                      : 'bg-white border-slate-200 shadow-2xs hover:border-brand-300'
                  }`}
                >
                  {/* Lado Esquerdo: Checkbox + Nome */}
                  <div className="flex items-center gap-3.5 mb-3 sm:mb-0">
                    <button
                      onClick={() => toggleCheck(item.id)}
                      className={`w-7 h-7 rounded-xl flex items-center justify-center border transition-colors ${
                        item.checked
                          ? 'bg-brand-600 border-brand-600 text-white'
                          : 'bg-slate-50 border-slate-300 hover:border-brand-500'
                      }`}
                      aria-label={`Marcar ${item.name}`}
                    >
                      {item.checked && <Check className="w-4 h-4 stroke-[3]" />}
                    </button>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={`text-sm sm:text-base font-bold ${
                            item.checked
                              ? 'text-slate-400 line-through'
                              : 'text-slate-900'
                          }`}
                        >
                          {item.name}
                        </span>

                        {/* Badge de Preço */}
                        {percent <= -2.5 ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <TrendingDown className="w-3 h-3" />
                            {percent}%
                          </span>
                        ) : percent >= 2.5 ? (
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-full">
                            <TrendingUp className="w-3 h-3" />
                            +{percent}%
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                            <Minus className="w-3 h-3" />
                            Estável
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-slate-500 mt-0.5">
                        {formatBRL(item.currentPrice)}/{item.unit}{' '}
                        <span className="text-slate-400">
                          (era {formatBRL(item.previousPrice)})
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Lado Direito: Controles de Quantidade e Total */}
                  <div className="flex items-center justify-between sm:justify-end gap-6">
                    {/* Stepper de Quantidade */}
                    <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-white rounded-lg text-slate-700 hover:bg-slate-50 border border-slate-200 text-xs font-bold"
                        aria-label="Diminuir quantidade"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-bold text-slate-900">
                        {item.quantity} {item.unit}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white rounded-lg text-slate-700 hover:bg-slate-50 border border-slate-200 text-xs font-bold"
                        aria-label="Aumentar quantidade"
                      >
                        +
                      </button>
                    </div>

                    {/* Preço Total do Item */}
                    <div className="text-right min-w-[80px]">
                      <span
                        className={`text-base font-bold ${
                          item.checked ? 'text-slate-400' : 'text-slate-900'
                        }`}
                      >
                        {formatBRL(itemTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Rodapé do Simulador */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <ShoppingCart className="w-4 h-4 text-brand-600" />
              <span>
                Subtotal no carrinho:{' '}
                <strong className="text-slate-900 font-bold">
                  {formatBRL(checkedTotal)}
                </strong>
              </span>
            </div>

            <div className="text-xs text-slate-500 text-center sm:text-right">
              💡 No app real, esses dados são salvos 100% no seu aparelho via WatermelonDB.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

