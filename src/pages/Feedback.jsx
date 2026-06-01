import { useState } from 'react'
import { Star, CheckCircle, MessageSquare } from 'lucide-react'
import { addFeedback, getFeedback } from '../utils/storage'

function StarRating({ value, onChange }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="focus:outline-none"
        >
          <Star
            className={`h-6 w-6 transition ${
              star <= value ? 'fill-amber-400 text-amber-400' : 'text-slate-600 hover:text-slate-500'
            }`}
          />
        </button>
      ))}
    </div>
  )
}

function Feedback() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    organization: '',
    type: '',
    rating: 0,
    comment: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.rating === 0) {
      alert('Por favor, selecione uma nota.')
      return
    }
    addFeedback(formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card p-8 sm:p-10 text-center">
          <div className="mx-auto w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
            <CheckCircle className="h-7 w-7 text-cyan-400" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">Obrigado pelo feedback!</h1>
          <p className="mt-3 text-slate-400">
            Sua avaliação nos ajuda a melhorar a plataforma.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 px-3 py-1 text-xs font-semibold mb-4">
          <MessageSquare className="h-3 w-3" />
          Validação com usuários
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight gradient-text">Feedback</h1>
        <p className="mt-3 text-lg text-slate-400">
          Sua opinião é importante para melhorarmos a plataforma EcoTech.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Sua organização</h2>
          
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-name">Nome da organização *</label>
              <input 
                id="org-name" 
                type="text" 
                required 
                className="input mt-2" 
                placeholder="Ex: ONG Ação Social Curitiba"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-200" htmlFor="org-type">Tipo de organização *</label>
              <select 
                id="org-type" 
                required 
                className="input mt-2"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
              >
                <option value="">Selecione...</option>
                <option value="ONG">ONG</option>
                <option value="Escola">Escola pública</option>
                <option value="Associação">Associação comunitária</option>
              </select>
            </div>
          </div>
        </section>

        <section className="card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Avaliação</h2>
          
          <div className="mt-6">
            <label className="text-sm font-semibold text-slate-200">Nota geral *</label>
            <div className="mt-3">
              <StarRating 
                value={formData.rating} 
                onChange={(val) => setFormData({ ...formData, rating: val })} 
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-semibold text-slate-200" htmlFor="comment">Comentário</label>
            <textarea
              id="comment"
              rows={4}
              className="input mt-2"
              placeholder="O que você achou da plataforma? Sugestões de melhoria?"
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            />
          </div>
        </section>

        <button
          type="submit"
          className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-slate-900 px-6 py-3 rounded-lg text-sm font-bold transition-all duration-200"
        >
          Enviar avaliação
        </button>
      </form>
    </div>
  )
}

export default Feedback
