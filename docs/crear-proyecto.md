# Cómo crear un nuevo proyecto en el portafolio

## Archivos involucrados

| Archivo | Qué controla |
|---|---|
| `components/sections/projects-section.tsx` | Array de proyectos → genera las **cards** |
| `components/project-card.tsx` | Diseño visual de la **card** (compartido entre homepage y página de proyectos) |
| `app/proyectos/[slug]/page.tsx` | `projectDetails` → contenido de la **página de detalle** |

> **Clave:** El campo `id` del proyecto actúa como vínculo entre ambos archivos. Se usa como slug en la URL (`/proyectos/mi-nuevo-proyecto`) y como key para buscar los detalles en `projectDetails`.

---

## Paso 1: Agregar el proyecto al array

En `components/sections/projects-section.tsx`, agrega un nuevo objeto al array `projects`:

```ts
{
  id: "mi-nuevo-proyecto",          // slug para la URL (debe coincidir con la key en projectDetails)
  title: "Nombre del Proyecto",
  category: "Full Stack",           // categoría que se muestra en la card
  description: "Descripción corta del proyecto...",
  technologies: ["React", "Node.js"],
  year: "2025",
  color: "bg-primary",              // color de fondo si no hay imagen (bg-primary, bg-accent, etc.)
  image: "/mi-proyecto-img/1.png",  // ruta a la primera imagen (se usa como miniatura)
},
```

> **Nota:** Si quieres que el proyecto aparezca en la **homepage**, debe estar en las **primeras 2 posiciones** del array (la homepage usa `.slice(0, 2)`). Los proyectos en cualquier posición aparecerán en la página `/proyectos`.

---

## Paso 2: Agregar los detalles del proyecto

En `app/proyectos/[slug]/page.tsx`, agrega una nueva entrada al objeto `projectDetails` usando el mismo `id` como key:

```ts
"mi-nuevo-proyecto": {
  subtitle: "Subtítulo descriptivo del proyecto",
  longDescription: "Descripción larga y detallada del proyecto. Puedes incluir toda la información relevante sobre el contexto, objetivos y resultados.",
  features: [
    "Funcionalidad principal 1",
    "Funcionalidad principal 2",
    "Funcionalidad principal 3",
  ],
  screenshots: [
    "/mi-proyecto-img/1.png",
    "/mi-proyecto-img/2.png",
    "/mi-proyecto-img/3.png",
  ],
  links: {
    demo: "https://mi-proyecto.vercel.app",   // URL del demo (o undefined si no aplica)
    github: "https://github.com/usuario/repo", // URL del repositorio
    demoDisabled: false,                        // true = muestra botón deshabilitado "Demo no disponible"
    githubDisabled: false,                      // true = muestra botón deshabilitado "Código privado"
    demoLabel: "Ver Proyecto",                  // texto personalizado del botón (opcional)
    githubLabel: "Ver código",                  // texto personalizado del botón (opcional)
  }
}
```

### Opciones de los links

| Propiedad | Tipo | Descripción |
|---|---|---|
| `demo` | `string` | URL del proyecto en producción |
| `github` | `string` | URL del repositorio |
| `demoDisabled` | `boolean` | Si es `true`, el botón de demo aparece deshabilitado |
| `githubDisabled` | `boolean` | Si es `true`, el botón de GitHub aparece deshabilitado |
| `demoLabel` | `string` | Texto personalizado para el botón de demo (por defecto: "Ver Proyecto") |
| `githubLabel` | `string` | Texto personalizado para el botón de GitHub (por defecto: "Ver código") |

---

## Paso 3: Agregar las imágenes

Coloca las capturas de pantalla en una carpeta dentro de `public/`:

```
public/
  mi-proyecto-img/
    1.png    ← esta se usa como miniatura en la card
    2.png
    3.png
```

Las rutas en el código son relativas a `public/`, por lo que `/mi-proyecto-img/1.png` apunta a `public/mi-proyecto-img/1.png`.

---

## Paso 4: Agregar logos de tecnologías (opcional)

Si usas tecnologías nuevas que no están en el mapa `techLogos` de `app/proyectos/[slug]/page.tsx`, agrega la URL del ícono:

```ts
const techLogos: Record<string, string> = {
  // ... logos existentes
  "NuevaTech": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuevatech/nuevatech-original.svg",
}
```

Si no se agrega, se mostrará un ícono genérico de código en su lugar.

---

## Checklist rápido

- [ ] Agregar objeto al array `projects` en `projects-section.tsx`
- [ ] Agregar entrada en `projectDetails` en `[slug]/page.tsx` con el mismo `id`
- [ ] Colocar imágenes en `public/nombre-proyecto-img/`
- [ ] (Opcional) Agregar logos de tecnologías nuevas en `techLogos`
- [ ] Verificar que la card aparece en `/proyectos`
- [ ] Verificar que la página de detalle carga en `/proyectos/mi-nuevo-proyecto`
