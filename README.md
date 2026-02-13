# 🏆 NESCUP 2026 - Tolosa

Sitio web oficial de la **X. NESCUP 2026** (Décima Edición) - Torneo de fútbol alevín femenino organizado por el Tolosa CF.

## 📅 Información del Torneo

- **Fecha**: Sábado, 11 de abril de 2026
- **Categoría**: Alevín Femenino (nacidas en 2014)
- **Ubicación**: Tolosa, Gipuzkoa
- **Equipos**: 12 equipos en 3 grupos
- **Formato**: Fase de Grupos + Fase Campeón + Fase Copa
- **Organizador**: Tolosa Club de Fútbol
- **Contacto**: tolosacftxapelketak@gmail.com | WhatsApp: +34 685 75 14 58

## 🚀 Tecnologías Utilizadas

- **[Next.js 16](https://nextjs.org/)** - Framework React con App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipado estático
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Zod](https://zod.dev/)** - Validación de schemas
- **[YAML](https://yaml.org/)** - Gestión de datos estructurados
- **[Gray Matter](https://github.com/jonschlinkert/gray-matter)** - Procesamiento de MDX
- **React 19** - Biblioteca UI

## 📋 Características

✨ **Diseño Visual y Moderno**
- Interfaz responsive (móvil, tablet, desktop)
- Gradientes y animaciones suaves
- Inspirado en eventos deportivos profesionales

🎯 **SEO Optimizado**
- Metadata configurada para buscadores
- Open Graph para redes sociales
- Sitemap automático
- robots.txt configurado

⚡ **Arquitectura Escalable**
- Datos separados en YAML (no hardcodeados)
- Contenido editorial en MDX con i18n
- Validación con Zod
- Loaders reutilizables

🌐 **Multiidioma**
- Soporte ES/EU preparado
- Contenido organizado por idioma

## 📁 Estructura del Proyecto

```
nescuptolosa/
├── docs/                      # Documentación del proyecto
│   ├── PROJECT_CONTEXT.md     # Contexto y objetivos
│   ├── PRD.md                 # Product Requirements Document
│   └── TASKS.md               # Lista de tareas y progreso
│
├── data/                      # Datos estructurados (YAML)
│   ├── tournament.yml         # Info general del torneo
│   ├── teams.yml              # Equipos participantes
│   ├── schedule.yml           # Calendario de partidos
│   ├── venues.yml             # Instalaciones deportivas
│   ├── sponsors.yml           # Patrocinadores
│   └── faqs.yml               # Preguntas frecuentes
│
├── content/                   # Contenido editorial (MDX)
│   ├── es/                    # Contenido en español
│   │   ├── home.mdx
│   │   ├── about.mdx
│   │   ├── logistics.mdx
│   │   └── rules.mdx
│   └── eu/                    # Contenido en euskera
│       ├── home.mdx
│       └── about.mdx
│
├── app/                       # Aplicación Next.js
│   ├── components/            # Componentes React
│   │   ├── layout/            # Header, Footer, etc.
│   │   ├── sections/          # Secciones reutilizables
│   │   ├── ui/                # Componentes UI base
│   │   └── motion/            # Animaciones
│   ├── equipos/               # Página de equipos
│   ├── calendario/            # Página de calendario
│   ├── logistica/             # Página de logística
│   ├── normativa/             # Página de normativa
│   ├── faq/                   # Página de FAQs
│   ├── contacto/              # Página de contacto
│   ├── sitemap.ts             # Sitemap SEO
│   ├── robots.ts              # Robots.txt
│   ├── layout.tsx             # Layout principal
│   ├── page.tsx               # Página de inicio
│   └── globals.css            # Estilos globales
│
├── lib/                       # Lógica de negocio
│   ├── loaders/               # Cargadores de datos
│   │   ├── tournament.ts
│   │   ├── teams.ts
│   │   ├── schedule.ts
│   │   ├── venues.ts
│   │   ├── sponsors.ts
│   │   ├── faqs.ts
│   │   ├── content.ts
│   │   └── index.ts
│   ├── validators/            # Schemas Zod
│   │   ├── tournament.ts
│   │   ├── team.ts
│   │   ├── schedule.ts
│   │   ├── venue.ts
│   │   ├── sponsor.ts
│   │   └── faq.ts
│   └── utils.ts               # Utilidades
│
├── public/                    # Assets estáticos
│   └── images/               
│       ├── teams/             # Logos de equipos
│       └── sponsors/          # Logos de patrocinadores
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ instalado
- npm, yarn o pnpm

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd nescuptolosa

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Scripts Disponibles

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linter
```

## 📝 Gestión de Contenido

### Datos Estructurados (YAML)

Los datos del torneo se gestionan mediante archivos YAML en `data/`:

```yaml
# Ejemplo: data/tournament.yml
name: "NESCUP 2026"
edition: 2026
dates:
  start: "2026-06-12"
  end: "2026-06-14"
```

**Para editar datos**: 
1. Abre el archivo YAML correspondiente en `data/`
2. Edita los valores (respeta la estructura)
3. Los cambios se reflejan automáticamente

### Contenido Editorial (MDX)

El contenido de las páginas está en `content/[idioma]/`:

```markdown
---
title: "Título de la página"
description: "Descripción"
---

# Contenido en Markdown

Texto con **formato** y _énfasis_.
```

**Para añadir contenido**:
1. Edita el archivo MDX en `content/es/` o `content/eu/`
2. Usa Markdown estándar
3. Metadata en frontmatter (entre `---`)

## 🔧 Uso de Loaders

Los loaders cargan y validan datos automáticamente:

```typescript
// En una página o componente
import { loadTournament, loadTeams } from '@/lib/loaders';

export default async function Page() {
  const tournament = await loadTournament();
  const teams = await loadTeams();
  
  return (
    <div>
      <h1>{tournament.name}</h1>
      {/* ... */}
    </div>
  );
}
```

## 🎨 Personalización

### Colores

Los colores se definen en `app/globals.css`:

```css
:root {
  --primary: #10b981;      /* Verde esmeralda */
  --accent: #f59e0b;       /* Ámbar */
}
```

### Tipografía

Configurada en `app/layout.tsx` usando Geist (fuente de Vercel).

## 📦 Deployment

### Vercel (Recomendado)

1. Push a GitHub
2. Importa en [Vercel](https://vercel.com)
3. Deploy automático

### Otras Plataformas

```bash
npm run build
npm run start
```

## 🗺️ Roadmap

Ver [docs/TASKS.md](docs/TASKS.md) para el estado actual y tareas pendientes.

### Próximos Pasos

1. ✅ Estructura base del proyecto
2. 📝 Rellenar datos reales del torneo
3. 🎨 Añadir imágenes y logos
4. 🧩 Crear componentes visuales
5. 🌐 Implementar i18n completo
6. 📧 Sistema de inscripciones

## 📚 Documentación

- [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) - Contexto y objetivos
- [PRD.md](docs/PRD.md) - Requisitos del producto
- [TASKS.md](docs/TASKS.md) - Tareas y progreso

## 🤝 Contribuir

1. Revisa [TASKS.md](docs/TASKS.md) para ver tareas pendientes
2. Lee [PROJECT_CONTEXT.md](docs/PROJECT_CONTEXT.md) para entender el proyecto
3. Respeta la estructura de datos YAML
4. Documenta cambios significativos

## 📄 Licencia

[Especificar licencia]

---

**NESCUP 2026** - Torneo de Fútbol Alevín Femenino • Tolosa, Gipuzkoa

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
