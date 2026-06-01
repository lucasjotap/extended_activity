import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Recycle, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Início' },
  { to: '/doar', label: 'Doar' },
  { to: '/receber', label: 'Receber' },
  { to: '/pontos-coleta', label: 'Pontos de coleta' },
  { to: '/inventario', label: 'Inventário' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/sobre', label: 'Sobre' },
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" aria-label="Página inicial">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Recycle className="h-5 w-5 text-slate-900" />
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold text-white">EcoTech</div>
              <div className="text-xs text-slate-400">Doação de hardware</div>
            </div>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Navegação principal"
          >
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden border border-slate-600 hover:border-slate-500 text-slate-300 px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
            onClick={() => setOpen(v => !v)}
            aria-expanded={open}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1" aria-label="Menu móvel">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-cyan-500/10 text-cyan-400'
                      : 'text-slate-300 hover:bg-slate-800'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
