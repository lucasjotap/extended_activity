import { useState } from 'react'
import { CheckCircle, Laptop, Monitor, Smartphone, Tablet } from 'lucide-react'

const equipmentTypes = [
  { id: 'desktop', label: 'Desktop', icon: Monitor },
  { id: 'notebook', label: 'Notebook', icon: Laptop },
  { id: 'tablet', label: 'Tablet', icon: Tablet },
  { id: 'smartphone', label: 'Smartphone', icon: Smartphone },
]

function Donate() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState('')

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-8 sm:p-10 text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-cyan-400" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">Doação registrada</h1>
          <p className="mt-3 text-slate-400">
            Obrigado por contribuir. Vamos analisar o cadastro e entraremos em contato com os próximos passos.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Doar equipamento</h1>
        <p className="mt-3 text-lg text-slate-400">
          Cadastre o equipamento para doação. Quanto mais detalhes, mais fácil direcionar para quem precisa.
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="mt-10 space-y-6">
        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Seus dados</h2>
          <p className="mt-1 text-sm text-slate-400">Usaremos estas informações apenas para contato.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="donor-name">Nome *</label>
              <input id="donor-name" type="text" required className="input mt-2" placeholder="Seu nome completo" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="donor-email">E-mail *</label>
              <input id="donor-email" type="email" required className="input mt-2" placeholder="seu@email.com" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="donor-phone">Telefone</label>
              <input id="donor-phone" type="tel" className="input mt-2" placeholder="(00) 00000-0000" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="donor-city">Cidade *</label>
              <input id="donor-city" type="text" required className="input mt-2" placeholder="Sua cidade" />
            </div>
          </div>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Equipamento</h2>
          <p className="mt-1 text-sm text-slate-400">Selecione o tipo e descreva a condição.</p>

          <div className="mt-6">
            <div className="text-sm font-semibold text-slate-200">Tipo *</div>
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {equipmentTypes.map(type => (
                <label
                  key={type.id}
                  className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    selected === type.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-slate-600 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="equipment-type"
                    value={type.id}
                    required
                    onChange={() => setSelected(type.id)}
                  />
                  <div className="flex items-center gap-2">
                    <type.icon className="h-5 w-5" />
                    <span>{type.label}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="condition">Condição *</label>
              <select id="condition" required className="input mt-2">
                <option value="">Selecione...</option>
                <option value="working">Funcionando perfeitamente</option>
                <option value="minor-issues">Pequenos defeitos</option>
                <option value="needs-repair">Precisa de reparo</option>
                <option value="parts-only">Apenas para peças</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="pickup">Entrega</label>
              <select id="pickup" className="input mt-2">
                <option value="dropoff">Vou levar a um ponto de coleta</option>
                <option value="pickup">Quero agendar retirada (se disponível)</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-slate-200" htmlFor="description">Descrição</label>
            <textarea
              id="description"
              rows={4}
              className="input mt-2"
              placeholder="Modelo, ano, especificações, acessórios inclusos..."
            />
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-slate-900 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center"
          >
            Registrar doação
          </button>
          <button
            type="reset"
            className="border border-slate-600 hover:border-slate-500 text-slate-300 px-6 py-3 rounded-lg text-sm font-semibold transition-colors duration-200"
          >
            Limpar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Donate
