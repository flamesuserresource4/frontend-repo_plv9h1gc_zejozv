import { useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'How it Works' },
    { href: '/test', label: 'System Test' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="bg-white/60 backdrop-blur-md border border-white/40 shadow-sm rounded-2xl px-4 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 grid place-items-center text-white">
              <Sparkles size={20} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">Flames AI Agency</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center justify-center rounded-xl bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-colors">
              Contact
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200">
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" onClick={() => setOpen(false)}>
          <div className="absolute top-4 right-4 left-4 rounded-2xl bg-white p-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <span className="font-semibold">Menu</span>
              <button onClick={() => setOpen(false)} className="h-9 w-9 grid place-items-center rounded-lg border border-gray-200">
                <X size={18} />
              </button>
            </div>
            <div className="mt-3 divide-y divide-gray-100">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block py-3 text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block py-3 text-gray-900 font-medium" onClick={() => setOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
