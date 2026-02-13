import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { loadTeams } from '@/lib/loaders/teams';
import Image from 'next/image';
import Link from 'next/link';

export default async function EquiposPage() {
  const teamsData = await loadTeams();
  const teams = teamsData.teams;
  
  // Organizar equipos por grupos
  const grupoA = teams.filter(team => team.group === 'A');
  const grupoB = teams.filter(team => team.group === 'B');
  const grupoC = teams.filter(team => team.group === 'C');

  return (
    <>
      <Header />
      
      {/* Hero Section - Compacto */}
      <section className="relative pt-24 pb-8 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Equipos Participantes
            </h1>
            <p className="text-base sm:text-lg text-blue-100">
              12 equipos en 3 grupos - NESCUP 2026
            </p>
          </div>
        </div>
      </section>

      {/* Grupos Section - Compacto */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Grupo A */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-full flex items-center justify-center shadow">
                  <span className="text-xl font-bold text-white">A</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Grupo A</h2>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{grupoA.map((team) => (
                <Link key={team.id} href={`/equipos/${team.id}`} className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden border border-gray-100 hover:border-blue-300">
                  <div className="aspect-[3/2] relative bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <Image 
                      src={team.logo} 
                      alt={team.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{team.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{team.city}</span>
                      </div>
                      <div className="flex items-center space-x-0.5">{/* Camiseta */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M16 3L20 6V11L18 10V19C18 19.5 17.5 20 17 20H7C6.5 20 6 19.5 6 19V10L4 11V6L8 3H10L12 5L14 3H16Z" fill={team.colors.primary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Pantalón */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M7 8H17L18 12V16C18 16.5 17.5 17 17 17H13.5L13 13H11L10.5 17H7C6.5 17 6 16.5 6 16V12L7 8Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Medias */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M5.5 3 L7.5 3 L7.5 15 L9.5 15 L9.5 17 L5.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/><path d="M15.5 3 L17.5 3 L17.5 15 L19.5 15 L19.5 17 L15.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/></svg></div>
                    </div>
                  </div>
                </Link>))}</div>
          </div>

          {/* Grupo B */}
          <div className="mb-8 sm:mb-12">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow">
                  <span className="text-xl font-bold text-white">B</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Grupo B</h2>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{grupoB.map((team) => (
                <Link key={team.id} href={`/equipos/${team.id}`} className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden border border-gray-100 hover:border-blue-300">
                  <div className="aspect-[3/2] relative bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <Image 
                      src={team.logo} 
                      alt={team.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{team.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{team.city}</span>
                      </div>
                      <div className="flex items-center space-x-0.5">{/* Camiseta */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M16 3L20 6V11L18 10V19C18 19.5 17.5 20 17 20H7C6.5 20 6 19.5 6 19V10L4 11V6L8 3H10L12 5L14 3H16Z" fill={team.colors.primary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Pantalón */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M7 8H17L18 12V16C18 16.5 17.5 17 17 17H13.5L13 13H11L10.5 17H7C6.5 17 6 16.5 6 16V12L7 8Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Medias */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M5.5 3 L7.5 3 L7.5 15 L9.5 15 L9.5 17 L5.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/><path d="M15.5 3 L17.5 3 L17.5 15 L19.5 15 L19.5 17 L15.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/></svg></div>
                    </div>
                  </div>
                </Link>))}</div>
          </div>

          {/* Grupo C */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center shadow">
                  <span className="text-xl font-bold text-white">C</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Grupo C</h2>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">{grupoC.map((team) => (
                <Link key={team.id} href={`/equipos/${team.id}`} className="bg-white rounded-xl shadow hover:shadow-lg transition-all overflow-hidden border border-gray-100 hover:border-blue-300">
                  <div className="aspect-[3/2] relative bg-gradient-to-br from-gray-50 to-gray-100 p-3">
                    <Image 
                      src={team.logo} 
                      alt={team.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-bold text-gray-900 mb-1">{team.name}</h3>
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{team.city}</span>
                      </div>
                      <div className="flex items-center space-x-0.5">{/* Camiseta */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M16 3L20 6V11L18 10V19C18 19.5 17.5 20 17 20H7C6.5 20 6 19.5 6 19V10L4 11V6L8 3H10L12 5L14 3H16Z" fill={team.colors.primary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Pantalón */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M7 8H17L18 12V16C18 16.5 17.5 17 17 17H13.5L13 13H11L10.5 17H7C6.5 17 6 16.5 6 16V12L7 8Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6"/></svg>{/* Medias */}<svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M5.5 3 L7.5 3 L7.5 15 L9.5 15 L9.5 17 L5.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/><path d="M15.5 3 L17.5 3 L17.5 15 L19.5 15 L19.5 17 L15.5 17 Z" fill={team.colors.secondary} stroke="#374151" strokeWidth="0.6" strokeLinejoin="miter"/></svg></div>
                    </div>
                  </div>
                </Link>))}</div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Equipos Participantes | NESCUP 2026',
  description: 'Conoce todos los equipos que participarán en la NESCUP 2026 en Tolosa',
};
















