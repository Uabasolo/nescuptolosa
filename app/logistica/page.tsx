import { Metadata } from 'next';

export default function LogisticaPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Información Logística
        </h1>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-800">
            🗺️ <strong>Información pendiente</strong>: La información logística detallada se publicará próximamente.
          </p>
          <p className="text-amber-700 mt-2 text-sm">
            El contenido se carga desde <code className="bg-amber-100 px-2 py-1 rounded">content/es/logistics.mdx</code>
          </p>
        </div>

        {/* PLACEHOLDER: Aquí se mostrará el contenido MDX */}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Logística | NESCUP 2026',
  description: 'Información práctica sobre alojamiento, transporte y servicios para la NESCUP 2026',
};
