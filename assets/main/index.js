document.addEventListener("DOMContentLoaded", function () {
console.log("DOM fully loaded and parsed.");

// 📌 Menu Active State
let menuList = document.querySelectorAll(".left__nav li.item");
menuList.forEach((item) => {
    item.addEventListener("click", () => {
        menuList.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
    });
});

// 📌 Typing Effect
const textArray = [
    "Hello, welcome to my website!",
    "Hope you're having a great day!",
    "Thank you for stopping by!",
    "Wishing you a wonderful experience!",
    "Enjoy your time here!"
];
let textIndex = 0, charIndex = 0, isDeleting = false;
let typingSpeed = 150, deleteSpeed = 100, delayBetweenWords = 1000;

function typeEffect() {
    let typingElement = document.getElementById("typing");
    if (!typingElement) return; // Tránh lỗi nếu phần tử không tồn tại

    let currentText = textArray[textIndex];

    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex--);
    } else {
        typingElement.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex > currentText.length) {
        setTimeout(() => { isDeleting = true; typeEffect(); }, delayBetweenWords);
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? deleteSpeed : typingSpeed);
}

setTimeout(typeEffect, 500);

// 📌 SoundCloud Integration
let toggleButton = document.getElementById("toggleSound");
let iframe = document.getElementById("soundCloudPlayer");

if (!iframe || !toggleButton) {
    console.warn("SoundCloud elements are missing.");
    return;
}

let songs = ["https://api.soundcloud.com/tracks/339979427"];
let randomSong = songs[Math.floor(Math.random() * songs.length)];
iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(randomSong)}&color=%23ff5500&auto_play=false&visual=true`;

let isPlaying = false;
let widget;

iframe.onload = function () {
    if (typeof SC !== "undefined" && SC.Widget) {
        widget = SC.Widget(iframe);

        widget.bind(SC.Widget.Events.READY, function () {
            console.log("SoundCloud widget is ready!");
        });

        toggleButton.addEventListener("click", function () {
            if (!widget) return;
            isPlaying ? widget.pause() : widget.play();
            toggleButton.innerHTML = isPlaying ? `<i class="fa-solid fa-volume-xmark"></i>` : `<i class="fa-solid fa-volume-high"></i>`;
            isPlaying = !isPlaying;
        });
    } else {
        console.error("SoundCloud API chưa sẵn sàng");
    }
};
});
