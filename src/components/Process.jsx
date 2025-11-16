import { CheckCircle2, ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Strategy call', desc: 'Understand goals, workflows, and success metrics.' },
  { title: 'Blueprint', desc: 'We design flows, prompts, and integrations that map to your stack.' },
  { title: 'Build', desc: 'Rapid, transparent delivery with milestones you can review.' },
  { title: 'Launch & optimize', desc: 'Ship, measure, iterate — we stay on to improve results.' },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">How it works</h2>
          <p className="mt-3 text-gray-600">Clear milestones and rapid turnaround. You always know what’s next.</p>
        </div>

        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-violet-600" />
                <div>
                  <p className="font-semibold text-gray-900">{i + 1}. {s.title}</p>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white font-medium px-5 py-3 hover:bg-gray-800">
            Get started <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
