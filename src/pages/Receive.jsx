import { useState } from 'react'
import { Building, CheckCircle, School, Users } from 'lucide-react'

const orgTypes = [
  { id: 'ong', label: 'ONG', icon: Building },
  { id: 'escola', label: 'Escola pública', icon: School },
  { id: 'associacao', label: 'Associação', icon: Users },
]

function Receive() {
  const [submitted, setSubmitted] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState('')

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-8 sm:p-10 text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-cyan-400" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">Solicitação enviada</h1>
          <p className="mt-3 text-slate-400">
            Recebemos sua solicitação. Vamos analisar e retornar em até 5 dias úteis.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Solicitar equipamento</h1>
        <p className="mt-3 text-lg text-slate-400">
          Conte para nós sua necessidade e para quem os equipamentos serão destinados.
        </p>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }} className="mt-10 space-y-6">
        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Organização</h2>
          <p className="mt-1 text-sm text-slate-400">Informações para contato e validação.</p>

          <div className="mt-6">
            <div className="text-sm font-semibold text-slate-200">Tipo *</div>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {orgTypes.map(type => (
                <label
                  key={type.id}
                  className={`cursor-pointer rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    selectedOrg === type.id
                      ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                      : 'border-slate-600 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  <input
                    className="sr-only"
                    type="radio"
                    name="org-type"
                    value={type.id}
                    required
                    onChange={() => setSelectedOrg(type.id)}
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
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-name">Nome da organização *</label>
              <input id="org-name" type="text" required className="input mt-2" placeholder="Nome completo" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-contact">Responsável *</label>
              <input id="org-contact" type="text" required className="input mt-2" placeholder="Nome do responsável" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-email">E-mail *</label>
              <input id="org-email" type="email" required className="input mt-2" placeholder="contato@org.com" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-phone">Telefone *</label>
              <input id="org-phone" type="tel" required className="input mt-2" placeholder="(00) 00000-0000" />
            </div>
          </div>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Necessidade</h2>
          <p className="mt-1 text-sm text-slate-400">Descreva o equipamento e o impacto esperado.</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="equip-need">Equipamento necessário *</label>
              <select id="equip-need" required className="input mt-2">
                <option value="">Selecione...</option>
                <option value="desktop">Computador desktop</option>
                <option value="notebook">Notebook</option>
                <option value="tablet">Tablet</option>
                <option value="smartphone">Smartphone</option>
                <option value="various">Diversos</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="quantity">Quantidade *</label>
              <input id="quantity" type="number" min="1" required className="input mt-2" placeholder="Qtd" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="people-count">Pessoas beneficiadas *</label>
              <input id="people-count" type="number" min="1" required className="input mt-2" placeholder="Nº de pessoas" />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="urgency">Urgência</label>
              <select id="urgency" className="input mt-2">
                <option value="normal">Normal</option>
                <option value="high">Alta</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold text-slate-200" htmlFor="justification">Justificativa *</label>
            <textarea
              id="justification"
              rows={4}
              required
              className="input mt-2"
              placeholder="Como os equipamentos serão utilizados e qual o impacto esperado?"
            />
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-slate-900 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200 flex items-center justify-center"
          >
            Enviar solicitação
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

export default Receive
