import { Metadata } from 'next';

export default function CalendarioPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Calendario de Partidos
        </h1>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-800">
            📅 <strong>Calendario pendiente</strong>: El calendario de partidos se publicará próximamente.
          </p>
          <p className="text-amber-700 mt-2 text-sm">
            Los datos se cargan desde <code className="bg-amber-100 px-2 py-1 rounded">data/schedule.yml</code>
          </p>
        </div>

        {/* PLACEHOLDER: Aquí se mostrará el calendario desde el loader */}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Calendario | NESCUP 2026',
  description: 'Consulta el calendario completo de partidos de la NESCUP 2026',
};
