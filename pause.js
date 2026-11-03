<script>
  const burger = document.getElementById("burger");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeBtn");

  function ouvrirMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");

    burger.setAttribute("aria-expanded", "true");
    sideMenu.setAttribute("aria-hidden", "false");

    closeBtn.focus();
  }

  function fermerMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

    burger.setAttribute("aria-expanded", "false");
    sideMenu.setAttribute("aria-hidden", "true");

    burger.focus();
  }

  burger.addEventListener("click", function () {
    if (sideMenu.classList.contains("active")) {
      fermerMenu();
    } else {
      ouvrirMenu();
    }
  });

  closeBtn.addEventListener("click", fermerMenu);
  overlay.addEventListener("click", fermerMenu);

  document.addEventListener("keydown", function (event) {
    if (
      event.key === "Escape" &&
      sideMenu.classList.contains("active")
    ) {
      fermerMenu();
    }
  });
</script>