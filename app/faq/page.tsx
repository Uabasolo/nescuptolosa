import { Metadata } from 'next';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { loadFAQs } from '@/lib/loaders/faqs';
import FAQAccordion from '../components/ui/FAQAccordion';

// Función para obtener el icono correcto según la categoría
const getCategoryIcon = (icon: string) => {
  const icons: Record<string, JSX.Element> = {
    info: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    ),
    clipboard: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    ),
    trophy: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
    map: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    calendar: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
    award: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    ),
    mail: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    ),
  };
  
  return icons[icon] || icons.info;
};

export default async function FAQPage() {
  const faqsData = await loadFAQs();
  
  // Agrupar FAQs por categoría
  const faqsByCategory = Object.entries(faqsData.categories)
    .sort(([, a], [, b]) => a.order - b.order)
    .map(([catId, category]) => ({
      categoryId: catId,
      category,
      faqs: faqsData.faqs
        .filter(faq => faq.category === catId)
        .sort((a, b) => a.order - b.order)
    }));

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Preguntas Frecuentes
            </h1>
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Encuentra respuestas a las dudas más comunes sobre la NESCUP 2026
            </p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          {faqsByCategory.map(({ categoryId, category, faqs }) => (
            <div key={categoryId} className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {getCategoryIcon(category.icon)}
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{category.name}</h2>
              </div>
              
              <div className="space-y-3">
                <FAQAccordion faqs={faqs} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            ¿No encuentras lo que buscas?
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Ponte en contacto con nosotros y te ayudaremos con cualquier duda
          </p>
          <a 
            href="/contacto" 
            className="inline-flex items-center space-x-2 bg-amber-500 text-blue-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-400 transition-all shadow-xl hover:shadow-2xl"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Contactar</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | NESCUP 2026',
  description: 'Encuentra respuestas a las preguntas más frecuentes sobre la NESCUP 2026',
};
