// Shared top menu. To add a project, add a line to PROJECTS and create projects/<slug>.html.
(function () {
  var PROJECTS = [
    ["cel-shader", "Cel Shader"],
    ["path-tracer", "CPU Path Tracer"],
    ["movement-filter", "Real-time Movement Filter"],
    ["minimou", "Minimou"],
    ["pbr-renderer", "PBR Renderer"],
    ["sheet-music", "Sheet Music Recognition"]
  ];

  var tag = document.querySelector("script[data-root]");
  var root = tag ? tag.getAttribute("data-root") : "";
  var page = location.pathname.split("/").pop();

  var items = PROJECTS.map(function (p) {
    var current = page === p[0] + ".html" ? ' aria-current="page"' : "";
    return '<li><a href="' + root + "projects/" + p[0] + '.html"' + current + ">" + p[1] + "</a></li>";
  }).join("");

  var nav = document.createElement("nav");
  nav.className = "site-nav";
  nav.setAttribute("aria-label", "Main");
  nav.innerHTML =
    '<a class="brand" href="' + root + 'index.html">Alexis Meunier</a>' +
    '<div class="nav-right">' +
    '<details class="menu"><summary>Projects</summary><ul>' + items + "</ul></details>" +
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
