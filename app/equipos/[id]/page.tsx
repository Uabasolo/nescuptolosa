import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import { loadTeams } from '@/lib/loaders/teams';
import Image from 'next/image';
import Link from 'next/link';

interface TeamPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  const teamsData = await loadTeams();
  return teamsData.teams.map((team) => ({
    id: team.id,
  }));
}

export async function generateMetadata({ params }: TeamPageProps): Promise<Metadata> {
  const { id } = await params;
  const teamsData = await loadTeams();
  const team = teamsData.teams.find((t) => t.id === id);

  if (!team) {
    return {
      title: 'Equipo no encontrado | NESCUP 2026',
    };
  }

  return {
    title: `${team.name} | NESCUP 2026`,
    description: `Ficha del equipo ${team.name} de ${team.city} - Grupo ${team.group}`,
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { id } = await params;
  const teamsData = await loadTeams();
  const team = teamsData.teams.find((t) => t.id === id);

  if (!team) {
    notFound();
  }

  // Obtener equipos del mismo grupo
  const groupTeams = teamsData.teams.filter(t => t.group === team.group && t.id !== team.id);

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Breadcrumb */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
              <span>/</span>
              <Link href="/equipos" className="hover:text-white transition-colors">Equipos</Link>
              <span>/</span>
              <span className="text-white">{team.name}</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Logo */}
            <div className="w-32 h-32 md:w-40 md:h-40 relative bg-white rounded-2xl shadow-2xl p-4 flex-shrink-0">
              <Image 
                src={team.logo} 
                alt={team.name}
                fill
                sizes="160px"
                className="object-contain p-2"
              />
            </div>

            {/* Info Principal */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow"
                  style={{ backgroundColor: team.group === 'A' ? '#1e40af' : team.group === 'B' ? '#d97706' : '#059669' }}
                >
                  {team.group}
                </div>
                <span className="text-white font-semibold">Grupo {team.group}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                {team.name}
              </h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-blue-100 mb-6">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">{team.city}, {team.region}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                  </svg>
                  <span className="font-medium">{team.club}</span>
                </div>
              </div>

              {/* Colores del equipo */}
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <span className="text-blue-100 text-sm">Equipación:</span>
                <div className="flex space-x-2">
                  {/* Camiseta manga corta */}
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M16 3L20 6V11L18 10V19C18 19.5 17.5 20 17 20H7C6.5 20 6 19.5 6 19V10L4 11V6L8 3H10L12 5L14 3H16Z" fill={team.colors.primary} stroke="#ffffff" strokeWidth="0.75"/>
                  </svg>
                  {/* Pantalón corto */}
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 8H17L18 12V16C18 16.5 17.5 17 17 17H13.5L13 13H11L10.5 17H7C6.5 17 6 16.5 6 16V12L7 8Z" fill={team.colors.secondary} stroke="#ffffff" strokeWidth="0.75"/>
                  </svg>
                  {/* Medias */}
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M5.5 3 L7.5 3 L7.5 15 L9.5 15 L9.5 17 L5.5 17 Z" fill={team.colors.secondary} stroke="#ffffff" strokeWidth="0.75" strokeLinejoin="miter"/>
                    <path d="M15.5 3 L17.5 3 L17.5 15 L19.5 15 L19.5 17 L15.5 17 Z" fill={team.colors.secondary} stroke="#ffffff" strokeWidth="0.75" strokeLinejoin="miter"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-xl">
              <div className="text-2xl font-bold text-gray-900">{team.stats.played}</div>
              <div className="text-xs text-gray-600 mt-1">Jugados</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="text-2xl font-bold text-green-700">{team.stats.won}</div>
              <div className="text-xs text-gray-600 mt-1">Ganados</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl">
              <div className="text-2xl font-bold text-yellow-700">{team.stats.drawn}</div>
              <div className="text-xs text-gray-600 mt-1">Empatados</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl">
              <div className="text-2xl font-bold text-red-700">{team.stats.lost}</div>
              <div className="text-xs text-gray-600 mt-1">Perdidos</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="text-2xl font-bold text-blue-700">{team.stats.goalsFor}</div>
              <div className="text-xs text-gray-600 mt-1">Goles a favor</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="text-2xl font-bold text-orange-700">{team.stats.goalsAgainst}</div>
              <div className="text-xs text-gray-600 mt-1">Goles en contra</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="text-2xl font-bold text-purple-700">{team.stats.points}</div>
              <div className="text-xs text-gray-600 mt-1">Puntos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Otros equipos del grupo */}
      {groupTeams.length > 0 && (
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Otros equipos del Grupo {team.group}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {groupTeams.map((t) => (
                <Link 
                  key={t.id} 
                  href={`/equipos/${t.id}`}
                  className="flex items-center space-x-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all border border-gray-100 hover:border-blue-300"
                >
                  <div className="w-16 h-16 relative bg-gray-50 rounded-lg flex-shrink-0">
                    <Image 
                      src={t.logo} 
                      alt={t.name}
                      fill
                      sizes="64px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 truncate">{t.name}</h3>
                    <p className="text-sm text-gray-600">{t.city}</p>
                  </div>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Botón volver */}
      <section className="py-8 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Link 
            href="/equipos"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-xl transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Volver a todos los equipos</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
