// FAQ Menu
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".faq-menu").addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
      const activeLink = e.target;
      const otherLinks = document.querySelectorAll(".faq-link");

      otherLinks.forEach((otherLink) => {
        if (otherLink !== activeLink) {
          otherLink.classList.remove("active");
        }
      });
    }
  });
});

// FAQ Content
document.addEventListener("DOMContentLoaded", () => {
  const faqContent = document.querySelector(".faq-content");

  faqContent.addEventListener("click", (e) => {
    const groupHeader = e.target.closest(".faq-header");

    if (!groupHeader) return;

    const group = groupHeader.parentElement;
    const groupBody = group.querySelector(".faq-body");
    const groupIcon = groupHeader.querySelector(".faq-header i");

    groupBody.classList.toggle("open");
    groupIcon.classList.toggle("fa-plus");
    groupIcon.classList.toggle("fa-minus");

    const otherGroups = document.querySelectorAll(".faq-group");

    otherGroups.forEach((otherGroup) => {
      if (otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector(".faq-body");
        const otherGroupIcon = otherGroup.querySelector(".faq-header i");

        otherGroupBody.classList.remove("open");
        otherGroupIcon.classList.remove("fa-minus");
        otherGroupIcon.classList.add("fa-plus");
      }
    });
  });
});

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
