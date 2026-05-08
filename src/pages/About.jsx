import { BookOpen, Globe, Layers, ShieldCheck, Users } from 'lucide-react'

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Sobre o projeto</h1>
        <p className="mt-3 text-lg text-slate-400">
          A EcoTech é uma plataforma para intermediar doações de hardware e apoiar a gestão responsável de resíduos eletrônicos, desenvolvida como projeto acadêmico.
        </p>
      </div>

      <section className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 card p-6 sm:p-8">
          <h2 className="text-lg font-bold text-white">Informações acadêmicas</h2>
          <p className="mt-1 text-sm text-slate-400">Dados para identificação do trabalho.</p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-slate-700">
                {[
                  ['Aluno', 'Lucas José Pereira'],
                  ['RU', '4057875'],
                  ['Curso', 'Engenharia de Software (Bacharelado)'],
                  ['Disciplina', 'Atividade Extensionista III — Análise'],
                  ['Instituição', 'Centro Universitário Internacional UNINTER'],
                  ['Setor', 'Terceiro Setor e Educação'],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td className="py-3 pr-6 font-semibold text-slate-400 whitespace-nowrap">{label}</td>
                    <td className="py-3 text-white">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">
                <Globe className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">ODS 10 — Redução das desigualdades</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Promover inclusão digital por meio do acesso a equipamentos em comunidades vulneráveis.
                </p>
              </div>
            </div>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Layers className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white">ODS 12 — Consumo e produção responsáveis</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Reutilizar antes de descartar: reduzir e‑lixo e incentivar economia circular.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-extrabold text-white">Princípios de design universal</h2>
            <p className="mt-2 text-slate-400">Acessibilidade e usabilidade como critérios de qualidade.</p>
          </div>
          <span className="hidden sm:inline-flex items-center rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
            WCAG + boas práticas
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ['Uso equitativo', 'Interface acessível para diferentes perfis de usuários.'],
            ['Flexibilidade', 'Layout responsivo e adaptação a diferentes dispositivos.'],
            ['Simplicidade', 'Navegação clara e rótulos objetivos.'],
            ['Informação perceptível', 'Contraste e hierarquia visual consistentes.'],
            ['Tolerância ao erro', 'Campos validados e feedback claro ao usuário.'],
            ['Baixo esforço', 'Interações simples e navegação por teclado.'],
            ['Espaço apropriado', 'Espaçamento confortável e áreas de toque adequadas.'],
          ].map(([title, desc]) => (
            <div key={title} className="card p-5">
              <div className="text-sm font-bold text-white">{title}</div>
              <div className="mt-1 text-sm text-slate-400">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-extrabold text-white">Público-alvo</h2>
        <p className="mt-2 text-slate-400">Organizações e iniciativas que dependem de tecnologia para operar.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Users, title: 'ONGs', desc: 'Projetos sociais e organizações comunitárias.' },
            { icon: BookOpen, title: 'Escolas públicas', desc: 'Laboratórios e projetos educacionais.' },
            { icon: ShieldCheck, title: 'Associações', desc: 'Associações de bairro e grupos locais.' },
          ].map(item => (
            <div key={item.title} className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-cyan-400" />
              </div>
              <h3 className="mt-4 font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
