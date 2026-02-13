# Imágenes del Proyecto

## Estructura de Carpetas

```
public/images/
├── teams/          # Logos de los equipos
├── sponsors/       # Logos de patrocinadores
├── gallery/        # Galería de fotos del torneo
└── README.md
```

## Imágenes Necesarias

### Logos de Equipos (teams/)
Coloca los logos de los equipos con los siguientes nombres:
- `lagun-onak.png`
- `real-sociedad.png`
- `sanse.png`
- `bizkerre.png`
- `mulier.png`
- `basauriko-kimuak.png`
- `tolosa.png`
- `goierri-gorri.png`
- `martutene.png`
- `intxaurdi.png`
- `touring.png`
- `cd-lourdes.png`

**Recomendaciones:**
- Formato: PNG con fondo transparente
- Tamaño: 400x400px
- Peso: < 100KB por imagen

### Imagen de Fondo del Hero
Actualmente se usa una imagen de Unsplash:
```
https://images.unsplash.com/photo-1574629810360-7efbbe195018
```

Para usar una imagen propia:
1. Guarda tu imagen en `public/images/hero-background.jpg`
2. En `app/page.tsx`, reemplaza la URL de Unsplash por: `/images/hero-background.jpg`

**Recomendaciones:**
- Dimensiones: 1920x1080px o superior
- Formato: JPEG optimizado
- Peso: < 500KB
- Contenido: Campo de fútbol, jugadoras en acción, instalaciones

### Logos de Patrocinadores (sponsors/)
Si tienes patrocinadores, coloca sus logos aquí con nombres descriptivos como:
- `patrocinador-1.png`
- `patrocinador-2.png`

### Galería (gallery/)
Fotos de ediciones anteriores del torneo o imágenes promocionales.

## Notas
- Todas las imágenes deben estar optimizadas para web
- Usa herramientas como TinyPNG o ImageOptim para reducir el tamaño sin perder calidad
- Mantén los nombres en minúsculas y sin espacios (usa guiones)
