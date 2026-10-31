import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'O aplicativo realmente funciona sem conexão com a internet?',
      answer:
        'Sim, 100%! Sabemos que o sinal 4G/5G costuma falhar ou sumir dentro dos galpões de supermercados e atacarejos. O EconoMarket foi construído sobre uma arquitetura estritamente Offline-First (via WatermelonDB). Todas as suas listas, histórico e cálculos de preços rodam direto no processador do seu aparelho.',
    },
    {
      question: 'Como funciona o escaneamento por QR Code da nota fiscal?',
      answer:
        'Quase todo cupom emitido no Brasil hoje é uma NFC-e (Nota Fiscal de Consumidor Eletrônica) ou CF-e SAT, que obrigatoriamente traz um QR Code impresso no rodapé. Quando você aponta a câmera, o app consulta o banco de dados oficial da SEFAZ estadual e importa todos os itens, marcas, quantidades e centavos com 100% de exatidão em menos de 2 segundos.',
    },
    {
      question: 'E se o cupom estiver amassado, apagado ou não tiver QR Code?',
      answer:
        'Para esses casos, o app oferece o modo alternativo "Foto com IA": basta tirar uma foto do cupom físico ou recibo comum. O modelo multimodal do Gemini Flash Vision analisa a imagem, reconhece os nomes e preços e transforma a foto em dados estruturados na Tela de Conferência.',
    },
    {
      question: 'O EconoMarket é gratuito?',
      answer:
        'Sim! O aplicativo é gratuito para download e uso pessoal diário, sem pegadinhas nem cobranças ocultas na hora de ir ao supermercado.',
    },
    {
      question: 'Meus dados e hábitos de compras estão seguros?',
      answer:
        'Totalmente. No modelo offline-first, suas listas, preços pagos e históricos residem única e exclusivamente na memória interna do seu smartphone. Você não precisa nem criar conta com senha para começar a usar.',
    },
    {
      question: 'Como funciona o comparativo mês a mês?',
      answer:
        'O motor inteligente do app compara o preço pago no produto hoje com a última compra que você realizou no mês anterior. Ele categoriza instantaneamente com badges visuais: Verde para itens que ficaram mais baratos, Vermelho para produtos que sofreram inflação e Cinza para itens estáveis.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-market-canvas border-t border-market-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-4">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Tudo o que você precisa saber sobre o EconoMarket e como economizar no supermercado.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left py-5 px-6 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 hover:text-brand-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-brand-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

