# Bitácora Web

Blog estático creado para la **Actividad 1 (Laboratorio: creación de un blog)** de la asignatura *Desarrollo de Aplicaciones en Red*. Está hecho con el generador de sitios estáticos [Eleventy](https://www.11ty.dev/), plantillas Nunjucks, HTML semántico y CSS propio, sin frameworks.

## Qué incluye

- **4 entradas** con texto, código, tablas, una imagen de portada y un esquema ilustrado cada una.
- **Navegación**: menú principal, migas de pan, enlaces a la entrada anterior y siguiente, archivo por fechas, páginas por etiqueta, buscador en la portada y página 404.
- **Diseño adaptable** (móvil, tableta y escritorio) y **modo oscuro** automático.
- **Accesibilidad**: etiquetas semánticas, enlace «Saltar al contenido», textos alternativos y foco visible.

## Estructura

```
src/
├── _data/site.json          Datos globales (título, autor, descripción)
├── _includes/
│   ├── layouts/base.njk     Plantilla común: cabecera, menú y pie
│   ├── layouts/post.njk     Plantilla de entrada
│   └── tarjeta.njk          Tarjeta de entrada para los listados
├── posts/*.md               Las entradas, en Markdown
├── index.njk                Portada
├── archivo.njk              Archivo por fechas
├── etiquetas.njk            Índice de etiquetas
├── etiquetas/etiqueta.njk   Genera una página por etiqueta
├── sobre-mi.md              Página «Sobre mí»
├── 404.njk                  Página de error
└── assets/                  CSS, JavaScript e imágenes SVG
eleventy.config.js           Configuración y filtros de Eleventy
.github/workflows/deploy.yml Publicación automática en GitHub Pages
```

## Uso en local

Requiere Node.js 18 o superior.

```bash
npm install      # instala Eleventy
npm start        # servidor de desarrollo en http://localhost:8080
npm run build    # genera el sitio en la carpeta _site
```

## Añadir una entrada

Crea un archivo `.md` en `src/posts/` con esta cabecera y escribe el texto debajo:

```markdown
---
title: "Título de la entrada"
date: 2026-12-01
numero: 5
tags: [CSS]
resumen: "Una o dos frases que aparecen en la portada."
portada: mi-portada.svg
portada_alt: "Descripción de la imagen"
---
```

La imagen de portada va en `src/assets/img/`. Eleventy la añade sola a la portada, al archivo y a la página de su etiqueta.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube este proyecto a la rama `main`.
2. En el repositorio, ve a **Settings → Pages** y en **Source** elige **GitHub Actions**.
3. Cada `git push` a `main` ejecuta el workflow `deploy.yml`, que compila el sitio y lo publica en `https://<usuario>.github.io/<repositorio>/`.

Todos los enlaces internos son relativos, así que el sitio funciona igual en una subcarpeta de GitHub Pages, en Netlify o abriendo `_site/index.html` directamente.
