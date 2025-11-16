import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white via-indigo-50/40 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-40 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              AI Automations • Websites • Voice Agents
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              We build AI that does the work for you
            </h1>
            <p className="mt-5 text-lg text-gray-700 leading-relaxed">
              Launch automations, AI chatbots, voice receptionists, and high‑converting websites — all tailored to your operations. Faster delivery, measurable ROI, and white‑glove execution.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white font-medium px-5 py-3 shadow-sm hover:bg-gray-800 transition-colors">
                Get a proposal
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white text-gray-900 font-medium px-5 py-3 hover:bg-gray-50 transition-colors">
                Explore services
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_40%,rgba(139,92,246,0.25),transparent_60%),radial-gradient(400px_200px_at_20%_20%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(400px_200px_at_80%_20%,rgba(251,146,60,0.18),transparent_60%)]" />
    </section>
  )
}
