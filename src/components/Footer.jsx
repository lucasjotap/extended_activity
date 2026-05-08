import { Recycle } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Recycle className="h-5 w-5 text-slate-900" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">EcoTech</div>
                <div className="text-sm text-slate-400">Doação de hardware e gestão de e‑lixo</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
              Projeto acadêmico com foco em inclusão digital e sustentabilidade. Conecte doadores, pontos de coleta e organizações que precisam de tecnologia.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-3">Plataforma</div>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-slate-400 hover:text-cyan-400 transition-colors" to="/doar">Doar</Link></li>
              <li><Link className="text-slate-400 hover:text-cyan-400 transition-colors" to="/receber">Receber</Link></li>
              <li><Link className="text-slate-400 hover:text-cyan-400 transition-colors" to="/inventario">Inventário</Link></li>
              <li><Link className="text-slate-400 hover:text-cyan-400 transition-colors" to="/pontos-coleta">Pontos de coleta</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white mb-3">Projeto</div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>UNINTER — Atividade Extensionista III</li>
              <li>Aluno: Lucas José Pereira</li>
              <li>RU: 4057875</li>
              <li className="pt-1">
                <span className="inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
                  ODS 10 / ODS 12
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="text-xs text-slate-500">© 2026 EcoTech — Projeto acadêmico.</div>
          <div className="text-xs text-slate-500">Feito com React + Vite + Tailwind</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
