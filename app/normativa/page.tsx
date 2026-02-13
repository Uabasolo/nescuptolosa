import { Metadata } from 'next';

export default function NormativaPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Normativa y Reglamento
        </h1>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
          <p className="text-amber-800">
            📖 <strong>Reglamento pendiente</strong>: El reglamento oficial se publicará próximamente.
          </p>
          <p className="text-amber-700 mt-2 text-sm">
            El contenido se carga desde <code className="bg-amber-100 px-2 py-1 rounded">content/es/rules.mdx</code>
          </p>
        </div>

        {/* PLACEHOLDER: Aquí se mostrará el contenido MDX */}
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Normativa | NESCUP 2026',
  description: 'Reglamento oficial y normas de participación de la NESCUP 2026',
};
