# Identidad Corporativa NESCUP 2026

## 🎨 Paleta de Colores

### Colores Principales

#### Azul Tolosa (Primary)
- **Hex**: `#0033A0` 
- **RGB**: `0, 51, 160`
- **Uso**: Color principal del Tolosa CF, aplicado como color primario en elementos destacados
- **Aplicación**: Botones principales, títulos importantes, enlaces activos

#### Azul Oscuro
- **Hex**: `#001F5C`
- **RGB**: `0, 31, 92`
- **Uso**: Variante oscura para hover states y fondos
- **Aplicación**: Estados hover de botones, fondos de secciones oscuras

#### Azul Claro
- **Hex**: `#3366CC`
- **RGB**: `51, 102, 204`
- **Uso**: Variante clara para elementos secundarios
- **Aplicación**: Bordes, fondos sutiles, elementos decorativos

### Colores Secundarios

#### Blanco
- **Hex**: `#FFFFFF`
- **RGB**: `255, 255, 255`
- **Uso**: Color secundario del Tolosa CF, fondos limpios
- **Aplicación**: Fondos de secciones, texto sobre fondos oscuros, tarjetas

#### Amarillo/Oro (Accent)
- **Hex**: `#F59E0B`
- **RGB**: `245, 158, 11`
- **Uso**: Color de acento para CTAs y elementos destacados
- **Aplicación**: Botones secundarios, badges, elementos de énfasis

#### Amarillo Oscuro
- **Hex**: `#D97706`
- **RGB**: `217, 119, 6`
- **Uso**: Variante oscura del amarillo
- **Aplicación**: Hover states de elementos amarillos

### Colores de Soporte

#### Grises
- **Gris 900**: `#111827` - Texto principal
- **Gris 800**: `#1F2937` - Footer, encabezados oscuros
- **Gris 700**: `#374151` - Texto secundario
- **Gris 600**: `#4B5563` - Texto desactivado
- **Gris 400**: `#9CA3AF` - Bordes, placeholders
- **Gris 200**: `#E5E7EB` - Bordes sutiles
- **Gris 100**: `#F3F4F6` - Fondos claros
- **Gris 50**: `#F9FAFB` - Fondos muy claros

#### Verde Esmeralda (Alternativo)
- **Hex**: `#10B981`
- **RGB**: `16, 185, 129`
- **Uso**: Color alternativo para variedad visual, representa Gipuzkoa
- **Aplicación**: Grupos, secciones alternativas, iconos

#### Verde Oscuro
- **Hex**: `#059669`
- **RGB**: `5, 150, 105`
- **Uso**: Variante oscura del verde
- **Aplicación**: Hover states de elementos verdes

---

## 🏷️ Colores por Grupos

Para diferenciar visualmente los grupos del torneo:

- **Grupo A**: Azul `#0033A0` (Color Tolosa)
- **Grupo B**: Amarillo `#F59E0B` (Color acento)
- **Grupo C**: Verde Esmeralda `#10B981` (Color Gipuzkoa)

---

## 📝 Tipografía

### Fuente Principal: Geist Sans
- **Familia**: Geist Sans (Vercel)
- **Pesos**: 
  - Regular (400): Texto general
  - Semibold (600): Subtítulos, énfasis
  - Bold (700): Títulos principales, CTAs
  - Extrabold (800): Hero titles, números grandes

### Fuente Monoespaciada: Geist Mono
- **Familia**: Geist Mono (Vercel)
- **Uso**: Código, números, datos técnicos

### Escala Tipográfica
- **Hero Title**: 72px (4.5rem) / Bold / Line height 1.1
- **H1**: 48px (3rem) / Bold / Line height 1.2
- **H2**: 40px (2.5rem) / Bold / Line height 1.2
- **H3**: 32px (2rem) / Semibold / Line height 1.3
- **H4**: 24px (1.5rem) / Semibold / Line height 1.4
- **Body Large**: 20px (1.25rem) / Regular / Line height 1.6
- **Body**: 16px (1rem) / Regular / Line height 1.6
- **Small**: 14px (0.875rem) / Regular / Line height 1.5
- **Tiny**: 12px (0.75rem) / Regular / Line height 1.4

---

## 🎯 Logo y Marca

### Logo Principal
- **Elemento**: Círculo con gradiente azul con letra "N"
- **Tamaños mínimos**: 
  - Digital: 48px × 48px
  - Print: 12mm × 12mm
- **Espacio de respiro**: Mínimo 8px alrededor del logo

### Logotipo Textual
- **Texto**: "NESCUP"
- **Subtítulo**: "Tolosa 2026"
- **Colores**: 
  - NESCUP: Texto oscuro (#111827)
  - 2026: Gradiente azul-amarillo o color acento
  - Tolosa: Azul Tolosa (#0033A0)

### Variantes del Logo
1. **Horizontal**: Logo + texto en línea (uso general)
2. **Vertical**: Logo encima del texto (espacios reducidos)
3. **Monocromo**: Todo en blanco (fondos oscuros)
4. **Badge**: Versión circular simplificada (favicon, redes sociales)

---

## 🎨 Estilo Visual

### Inspiración: Tolosa CF
Basado en el Instagram oficial del Tolosa CF (@tolosacf_):
- **Deportivo y dinámico**: Imágenes en acción, movimiento
- **Limpio y moderno**: Diseños minimalistas, mucho espacio blanco
- **Azul predominante**: El azul Tolosa como color identitario
- **Fotografías de calidad**: Enfoque en jugadoras, equipo, acción
- **Contenido cercano**: Conexión con la comunidad local

### Elementos Visuales
- **Gradientes**: Azul a azul oscuro, amarillo a amarillo oscuro
- **Sombras**: Sutiles, elevadas (shadow-lg, shadow-xl)
- **Bordes redondeados**: 
  - Tarjetas: 24px (rounded-3xl)
  - Botones: 9999px (rounded-full)
  - Elementos pequeños: 12px (rounded-xl)
- **Transparencias**: backdrop-blur para overlays modernos

### Fotografía
- **Estilo**: Natural, deportivo, energético
- **Contenido**: Jugadoras en acción, equipos, instalaciones, celebraciones
- **Tratamiento**: Overlays oscuros para mejorar legibilidad de texto sobre imágenes
- **Fuentes**: Unsplash (temporal), fotos propias del evento

---

## 🧩 Componentes UI

### Botones

#### Botón Primario (Azul Tolosa)
```css
background: #0033A0
color: white
padding: 16px 40px
border-radius: 9999px
font-weight: bold
hover: #001F5C
```

#### Botón Secundario (Amarillo)
```css
background: #F59E0B
color: #001F5C
padding: 16px 40px
border-radius: 9999px
font-weight: bold
hover: #D97706
```

#### Botón Outline
```css
background: transparent
color: #0033A0
border: 2px solid #0033A0
padding: 16px 40px
border-radius: 9999px
font-weight: bold
hover: background #0033A0, color white
```

### Tarjetas
- **Fondo**: Blanco (#FFFFFF)
- **Sombra**: shadow-xl
- **Border radius**: 24px (rounded-3xl)
- **Padding**: 32px (p-8)
- **Hover**: Elevación adicional (shadow-2xl), scale(1.02)

### Badges
- **Fondo**: Azul claro con opacidad (#0033A0 10%)
- **Texto**: Azul oscuro (#001F5C)
- **Border radius**: 9999px (rounded-full)
- **Padding**: 12px 24px
- **Tamaño texto**: 14px

---

## 🏃‍♀️ Aplicación por Secciones

### Hero Section
- **Fondo**: Imagen de fútbol femenino con overlay azul oscuro
- **Gradiente**: De azul oscuro a transparente
- **Título**: Blanco, extrabold, 72px
- **Subtítulo "2026"**: Gradiente amarillo-dorado
- **CTAs**: Botón amarillo (principal) + botón outline blanco (secundario)

### Secciones de Contenido
- **Fondo alternado**: Blanco y gris muy claro (#F9FAFB)
- **Títulos**: Azul oscuro (#111827)
- **Texto**: Gris 700 (#374151)
- **Iconos**: Azul Tolosa o colores de grupo

### Footer
- **Fondo**: Gradiente gris oscuro (#1F2937 a #111827)
- **Texto**: Gris 300 (#D1D5DB)
- **Enlaces hover**: Azul claro (#3366CC)
- **Iconos sociales**: Gris 800 con hover azul Tolosa

### Header
- **Fondo**: Blanco con blur y opacidad 95%
- **Logo**: Gradiente azul Tolosa
- **Enlaces**: Gris 700 con hover azul Tolosa
- **CTA**: Botón gradiente azul

---

## ♿ Accesibilidad

### Contraste de Colores
- **Cumplimiento**: WCAG AA mínimo
- **Texto sobre azul**: Blanco (#FFFFFF) - Ratio 8.6:1 ✅
- **Texto sobre amarillo**: Gris oscuro (#111827) - Ratio 10.4:1 ✅
- **Enlaces**: Subrayados en hover, distinción sin color

### Estados Interactivos
- **Focus**: Outline azul Tolosa 2px con offset
- **Hover**: Cambio de color + cursor pointer
- **Active**: Escala reducida (scale 0.98)
- **Disabled**: Opacidad 50%, cursor not-allowed

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptaciones
- **Typography**: Reducir tamaños en mobile (Hero de 72px a 48px)
- **Spacing**: Padding reducido en mobile
- **Grid**: De 3 columnas a 1 columna en mobile
- **Navigation**: Hamburger menu en mobile

---

## 🎬 Animaciones y Transiciones

### Transiciones Estándar
- **Duración**: 200ms - 300ms
- **Easing**: ease-out
- **Propiedades**: color, background-color, transform, box-shadow

### Animaciones Especiales
- **Pulse**: Para badges y notificaciones (2s infinite)
- **Bounce**: Para scroll indicators (1s infinite)
- **Fade In**: Para contenido que aparece (600ms ease-out)
- **Scale hover**: transform scale(1.05) en botones y tarjetas

### Scroll Behavior
- **Smooth scroll**: Activado globalmente
- **Parallax**: Sutil en hero section

---

## 📐 Espaciado y Grid

### Sistema de Espaciado (8px base)
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### Container
- **Max-width**: 1280px (80rem)
- **Padding horizontal**: 24px (1.5rem)
- **Centrado**: margin auto

---

## 🌐 Referencias

### Inspiración Visual
- **Tolosa CF Instagram**: [@tolosacf_](https://www.instagram.com/tolosacf_/)
- **Estilo**: Deportivo, moderno, azul predominante
- **Contenido**: Fútbol femenino, comunidad, cercanía

### Recursos
- **Fuentes**: [Vercel Geist Font](https://vercel.com/font)
- **Iconos**: Heroicons
- **Imágenes temporales**: Unsplash (fútbol femenino)
- **Framework**: Tailwind CSS v4

---

## ✅ Checklist de Implementación

- [x] Colores principales definidos
- [x] Tipografía configurada
- [x] Logo y marca establecidos
- [x] Componentes base (botones, tarjetas)
- [x] Hero section con identidad
- [x] Footer con branding
- [x] Header con navegación
- [ ] Logos de equipos
- [ ] Galería de imágenes
- [ ] Iconografía personalizada
- [ ] Marca de agua/patrón de fondo
- [ ] Versión mobile optimizada

---

**Última actualización**: 13 de febrero de 2026
**Versión**: 1.0
**Organizado por**: Tolosa CF (@tolosacf_)
