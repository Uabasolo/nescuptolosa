# TASKS - NESCUP 2026

## 🎯 Estado Actual del Proyecto

**Fase**: v1.0 - MVP (Fundación)
**Progreso**: 40%

---

## ✅ Completadas

### Configuración Inicial
- [x] Crear proyecto Next.js con TypeScript
- [x] Configurar Tailwind CSS v4
- [x] Estructura de carpetas básica
- [x] Layout principal (Header + Footer)
- [x] Página de inicio (Hero + sections)
- [x] Configurar metadata y SEO básico

### Estructura del Proyecto
- [x] Crear carpeta `docs/` con documentación
- [x] Crear carpeta `data/` para YAML
- [x] Crear carpeta `content/` para MD/MDX (es/eu)
- [x] Crear carpeta `lib/loaders/` para loaders
- [x] Crear carpeta `lib/validators/` para schemas Zod
- [x] Crear carpeta `app/components/sections/`
- [x] Crear páginas base (equipos, calendario, etc.)

---

## 🚧 En Progreso

### Sistema de Datos
- [ ] Instalar dependencias (zod, js-yaml, gray-matter)
- [ ] Crear schemas de validación en `lib/validators/`
- [ ] Crear loaders en `lib/loaders/`
- [ ] Crear archivos YAML base en `data/`
- [ ] Crear archivos MDX base en `content/`

---

## 📋 Pendientes (Prioridad Alta)

### Datos Estructurados (data/)
- [ ] `data/tournament.yml` - Información del torneo
- [ ] `data/teams.yml` - Equipos participantes
- [ ] `data/schedule.yml` - Calendario de partidos
- [ ] `data/sponsors.yml` - Patrocinadores
- [ ] `data/venues.yml` - Instalaciones deportivas
- [ ] `data/faqs.yml` - Preguntas frecuentes

### Contenido Editorial (content/)
- [ ] `content/es/home.mdx` - Contenido inicio ES
- [ ] `content/es/about.mdx` - Sobre el torneo ES
- [ ] `content/es/logistics.mdx` - Logística ES
- [ ] `content/es/rules.mdx` - Normativa ES
- [ ] `content/eu/home.mdx` - Contenido inicio EU
- [ ] `content/eu/about.mdx` - Sobre el torneo EU

### Loaders y Validación (lib/)
- [ ] `lib/validators/tournament.ts` - Schema torneo
- [ ] `lib/validators/team.ts` - Schema equipo
- [ ] `lib/validators/schedule.ts` - Schema calendario
- [ ] `lib/loaders/tournament.ts` - Loader torneo
- [ ] `lib/loaders/teams.ts` - Loader equipos
- [ ] `lib/loaders/content.ts` - Loader MDX

### Páginas
- [ ] Actualizar `app/page.tsx` con datos dinámicos
- [ ] `app/equipos/page.tsx` - Listado de equipos
- [ ] `app/calendario/page.tsx` - Calendario de partidos
- [ ] `app/logistica/page.tsx` - Información logística
- [ ] `app/normativa/page.tsx` - Reglamento
- [ ] `app/faq/page.tsx` - Preguntas frecuentes
- [ ] `app/contacto/page.tsx` - Formulario de contacto

### Componentes
- [ ] `components/sections/HeroSection.tsx`
- [ ] `components/sections/StatsSection.tsx`
- [ ] `components/sections/AboutSection.tsx`
- [ ] `components/sections/SponsorsSection.tsx`
- [ ] `components/ui/TeamCard.tsx`
- [ ] `components/ui/MatchCard.tsx`
- [ ] `components/ui/Accordion.tsx` (para FAQs)

---

## 📋 Pendientes (Prioridad Media)

### SEO Avanzado
- [ ] Configurar `app/sitemap.ts` dinámico
- [ ] Configurar `app/robots.ts`
- [ ] Añadir Schema.org (SportsEvent)
- [ ] Optimizar imágenes (next/image)
- [ ] Configurar canonical URLs

### Internacionalización
- [ ] Instalar next-intl o similar
- [ ] Configurar middleware i18n
- [ ] Selector de idioma en Header
- [ ] URLs localizadas (/es/, /eu/)

### UI/UX
- [ ] Menú mobile responsive
- [ ] Animaciones con Framer Motion
- [ ] Loading states
- [ ] Error boundaries
- [ ] Toast notifications

---

## 📋 Pendientes (Prioridad Baja)

### Optimizaciones
- [ ] Lazy loading de componentes
- [ ] Optimización de fuentes
- [ ] Service Worker / PWA
- [ ] Análisis de bundle size
- [ ] Configurar Edge Runtime

### Analytics y Monitoreo
- [ ] Google Analytics / Vercel Analytics
- [ ] Event tracking
- [ ] Error logging (Sentry)

### Testing
- [ ] Tests unitarios (Vitest)
- [ ] Tests E2E (Playwright)
- [ ] Tests de accesibilidad

---

## 🔮 Futuras Versiones (v1.1+)

### Inscripciones
- [ ] Formulario de inscripción
- [ ] Backend de inscripciones (API Routes)
- [ ] Email de confirmación
- [ ] Panel admin

### Features Avanzadas
- [ ] Sistema de noticias/blog
- [ ] Galería de fotos
- [ ] Resultados en vivo
- [ ] Descargas (calendario PDF, reglamento PDF)

### Integraciones
- [ ] Newsletter (Mailchimp/ConvertKit)
- [ ] Redes sociales (feeds, shares)
- [ ] Google Maps API (mapas interactivos)

---

## 📝 Notas

### Decisiones Pendientes
- [ ] Confirmar colores oficiales del torneo
- [ ] Obtener logos y assets gráficos
- [ ] Definir estructura exacta de equipos/grupos
- [ ] Calendarios definitivos
- [ ] Lista de patrocinadores

### Bloqueos
- Ninguno actualmente

### Siguiente Sesión
1. Instalar dependencias necesarias
2. Crear schemas de validación con Zod
3. Crear loaders para YAML y MDX
4. Poblar archivos YAML con datos de ejemplo
5. Actualizar página de inicio con datos dinámicos

---

**Última actualización**: 13 de febrero de 2026
