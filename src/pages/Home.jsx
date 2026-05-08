import { Link } from 'react-router-dom'
import { ArrowRight, HandHeart, MapPin, Recycle, Search, ShieldCheck, Star, Truck, Users } from 'lucide-react'

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 pt-20 pb-32 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-4 py-2 text-sm font-semibold">
              <Recycle className="h-4 w-4" />
              Inclusão digital • Sustentabilidade • Economia circular
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white mb-6">
              Doe hardware, <span className="gradient-text">reduza o e‑lixo</span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              Conectamos doadores, pontos de coleta e organizações para reaproveitar equipamentos eletrônicos com responsabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <Link
                to="/doar"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-all duration-200 flex items-center justify-center"
              >
                Registrar doação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/receber"
                className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
              >
                Solicitar equipamento
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-8 gap-y-5 text-sm text-slate-500 mb-16">
              <div className="flex items-center">
                <span>Sem cadastro complicado</span>
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5" aria-label="Avaliação">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <span>Projetado para clareza</span>
              </div>
              <div className="hidden sm:block text-slate-700">•</div>
              <div className="flex items-center">
                <span>Destino responsável</span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-4xl mx-auto mt-2">
              {[
                { value: '150+', label: 'Doações registradas' },
                { value: '45', label: 'Organizações atendidas' },
                { value: '12', label: 'Pontos de coleta' },
                { value: '500+', label: 'Pessoas impactadas' },
              ].map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 sm:py-28 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Plataforma simples, <span className="gradient-text">impacto real</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              O projeto organiza doações e solicitações com foco em rastreabilidade e responsabilidade ambiental.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: HandHeart, title: 'Doação guiada', desc: 'Formulário claro com campos essenciais.' },
              { icon: Users, title: 'Foco no terceiro setor', desc: 'ONGs, escolas e associações como público-alvo.' },
              { icon: MapPin, title: 'Pontos de coleta', desc: 'Lista de locais com horários e tipos aceitos.' },
              { icon: Search, title: 'Inventário visível', desc: 'Tabela com status (disponível, reservado, doado).' },
              { icon: ShieldCheck, title: 'Acessibilidade', desc: 'Rótulos, foco visível e navegação por teclado.' },
              { icon: Recycle, title: 'Sustentabilidade', desc: 'Redução do descarte e incentivo à reutilização.' },
            ].map(item => (
              <div key={item.title} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-700 glow-cyan">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Pronto para fazer parte da rede?
                </h2>
                <p className="mt-3 text-slate-400">
                  Registre uma doação ou solicite equipamentos para sua organização. O processo é rápido e transparente.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/doar"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-slate-900 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center"
                >
                  Doar agora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/pontos-coleta"
                  className="border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
                >
                  Ver pontos de coleta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
