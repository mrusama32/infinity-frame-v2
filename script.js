// =======================================
// Infinity Frame - Script Part 1
// Typing Animation
// =======================================

const text = [
    "Front-End Web Developer",
    "Digital Creator",
    "Founder of Infinity Frame",
    "Freelancer"
];

let textIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function type() {

    if (!typing) return;

    if (charIndex < text[textIndex].length) {

        typing.textContent += text[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(type, 100);

    } else {

        setTimeout(erase, 1500);

    }

}

function erase() {

    if (charIndex > 0) {

        typing.textContent = text[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(erase, 50);

    } else {

        textIndex++;

        if (textIndex >= text.length) {

            textIndex = 0;

        }

        setTimeout(type, 300);

    }

}

if (typing) {

    type();

}// =======================================
// Infinity Frame - Script Part 2
// EmailJS Contact Form
// =======================================

// EmailJS Initialize

emailjs.init({
    publicKey: "syxcuedUgo_6fJLt6"
});

// Contact Form

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(

            "service_musama786",
            "template_yoqkuxf",
            this

        )

            .then(function () {

                alert("✅ Message Sent Successfully!");

                contactForm.reset();

            })

            .catch(function (error) {

                console.log(error);

                alert(JSON.stringify(error));

            });

    });

}// =======================================
// Infinity Frame - Script Part 3
// Smooth Scroll + Active Navigation
// =======================================

// Smooth Scroll

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(function (link) {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// Active Navigation Link

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});