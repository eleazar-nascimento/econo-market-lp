import React from 'react';
import { Star, Quote } from 'lucide-react';

export const HomemakerTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Neide Aparecida',
      role: 'Responsável pelas compras da casa',
      location: 'São Paulo, SP',
      text: 'Eu sempre levava aquele pedaço de papel amassado e me assustava quando a conta dava R$ 200 a mais. Com o EconoMarket eu bato o QR Code da nota fiscal e na hora ele me mostra o que subiu. Descobri que o azeite e o sabão em pó subiram quase 20%!',
      rating: 5,
    },
    {
      name: 'Juliana Castro',
      role: 'Mãe de 2 filhos',
      location: 'Belo Horizonte, MG',
      text: 'O botão de "Repetir Mês" é um alívio! Eu compro praticamente os mesmos itens todo mês. Em 2 minutos minha lista tá pronta com os últimos preços que paguei, então já saio de casa sabendo exatamente quanto vou gastar.',
      rating: 5,
    },
    {
      name: 'Carlos & Vanessa',
      role: 'Compras mensais no Atacarejo',
      location: 'Curitiba, PR',
      text: 'O melhor é que ele não depende de sinal de internet. Dentro do galpão do atacarejo o 4G nunca pega, mas o app roda 100% liso. Escanear a nota fiscal no final é super satisfatório!',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-market-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Quem Usa Recomenda
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            A economia que você sente direto no bolso
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Mais de 10.000 famílias já controlam a inflação de supermercado com o EconoMarket.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-market-canvas border border-slate-200 rounded-3xl p-7 shadow-2xs flex flex-col justify-between relative"
            >
              <div>
                {/* Estrelas */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <strong className="text-sm font-bold text-slate-900 block">
                    {item.name}
                  </strong>
                  <span className="text-xs text-slate-500">
                    {item.role} • {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

