---
layout: layouts/base.njk
title: Sobre mí
permalink: /sobre-mi.html
seccion: sobre
resumen: Quién escribe Bitácora Web y por qué existe este blog.
---
<section class="band estrecha prosa">

# Sobre mí

Soy {{ site.autor }}, estudiante de Ingeniería Informática. Este blog nació como práctica de la asignatura **Desarrollo de Aplicaciones en Red**: la idea era construir un sitio web desde cero y, ya puestos, usarlo para explicar lo que voy aprendiendo.

Escribir sobre un tema obliga a entenderlo de verdad. Por eso cada entrada intenta responder a una pregunta concreta (¿qué pasa cuando escribo una URL?, ¿por qué usar `<article>` y no un `<div>`?) con un ejemplo de código y un esquema dibujado para la ocasión.

## Cómo está hecho este sitio

- **Contenido** en Markdown: cada entrada es un archivo `.md` con su título, fecha, etiquetas e imagen de portada.
- **Generador estático**: [Eleventy](https://www.11ty.dev/) convierte esos archivos en páginas HTML usando plantillas Nunjucks.
- **Estilos** con CSS propio, sin frameworks: Grid y Flexbox para la maquetación y modo oscuro automático.
- **Ilustraciones** en SVG dibujadas a mano, así que pesan poco y se ven nítidas en cualquier pantalla.
- **Publicación** en GitHub Pages mediante una GitHub Action que compila el sitio en cada cambio.

Si quieres empezar por el principio, la primera entrada es [De la URL a la pantalla](posts/de-la-url-a-la-pantalla.html).

</section>
