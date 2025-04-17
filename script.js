function initScrollToSection() {
  const linksInternos = document.querySelectorAll(".js-scroll a");

  if (linksInternos.length) {
    function handleScroll(event) {
      event.preventDefault();

      const eventHref = event.currentTarget.getAttribute("href");
      const section = document.querySelector(eventHref);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }

    linksInternos.forEach((element) => {
      element.addEventListener("click", handleScroll);
    });
  }
}
initScrollToSection();
