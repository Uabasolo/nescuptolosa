import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { loadTournament } from '@/lib/loaders/tournament';

export default async function ContactoPage() {
  const tournament = await loadTournament();
  const { contact, location, organizer } = tournament;

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000')] bg-cover bg-center opacity-10"></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Contacto
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              ¿Tienes alguna duda? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Información de contacto */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  ¿Necesitas más información?
                </h2>
                <p className="text-gray-600">
                  Contacta con nosotros por cualquiera de estos medios
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-blue-600 hover:text-blue-700 hover:underline break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Teléfono / WhatsApp */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Teléfono / WhatsApp</h3>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-blue-600 hover:text-blue-700 hover:underline block mb-1"
                    >
                      {contact.phone}
                    </a>
                    <p className="text-sm text-gray-600">{contact.coordinator}</p>
                    <p className="text-sm text-gray-500">{organizer.role}</p>
                  </div>
                </div>
              </div>

              {/* Ubicación */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">{location.address}</p>
                    <p className="text-sm text-gray-500 mt-1">{location.city}, {location.region}</p>
                  </div>
                </div>
              </div>

              {/* Redes Sociales */}
              {contact.social.instagram && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
                      <a 
                        href={`https://instagram.com/${contact.social.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        @{contact.social.instagram}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mapa */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="h-[500px]">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2908.5!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1ses!2ses!4v1234567890`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="p-6 bg-gray-50">
                  <h3 className="font-semibold text-gray-900 mb-3">Cómo llegar</h3>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition-all shadow-lg hover:shadow-xl w-full justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <span>Ver en Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organizado por */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-12 text-center border border-blue-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-700 rounded-full mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Organizado por
            </h2>
            <p className="text-xl text-blue-900 font-semibold mb-1">
              {organizer.fullName}
            </p>
            <p className="text-blue-700">
              {organizer.region}, País Vasco
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Contacto | NESCUP 2026',
  description: 'Ponte en contacto con la organización de la NESCUP 2026',
};
