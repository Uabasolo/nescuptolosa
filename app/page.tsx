import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { loadTournament } from '@/lib/loaders/tournament';
import { getTeamsByGroups } from '@/lib/loaders/teams';

export default async function Home() {
  const tournament = await loadTournament();
  const teamsByGroup = await getTeamsByGroups();
  
  // Formatear fecha
  const eventDate = new Date(tournament.dates.start);
  const formattedDate = eventDate.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  const shortDate = eventDate.toLocaleDateString('es-ES', { 
    day: 'numeric', 
    month: 'short',
    year: 'numeric'
  });
  
  // Obtener hora de inicio de la primera fase
  const startTime = tournament.phases[0]?.startTime || '09:00';
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/70 to-transparent"></div>
        </div>
        
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 relative z-10">
          <div className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold border border-white/20">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              <span>{shortDate} • {tournament.location.city}, {tournament.location.region}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              NESCUP
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 mt-2">
                {tournament.year}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-blue-100 max-w-4xl mx-auto font-light leading-relaxed">
              {tournament.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8">
              <Link 
                href="/equipos" 
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-blue-950 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:from-amber-400 hover:to-amber-500 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transform text-center"
              >
                Ver Equipos
              </Link>
              <Link 
                href="/calendario" 
                className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all shadow-xl text-center"
              >
                Calendario
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-12 sm:pt-16 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">{tournament.stats.maxTeams}</div>
                <div className="text-xs sm:text-sm text-blue-100 uppercase tracking-wider">Equipos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">{tournament.format.groups}</div>
                <div className="text-xs sm:text-sm text-blue-100 uppercase tracking-wider">Grupos</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">{tournament.stats.matchDays}</div>
                <div className="text-xs sm:text-sm text-blue-100 uppercase tracking-wider">Día</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all">
                <div className="text-4xl sm:text-5xl font-bold text-amber-400 mb-2">{tournament.registration.fee}€</div>
                <div className="text-xs sm:text-sm text-blue-100 uppercase tracking-wider">Inscripción</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Info destacada */}
      <section className="py-3 sm:py-4 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-blue-950 font-bold text-sm sm:text-base">{formattedDate}</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-950 font-bold text-sm sm:text-base">Inicio: {startTime}h</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-blue-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-blue-950 font-bold text-sm sm:text-base">{tournament.location.city}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Grupos Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Los Grupos</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {tournament.stats.maxTeams} equipos competirán en {tournament.format.groups} grupos de alto nivel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(teamsByGroup).map(([groupId, teams], idx) => {
              const colors = [
                { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-600' },
                { border: 'border-amber-500', bg: 'bg-amber-100', text: 'text-amber-600' },
                { border: 'border-blue-500', bg: 'bg-blue-100', text: 'text-blue-600' }
              ];
              const color = colors[idx % colors.length];
              
              return (
                <div key={groupId} className={`bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border-t-4 ${color.border}`}>
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${color.bg} rounded-full mb-4`}>
                      <span className={`text-3xl font-bold ${color.text}`}>{groupId}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Grupo {groupId}</h3>
                  </div>
                  <ul className="space-y-3">
                    {teams.map((team) => (
                      <li key={team.id} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all">
                        <div className="w-8 h-8 relative flex-shrink-0">
                          <Image src={team.logo} alt={team.shortName} fill sizes="32px" className="object-contain" />
                        </div>
                        <span className="text-gray-700 font-medium">{team.shortName}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/equipos" 
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
            >
              <span>Ver todos los equipos</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Características del Torneo */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">¿Qué incluye?</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Inscripción gratuita con todo incluido
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Camiseta Oficial</h3>
                <p className="text-gray-600">Equipación exclusiva del torneo para todas las jugadoras</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Seguro Incluido</h3>
                <p className="text-gray-600">Cobertura completa durante todo el evento</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comida y Bebida</h3>
                <p className="text-gray-600">Avituallamiento para jugadoras y cuerpo técnico</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Diploma</h3>
                <p className="text-gray-600">Certificado de participación para cada jugadora</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Balón de Recuerdo</h3>
                <p className="text-gray-600">Balón oficial del torneo para cada equipo</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-gray-50 transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Premios</h3>
                <p className="text-gray-600">Trofeos y reconocimientos para los mejores equipos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline del día */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Programa del Día</h2>
            <p className="text-lg sm:text-xl text-gray-600">
              {formattedDate} - Todo en un solo día
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-amber-500 to-blue-700"></div>

              {/* Timeline items */}
              <div className="space-y-8 sm:space-y-12">
                {tournament.phases.map((phase, index) => {
                  const colors = [
                    'from-blue-700 to-blue-900',
                    'from-amber-500 to-amber-600',
                    'from-blue-500 to-blue-600'
                  ];
                  const color = colors[index % colors.length];
                  
                  return (
                    <div key={phase.name} className="relative flex items-start space-x-4 sm:space-x-6">
                      <div className={`flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${color} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-xl z-10`}>
                        {phase.startTime}
                      </div>
                      <div className="flex-1 bg-white p-4 sm:p-6 rounded-2xl shadow-lg">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{phase.name}</h3>
                        <p className="text-sm sm:text-base text-gray-600">{phase.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Cómo Llegar</h2>
                <p className="text-lg sm:text-xl text-gray-600">
                  El torneo se celebrará en las instalaciones deportivas de {tournament.location.city}, {tournament.location.region}.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600">{tournament.location.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Parking Gratuito</p>
                      <p className="text-gray-600">Amplio aparcamiento disponible en las instalaciones</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Instalaciones</p>
                      <p className="text-gray-600">Campos de césped artificial, vestuarios, cafetería</p>
                    </div>
                  </div>
                </div>

                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${tournament.location.coordinates.lat},${tournament.location.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Ver en Google Maps</span>
                </a>
              </div>

              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.5!2d${tournament.location.coordinates.lng}!3d${tournament.location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2ses!4v1234567890`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              ¿Lista para participar?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100">
              Únete a nosotros el {shortDate} y forma parte de esta experiencia única
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link 
                href="/contacto" 
                className="bg-amber-500 text-blue-950 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-amber-400 transition-all shadow-2xl hover:shadow-amber-500/50 hover:scale-105 transform"
              >
                Contactar
              </Link>
              <Link 
                href="/calendario" 
                className="bg-white/10 backdrop-blur-sm text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all shadow-xl"
              >
                Ver Calendario
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
