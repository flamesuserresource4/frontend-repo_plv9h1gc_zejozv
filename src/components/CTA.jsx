import { CalendarCheck, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-indigo-50/60 p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-gray-900">Get a tailored proposal</h3>
              <p className="mt-3 text-gray-600">Tell us about your goals and we’ll propose the right mix of automations, AI, and web build — usually within 24 hours.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://cal.com" target="_blank" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 text-white font-medium px-5 py-3 hover:bg-gray-800">
                  <CalendarCheck size={18} /> Book a call
                </a>
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white text-gray-900 font-medium px-5 py-3 hover:bg-gray-50">
                  <Mail size={18} /> Email us
                </a>
              </div>
            </div>
            <form className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="grid gap-4">
                <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your name" />
                <input type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="Work email" />
                <textarea rows="4" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500" placeholder="What do you want to build?" />
                <button type="submit" className="rounded-xl bg-gray-900 text-white font-medium px-5 py-3 hover:bg-gray-800">Request proposal</button>
                <p className="text-xs text-gray-500">By submitting, you agree to our privacy policy.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
