const items = document.querySelectorAll(".moveable");

items.forEach((item) => {
  const maxDistance = 20;
  let timeout;

  item.addEventListener("mousemove", (e) => {
    clearTimeout(timeout);

    const rect = item.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = cx - e.clientX;
    const dy = cy - e.clientY;
    const distance = Math.sqrt(dx * dx + dy * dy) || 1;

    const moveX = (dx / distance) * maxDistance;
    const moveY = (dy / distance) * maxDistance;

    item.style.transition = "transform 0.15s ease-out";
    item.style.transform = `translate(${moveX}px, ${moveY}px)`;

    timeout = setTimeout(() => {
      item.style.transition = "transform 0.5s ease-in-out";
      item.style.transform = "translate(0, 0)";
    }, 150);
  });

  item.addEventListener("mouseleave", () => {
    item.style.transition = "transform 0.5s ease-in-out";
    item.style.transform = "translate(0, 0)";
  });
});

//ICONS

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".skill-btn");

  buttons.forEach((btn) => {
    const bg = btn.querySelector(".skill-bg");

    btn.addEventListener("mouseenter", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bg.style.left = x + "px";
      bg.style.top = y + "px";
      bg.style.width = "200px";
      bg.style.height = "200px";
    });

    btn.addEventListener("mouseleave", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bg.style.left = x + "px";
      bg.style.top = y + "px";
      bg.style.width = "0";
      bg.style.height = "0";
    });
  });
});

//buttons

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".skill-btn-rect");

  buttons.forEach((btn) => {
    const circle = btn.querySelector("span");

    function setPosition(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      circle.style.left = x + "px";
      circle.style.top = y + "px";
    }

    btn.addEventListener("mouseenter", setPosition);
    btn.addEventListener("mousemove", setPosition);
    btn.addEventListener("mouseleave", setPosition);
  });
});

//contact

document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".contact-box");

  boxes.forEach((box) => {
    const bg = box.querySelector(".contact-bg");

    box.addEventListener("mousemove", (e) => {
      const rect = box.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      bg.style.left = x + "px";
      bg.style.top = y + "px";
    });

    box.addEventListener("mouseenter", () => {
      bg.style.width = "300px";
      bg.style.height = "300px";
    });

    box.addEventListener("mouseleave", () => {
      bg.style.width = "0px";
      bg.style.height = "0px";
    });
  });
});

// ACTIVE SCROLL LINK
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section, .hero");

function updateActive() {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop;
    if (scrollY >= top - 200) current = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}
window.addEventListener("scroll", updateActive);

// DRAG NAVBAR
const navbar = document.querySelector(".navbar");
let drag = false,
  startX,
  startY;

navbar.addEventListener("mousedown", (e) => {
  if (e.target.closest("a")) return;
  drag = true;
  startX = e.clientX - navbar.offsetLeft;
  startY = e.clientY - navbar.offsetTop;
  navbar.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
  if (!drag) return;
  navbar.style.left = `${e.clientX - startX}px`;
  navbar.style.top = `${e.clientY - startY}px`;
  navbar.style.transform = "none";
});

document.addEventListener("mouseup", () => {
  drag = false;
  navbar.style.cursor = "grab";
});
