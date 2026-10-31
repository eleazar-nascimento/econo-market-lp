import React from 'react';
import {
  RotateCcw,
  Smartphone,
  TrendingUp,
  ShieldCheck,
  History,
  Lock,
} from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      icon: <RotateCcw className="w-6 h-6 text-brand-600" />,
      title: 'Repita o Mês com 1 Clique',
      description:
        'Não perca tempo anotando tudo de novo. O app replica os itens essenciais da sua casa (arroz, feijão, leite, produtos de limpeza) com seus últimos preços já preenchidos.',
      badge: 'Economiza 20 min',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-brand-600" />,
      title: 'Ergonomia de "Uma Mão Só"',
      description:
        'Carrinho pesado em uma mão, celular na outra. Todos os checkboxes são grandes (44px+) e o totalizador fica sempre fixo na zona de alcance do polegar.',
      badge: 'Zero tropeços no mercado',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-rose-600" />,
      title: 'Detecção da Sua Inflação Real',
      description:
        'Esqueça índices abstratos dos jornais. O app alerta exatamente quais marcas subiram de preço na gôndola para você decidir se vale a pena substituir no ato.',
      badge: 'Alerta Vermelho/Verde',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: '100% Offline com WatermelonDB',
      description:
        'Supermercados fechados costumam ter péssimo sinal de 4G/5G. O EconoMarket grava tudo instantaneamente no banco de dados local do seu aparelho.',
      badge: 'Funciona no subsolo',
    },
    {
      icon: <History className="w-6 h-6 text-brand-600" />,
      title: 'Histórico Mensal Completo',
      description:
        'Compare o gasto de Novembro com Outubro, Setembro e Agosto. Saiba onde você mais economizou e qual mercado tem o melhor preço para cada categoria.',
      badge: 'Controle Total',
    },
    {
      icon: <Lock className="w-6 h-6 text-slate-700" />,
      title: 'Privacidade e Sem Anúncios Invasivos',
      description:
        'Seus hábitos de consumo pertencem a você. O app funciona direto da instalação sem exigir cadastro obrigatório nem vender suas notas fiscais.',
      badge: 'Seus dados protegidos',
    },
  ];

  return (
    <section id="beneficios" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Pensado na Vida Real
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            Feito para quem realmente faz as compras da casa
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Cada detalhe do EconoMarket foi projetado para resolver os atritos do dia a dia no supermercado.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-market-canvas border border-slate-200 hover:border-brand-300 rounded-3xl p-7 shadow-2xs hover:shadow-soft-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

