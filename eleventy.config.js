import path from "node:path";

export default function (eleventyConfig) {
  // Archivos estáticos que se copian tal cual a la salida
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Colección de entradas, de la más reciente a la más antigua
  eleventyConfig.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/posts/*.md").sort((a, b) => b.date - a.date)
  );

  // Lista de etiquetas usadas en las entradas
  eleventyConfig.addCollection("tagList", (api) => {
    const tags = new Set();
    api.getFilteredByGlob("src/posts/*.md").forEach((p) =>
      (p.data.tags || []).filter((t) => t !== "post").forEach((t) => tags.add(t))
    );
    return [...tags].sort((a, b) => a.localeCompare(b, "es"));
  });

  // Enlaces relativos: el sitio funciona igual en GitHub Pages (subcarpeta),
  // en cualquier hosting o abriendo los archivos en local.
  eleventyConfig.addFilter("rel", function (target) {
    const from = (this.page && this.page.url) || "/";
    const dir = from.endsWith("/") ? from : from.slice(0, from.lastIndexOf("/") + 1);
    let out = path.posix.relative(dir, target);
    if (target.endsWith("/") && out && !out.endsWith("/")) out += "/";
    return out || "./";
  });

  eleventyConfig.addFilter("slug_es", (s) =>
    String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
  );

  const MESES = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio",
    "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  eleventyConfig.addFilter("fecha", (d) =>
    `${d.getUTCDate()} de ${MESES[d.getUTCMonth()]} de ${d.getUTCFullYear()}`);
  eleventyConfig.addFilter("mesAnio", (d) =>
    `${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`);
  eleventyConfig.addFilter("iso", (d) => d.toISOString().slice(0, 10));

  // Tiempo de lectura aproximado (200 palabras por minuto)
  eleventyConfig.addFilter("lectura", (html) => {
    const palabras = String(html).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(palabras / 200));
  });

  eleventyConfig.addFilter("sinPost", (tags) => (tags || []).filter((t) => t !== "post"));
  eleventyConfig.addFilter("conEtiqueta", (posts, tag) =>
    posts.filter((p) => (p.data.tags || []).includes(tag)));

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
