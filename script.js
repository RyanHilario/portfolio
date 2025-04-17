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

function initEmergeAnimation() {
  const sections = document.querySelectorAll(".js-emerge");
  const windowParte = window.innerHeight * 0.6;

  if (sections.length) {
    function handleEmerge() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowParte < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    handleEmerge();
    window.addEventListener("scroll", handleEmerge);
  }
}
initEmergeAnimation();
