import { Clock, MapPin, Phone } from 'lucide-react'

const points = [
  { id: 1, name: 'EcoTech Centro', address: 'Rua XV de Novembro, 1200 — Centro', city: 'Curitiba, PR', phone: '(41) 3333-0001', hours: 'Seg-Sex 8h-18h', types: ['Todos'], open: true },
  { id: 2, name: 'EcoTech Batel', address: 'Av. do Batel, 480 — Batel', city: 'Curitiba, PR', phone: '(41) 3333-0002', hours: 'Seg-Sex 9h-17h', types: ['Computadores', 'Notebooks'], open: true },
  { id: 3, name: 'Escola Municipal Tech', address: 'Rua das Flores, 78 — Boqueirão', city: 'Curitiba, PR', phone: '(41) 3333-0003', hours: 'Seg-Sex 8h-12h', types: ['Tablets', 'Smartphones'], open: true },
  { id: 4, name: 'ONG Digital Para Todos', address: 'Av. Brasil, 2500 — Rebouças', city: 'Curitiba, PR', phone: '(41) 3333-0004', hours: 'Seg-Sáb 8h-16h', types: ['Todos'], open: true },
  { id: 5, name: 'Associação Comunitária Esperança', address: 'Rua Mateus Leme, 1800 — São Francisco', city: 'Curitiba, PR', phone: '(41) 3333-0005', hours: 'Ter-Sex 10h-16h', types: ['Computadores'], open: false },
  { id: 6, name: 'EcoTech Pinhais', address: 'Av. Iraí, 600 — Centro', city: 'Pinhais, PR', phone: '(41) 3333-0006', hours: 'Seg-Sex 9h-17h', types: ['Todos'], open: true },
]

function CollectionPoints() {
  const openCount = points.filter(p => p.open).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Pontos de coleta</h1>
        <p className="mt-3 text-lg text-slate-400">
          Encontre um local para entregar equipamentos eletrônicos com segurança.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-5">
          <div className="text-sm font-semibold text-slate-400">Total</div>
          <div className="mt-1 text-3xl font-extrabold text-white">{points.length}</div>
        </div>
        <div className="card p-5">
          <div className="text-sm font-semibold text-slate-400">Abertos</div>
          <div className="mt-1 text-3xl font-extrabold text-cyan-400">{openCount}</div>
        </div>
        <div className="card p-5">
          <div className="text-sm font-semibold text-slate-400">Fechados</div>
          <div className="mt-1 text-3xl font-extrabold text-white">{points.length - openCount}</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {points.map(point => (
          <div key={point.id} className="card p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-white">{point.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{point.city}</p>
              </div>
              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                  point.open
                    ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                    : 'bg-slate-700 text-slate-400'
                }`}
              >
                {point.open ? 'Aberto' : 'Fechado'}
              </span>
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-cyan-400 shrink-0" />
                <span>{point.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{point.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="font-mono">{point.phone}</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {point.types.map(type => (
                <span key={type} className="inline-flex items-center rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-300">
                  {type}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollectionPoints
