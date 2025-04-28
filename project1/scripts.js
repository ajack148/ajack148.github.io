document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const interest = document.querySelector('input[name="interest"]:checked');
            const consent = document.querySelector('input[name="consent"]').checked;

            if (!name || !email || !interest || !consent) {
                alert("Please fill out all fields and agree to the terms!");
                return;
            }

            alert(`Thank you, ${name}! You have successfully subscribed to receive ${interest.value} updates.`);
            form.reset();
        });
    }
});


const bookImage = document.querySelector("figure img");

if (bookImage) {
    bookImage.addEventListener("mouseover", function() {
        bookImage.style.boxShadow = "0 0 15px 5px rgba(0, 0, 0, 0.5)";
    });

    bookImage.addEventListener("mouseout", function() {
        bookImage.style.boxShadow = "none";
    });
}


const inputs = document.querySelectorAll("input[type='text'], input[type='email']");

inputs.forEach(function(input) {
    input.addEventListener("focus", function() {
        input.style.backgroundColor = "#e0f7fa"; 
    });

    input.addEventListener("blur", function() {
        input.style.backgroundColor = ""; 
    });
});


const preorderBtn = document.getElementById("preorder-btn");
const preorderMessage = document.getElementById("preorder-message");

if (preorderBtn && preorderMessage) {
    preorderBtn.addEventListener("click", function() {
        let email = prompt("Please enter your email to preorder:");
        
        if (email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailPattern.test(email)) {
                preorderMessage.textContent = `Thank you! We will email preorder updates to ${email}.`;
                preorderBtn.disabled = true;
                preorderBtn.style.opacity = "0.6";
            } else {
                alert("Please enter a valid email address!");
            }
        } else {
            alert("Email is required to preorder!");
        }
    });
}

let slideIndex = 1;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(n) {
    if (slides.length > 0) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((slide) => {
            slide.style.display = "none";
        });
        slides[slideIndex - 1].style.display = "block";
    }
}

showSlide(slideIndex);


function changeSlide(n) {
    showSlide(slideIndex += n);
}


if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", function() {
        changeSlide(-1);
    });

    nextBtn.addEventListener("click", function() {
        changeSlide(1);
    });
}


