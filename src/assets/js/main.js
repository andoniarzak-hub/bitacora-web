// Pequeñas mejoras de navegación. El blog funciona igual sin JavaScript.
{
  // 1. Buscador de la portada: filtra las tarjetas mientras escribes
  const campo = document.getElementById("buscar");
  const rejilla = document.getElementById("rejilla");
  const vacio = document.getElementById("vacio");
  if (campo && rejilla) {
    const quitarTildes = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const tarjetas = [...rejilla.querySelectorAll(".tarjeta")];
    campo.addEventListener("input", () => {
      const q = quitarTildes(campo.value.trim());
      let visibles = 0;
      tarjetas.forEach((t) => {
        const ok = !q || quitarTildes(t.dataset.buscar || "").includes(q);
        t.hidden = !ok;
        if (ok) visibles++;
      });
      if (vacio) vacio.hidden = visibles > 0;
    });
  }

  // 2. Barra de progreso de lectura en las entradas
  const barra = document.querySelector(".progreso span");
  if (barra) {
    const actualizar = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      barra.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
    };
    addEventListener("scroll", actualizar, { passive: true });
    addEventListener("resize", actualizar);
    actualizar();
  }

  // 3. Las tablas anchas se pueden desplazar en el móvil sin romper la página
  document.querySelectorAll(".cuerpo table").forEach((tabla) => {
    const caja = document.createElement("div");
    caja.className = "tabla";
    tabla.parentNode.insertBefore(caja, tabla);
    caja.appendChild(tabla);
  });
}
