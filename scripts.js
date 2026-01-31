var typed = new Typed('#element', {
  strings: ['Python Developer', 'Fullstack Developer','Web Devloper','Coder'],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 1000,
  loop: true,
});

document.querySelectorAll("nav a").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");

    if (targetId !== "#") {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const form = document.querySelector(".contact form");
const msg = document.querySelector(".form-msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.querySelector("input[type='text']").value.trim();
  const email = form.querySelector("input[type='email']").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    msg.textContent = " Please fill all fields";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "Message sent successfully!";
  msg.style.color = "green";
  form.reset();
});

const menuIcon = document.querySelector(".menu-icon");
const navItem = document.querySelector(".nav-item");

menuIcon.addEventListener("click", () => {
  navItem.classList.toggle("active");
});

navItem.addEventListener("click", () => {
  navItem.classList.remove("active");
});
