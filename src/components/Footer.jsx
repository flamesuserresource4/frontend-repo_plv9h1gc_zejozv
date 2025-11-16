export default function Footer() {
  return (
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flames AI Agency. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#process" className="hover:text-gray-900">Process</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}
