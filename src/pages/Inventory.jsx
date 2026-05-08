import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'

const items = [
  { id: 1, name: 'Dell Optiplex 7080', type: 'Desktop', condition: 'Funcionando', status: 'available', date: '2025-01-15' },
  { id: 2, name: 'Lenovo ThinkPad T480', type: 'Notebook', condition: 'Funcionando', status: 'available', date: '2025-01-20' },
  { id: 3, name: 'Samsung Galaxy Tab A7', type: 'Tablet', condition: 'Pequenos defeitos', status: 'reserved', date: '2025-02-01' },
  { id: 4, name: 'HP ProBook 450 G7', type: 'Notebook', condition: 'Funcionando', status: 'donated', date: '2025-02-10' },
  { id: 5, name: 'iMac 2019 21"', type: 'Desktop', condition: 'Funcionando', status: 'available', date: '2025-02-15' },
  { id: 6, name: 'Motorola Moto G52', type: 'Smartphone', condition: 'Precisa reparo', status: 'maintenance', date: '2025-02-20' },
  { id: 7, name: 'Dell Monitor 24"', type: 'Monitor', condition: 'Funcionando', status: 'available', date: '2025-03-01' },
  { id: 8, name: 'Acer Aspire 5', type: 'Notebook', condition: 'Pequenos defeitos', status: 'reserved', date: '2025-03-05' },
  { id: 9, name: 'iPad 9ª geração', type: 'Tablet', condition: 'Funcionando', status: 'donated', date: '2025-03-10' },
  { id: 10, name: 'HP Desktop Pro G2', type: 'Desktop', condition: 'Funcionando', status: 'available', date: '2025-03-12' },
  { id: 11, name: 'Samsung Galaxy A14', type: 'Smartphone', condition: 'Funcionando', status: 'available', date: '2025-03-15' },
  { id: 12, name: 'Lenovo IdeaPad 3', type: 'Notebook', condition: 'Precisa reparo', status: 'maintenance', date: '2025-03-18' },
]

const statusConfig = {
  available: { label: 'Disponível', pill: 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400' },
  reserved: { label: 'Reservado', pill: 'bg-purple-500/10 border border-purple-500/20 text-purple-400' },
  donated: { label: 'Doado', pill: 'bg-blue-500/10 border border-blue-500/20 text-blue-400' },
  maintenance: { label: 'Manutenção', pill: 'bg-slate-700 text-slate-400' },
}

function Inventory() {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    return items.filter(item => {
      const matchSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.type.toLowerCase().includes(search.toLowerCase())
      const matchFilter = filter === 'all' || item.status === filter
      return matchSearch && matchFilter
    })
  }, [filter, search])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Inventário</h1>
        <p className="mt-3 text-lg text-slate-400">Equipamentos cadastrados e status de disponibilidade.</p>
      </div>

      <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(statusConfig).map(([key, config]) => {
          const count = items.filter(i => i.status === key).length
          return (
            <div key={key} className="card p-5">
              <div className="text-sm font-semibold text-slate-400">{config.label}</div>
              <div className="mt-1 text-3xl font-extrabold text-white">{count}</div>
            </div>
          )
        })}
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
          <input
            type="text"
            placeholder="Buscar por nome ou tipo..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-9"
            aria-label="Buscar equipamentos"
          />
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="input w-full sm:w-56"
          aria-label="Filtrar por status"
        >
          <option value="all">Todos</option>
          <option value="available">Disponível</option>
          <option value="reserved">Reservado</option>
          <option value="donated">Doado</option>
          <option value="maintenance">Manutenção</option>
        </select>
      </div>

      <div className="mt-6 card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-800 border-b border-slate-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase">#</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Equipamento</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase hidden sm:table-cell">Tipo</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase hidden md:table-cell">Condição</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-400 uppercase hidden lg:table-cell">Data</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-700">
              {filtered.map(item => (
                <tr key={item.id} className="hover:bg-slate-800/50">
                  <td className="px-4 py-3 font-mono text-slate-400">{item.id}</td>
                  <td className="px-4 py-3 font-semibold text-white">{item.name}</td>
                  <td className="px-4 py-3 text-slate-300 hidden sm:table-cell">{item.type}</td>
                  <td className="px-4 py-3 text-slate-300 hidden md:table-cell">{item.condition}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusConfig[item.status].pill}`}>
                      {statusConfig[item.status].label}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-slate-400 hidden lg:table-cell">{item.date}</td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-12 text-center text-slate-500">
                    Nenhum equipamento encontrado.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-400">
        Mostrando <span className="font-semibold text-white">{filtered.length}</span> de <span className="font-semibold text-white">{items.length}</span> equipamentos
      </p>
    </div>
  )
}

export default Inventory
