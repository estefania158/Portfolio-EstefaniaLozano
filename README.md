# 🌟 Portafolio Profesional | Estefanía Lozano

---
## 🔗 Demo y Repositorio

- 🌐 Demo en vivo: https://portfolio-estefania-lozano.vercel.app/
- 💻 Repositorio: https://github.com/estefania158/Portfolio-EstefaniaLozano.git

## 📌 Sobre el Proyecto

Este es mi portafolio profesional, diseñado y desarrollado desde cero para presentar mis habilidades técnicas, mi trayectoria académica y mis proyectos de software de una manera premium, interactiva y moderna. 

A diferencia de una plantilla genérica, este portafolio es una **aplicación web Full Stack de nivel de producción**, optimizada para el rendimiento, accesibilidad y experiencia de usuario. Implementa rutas dinámicas, renderizado híbrido y un diseño visual altamente cuidado, reflejando mi enfoque en el desarrollo web profesional.

---

## 🚀 Características Principales

*   **🎨 Diseño Visualmente Excepcional**: Estética minimalista y moderna con tipografía estilizada (Inter y Playfair Display), paletas de colores armónicas y soporte completo para **modo claro y modo oscuro**.
*   **📱 Arquitectura Responsive**: Diseño 100% adaptable a cualquier dispositivo (móviles, tabletas y computadores de escritorio) mediante sistemas de grilla y flexbox flexibles.
*   **🛠️ Páginas de Detalle Dinámicas**: Enrutamiento dinámico (`/proyectos/[slug]`) que lee y renderiza detalladamente la problemática, participación técnica, características individuales y capturas de pantalla interactivas (mediante un carrusel dinámico) para cada proyecto.
*   **📄 Hoja de Vida Interactiva**: Sección dedicada al CV (`/cv`) con visualización estructurada de experiencia laboral, educación, certificaciones, habilidades técnicas y blandas, con opción de **descarga directa de la hoja de vida en formato PDF**.
*   **✉️ Formulario de Contacto en Producción**: Formulario interactivo conectado a la API de **Web3Forms** para recepción de mensajes en tiempo real, provisto de estados de carga, validaciones y retroalimentación de éxito/error.
*   **📋 Copiado Rápido al Portapapeles**: Micro-interacciones intuitivas para copiar con un solo clic los datos de contacto (Email y Teléfono) con confirmación visual instantánea.
*   **📈 Analítica Web**: Integración nativa con **Vercel Analytics** para monitoreo continuo de visitas e interacciones de usuario en producción.

---

## 🛠️ Stack Tecnológico

El portafolio se construyó utilizando herramientas y tecnologías modernas del ecosistema frontend:

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Core** | [Next.js 16](https://nextjs.org/) | Framework de React con App Router para renderizado eficiente y SEO óptimo. |
| **Lógica** | [TypeScript](https://www.typescriptlang.org/) | Tipado estático para garantizar la robustez, mantenibilidad y menor tasa de errores del código. |
| **Estilos** | [Tailwind CSS 4.0](https://tailwindcss.com/) | Estilizado moderno, eficiente y consistente a través de clases utilitarias altamente optimizadas. |
| **Componentes UI** | [Radix UI](https://www.radix-ui.com/) | Primitivas de interfaz accesibles y sin estilos para construir componentes personalizados como acordeones, dropdowns y diálogos. |
| **Íconos** | [Lucide React](https://lucide.dev/) | Set de íconos vectoriales modernos y consistentes. |
| **Formularios** | [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) | Gestión robusta y validación estricta de esquemas de formularios en el cliente. |
| **Carrusel** | [Embla Carousel](https://www.embla-carousel.com/) | Librería liviana y fluida para el carrusel de imágenes de los proyectos. |
| **Package Manager** | [PNPM](https://pnpm.io/) | Gestor de paquetes rápido, eficiente en disco y altamente seguro. |

---

## 📁 Estructura del Proyecto

A continuación se detalla la organización de los directorios clave del proyecto:

```
portafolio/
├── app/                  # Rutas y páginas principales (App Router de Next.js)
│   ├── cv/               # Página de la Hoja de Vida (CV) interactiva
│   ├── proyectos/        # Listado de proyectos y rutas dinámicas [slug]
│   ├── globals.css       # Configuración global de estilos y variables de Tailwind
│   ├── layout.tsx        # Contenedor raíz, metadatos globales y proveedores de tema
│   └── page.tsx          # Página de inicio (Landing Page) que ensambla las secciones
├── components/           # Componentes modulares y reutilizables de React
│   ├── sections/         # Secciones de la Landing Page (Hero, About, Projects, Contact)
│   ├── ui/               # Componentes atómicos de UI (Botones, Inputs, etc. configurados con shadcn)
│   ├── navbar.tsx        # Menú de navegación flotante responsive
│   ├── footer.tsx        # Pie de página institucional
│   └── theme-toggle.tsx  # Botón dinámico para cambio de modo de color (Claro/Oscuro)
├── docs/                 # Documentación técnica del proyecto
│   └── crear-proyecto.md # Manual técnico para agregar nuevos proyectos
├── public/               # Recursos estáticos (Logos, PDFs y capturas de los proyectos)
│   ├── aumal-img/        # Capturas de pantalla de la plataforma AUMAL
│   └── culturaydeporte-img/ # Capturas de pantalla del proyecto de la Corporación
└── package.json          # Script de automatización y dependencias de la aplicación
```

---

## 💻 Guía de Inicio Rápido

Para clonar y ejecutar este proyecto de forma local, asegúrate de tener instalado **Node.js** y **PNPM**.

### 1. Clonar el repositorio
```bash
git clone https://github.com/estefania158/Portfolio-EstefaniaLozano.git
cd Portfolio-EstefaniaLozano
```

### 2. Instalar dependencias
```bash
pnpm install
```

### 3. Configurar variables de entorno (Opcional para el formulario de contacto)
Si deseas utilizar tu propia llave de Web3Forms para el formulario de contacto, puedes actualizar el `access_key` directamente en `components/sections/contact-section.tsx` en la línea 57, o configurar variables de entorno en producción.

### 4. Iniciar el servidor de desarrollo
```bash
pnpm dev
```
La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### 5. Compilar para producción
Para compilar y verificar que la aplicación no tenga errores de tipado o de Next.js en producción, ejecuta:
```bash
pnpm build
```

---

## 🛠️ ¿Cómo agregar un nuevo proyecto?

El portafolio está estructurado para que agregar nuevos proyectos sea sumamente sencillo y no requiera modificar la estructura interna de las páginas. El proceso consiste en:

1.  **Registrar la card del proyecto** en el array de `components/sections/projects-section.tsx`.
2.  **Registrar la información detallada** (problemática, participación y capturas de pantalla) en el objeto `projectDetails` dentro de `app/proyectos/[slug]/page.tsx`.
3.  **Guardar las capturas del proyecto** en una subcarpeta bajo el directorio `/public`.

Para obtener instrucciones paso a paso detalladas, consulta el manual interactivo en:
👉 **[Instrucciones detalladas de adición de proyectos (docs/crear-proyecto.md)](/docs/crear-proyecto.md)**

---

## 📄 Autora

Este proyecto ha sido desarrollado en su totalidad por **Estefanía Lozano Ochoa**.

