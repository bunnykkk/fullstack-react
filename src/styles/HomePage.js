setInterval(function () {
  const show = document.querySelector("span[data-show]");
  const next =
    show.nextElementSibling || document.querySelector("span.firstSpan");
  const up = document.querySelector("span[data-up]");

  if (up) {
    up.removeAttribute("data-up");
  }

  show.removeAttribute("data-show");
  show.setAttribute("data-up", "");

  next.setAttribute("data-show", "");
}, 3000);
