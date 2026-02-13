# Guía Rápida - NESCUP 2026

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
npm run dev
```

## 📝 Cómo Añadir Contenido

### 1. Información del Torneo

Edita `data/tournament.yml`:
```yaml
name: "NESCUP 2026"
dates:
  start: "2026-06-12"
  end: "2026-06-14"
```

### 2. Equipos

Edita `data/teams.yml`:
```yaml
teams:
  - id: "team-001"
    name: "Nombre del Equipo"
    city: "Ciudad"
    group: "A"
    # ... más datos
```

### 3. Calendario

Edita `data/schedule.yml`:
```yaml
matches:
  - id: "match-001"
    date: "2026-06-12"
    time: "09:00"
    homeTeam: "team-001"
    awayTeam: "team-002"
```

### 4. Contenido de Páginas

Edita archivos en `content/es/`:
- `home.mdx` - Página principal
- `about.mdx` - Sobre el torneo
- `logistics.mdx` - Logística
- `rules.mdx` - Normativa

### 5. Imágenes

Coloca imágenes en:
- `public/images/teams/` - Logos de equipos
- `public/images/sponsors/` - Logos de patrocinadores

## 🎯 Tareas Prioritarias

1. **Actualizar datos del torneo** en `data/tournament.yml`
2. **Añadir equipos reales** en `data/teams.yml`
3. **Completar calendario** en `data/schedule.yml`
4. **Añadir logos** en `public/images/`
5. **Revisar contenido** en `content/es/`

## 📚 Referencias

- Ver [README.md](../README.md) para documentación completa
- Ver [TASKS.md](./TASKS.md) para lista de tareas
- Ver [PRD.md](./PRD.md) para requisitos del producto
