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
  console.log("111");

  next.setAttribute("data-show", "");
}, 2000);
