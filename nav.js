// Shared top menu. To add a project, add a line to its group in PROJECTS and create projects/<slug>.html.
(function () {
  var PROJECTS = [
    ["Rendering", [
      ["opengl-scene", "OpenGL Shader Scene"],
      ["deferred-renderer", "Deferred Renderer"],
      ["pbr-renderer", "PBR Renderer"],
      ["path-tracer", "CPU Path Tracer"],
      ["cel-shader", "Cel Shader"]
    ]],
    ["Vision & Image Processing", [
      ["movement-filter", "Real-time Movement Filter"],
      ["sheet-music", "Sheet Music Recognition"],
      ["minimou", "Minimou"],
      ["fast-marching", "Numba Fast Marching"]
    ]],
    ["Medical Imaging", [
      ["pulmetrix", "PulMetrix"],
      ["tumor-study", "Tumor Progression Study"]
    ]]
  ];

  var tag = document.querySelector("script[data-root]");
  var root = tag ? tag.getAttribute("data-root") : "";
  var page = location.pathname.split("/").pop();

  var groups = PROJECTS.map(function (g) {
    var links = g[1].map(function (p) {
      var current = page === p[0] + ".html" ? ' aria-current="page"' : "";
      return '<li><a href="' + root + "projects/" + p[0] + '.html"' + current + ">" + p[1] + "</a></li>";
    }).join("");
    return '<div class="menu-group"><p>' + g[0].replace("&", "&amp;") + "</p><ul>" + links + "</ul></div>";
  }).join("");

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Main");
  nav.innerHTML =
    '<a class="brand" href="' + root + 'index.html">Alexis Meunier</a>' +
    '<div class="nav-right">' +
    '<details class="menu"><summary>Projects</summary><div class="menu-panel">' + groups + "</div></details>" +
    '<a href="' + root + 'index.html#contact">Contact</a>' +
    "</div>";
  document.body.insertBefore(nav, document.body.firstChild);

  var menu = nav.querySelector(".menu");
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target)) menu.removeAttribute("open");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") menu.removeAttribute("open");
  });
})();
