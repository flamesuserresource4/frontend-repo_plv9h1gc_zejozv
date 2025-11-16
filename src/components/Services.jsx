import { Bot, Globe, PhoneCall, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Conversion-focused websites',
    desc: 'Design and development that looks premium and drives leads. Fast, SEO-ready, and easy to edit.'
  },
  {
    icon: Bot,
    title: 'AI website chatbots',
    desc: 'On-brand chat that answers questions, books meetings, and triages leads — trained on your content.'
  },
  {
    icon: PhoneCall,
    title: 'AI receptionist & lead caller',
    desc: 'Voice agents that answer, qualify, and follow up automatically with natural, human-like speech.'
  },
  {
    icon: Sparkles,
    title: 'Workflow automations',
    desc: 'Connect your CRM, calendar, and forms so data moves instantly and tasks run themselves.'
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What we build</h2>
          <p className="mt-3 text-gray-600">Launch quickly with a done-for-you team that handles strategy, build, and integration.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
