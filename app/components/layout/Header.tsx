import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="w-full max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image src="/images/teams/TolosaCF.jpg" alt="Tolosa CF" fill sizes="48px" className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">NESCUP</h1>
              <p className="text-xs text-blue-700">Tolosa 2026</p>
            </div>
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/torneo" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                El Torneo
              </Link>
            </li>
            <li>
              <Link href="/equipos" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Equipos
              </Link>
            </li>
            <li>
              <Link href="/calendario" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Calendario
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-gray-700 hover:text-blue-700 transition-colors font-medium">
                Contacto
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/inscripcion" 
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-800 hover:to-blue-950 transition-all shadow-lg hover:shadow-xl"
            >
              Inscríbete
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
