var menu_list = document.querySelectorAll(".left__nav li.item");
menu_list.forEach((item) => {
    item.addEventListener("click", () => {
        // Xóa lớp "active" khỏi tất cả các mục
        menu_list.forEach((el) => el.classList.remove("active"));

        // Thêm lớp "active" vào mục được nhấp
        item.classList.add("active");
    });
});

//typing
const textArray = ["Hello, welcome to my website!",
            "Hope you're having a great day!",
            "Thank you for stopping by!",
            "Wishing you a wonderful experience!",
            "Enjoy your time here!"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150; // Tốc độ gõ chữ
let deleteSpeed = 100; // Tốc độ xóa chữ
let delayBetweenWords = 500; // Thời gian chờ giữa các từ

function typeEffect() {
    let typingElement = document.getElementById("typing");
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

setTimeout(typeEffect, 500); // Khởi động hiệu ứng sau 0.5s


//Nhac nen
let audio = document.getElementById("myAudio");
    let toggleButton = document.getElementById("toggleSound");

    // Kiểm tra trạng thái lưu trữ
    if (localStorage.getItem("musicPlayed") === "true") {
        audio.play();
        toggleButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`; // Cập nhật icon loa bật
    }

    // Hàm bật/tắt nhạc
    toggleButton.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
            localStorage.setItem("musicPlayed", "true");
            toggleButton.innerHTML = `<i class="fa-solid fa-volume-high"></i>`; // Cập nhật icon loa bật
        } else {
            audio.pause();
            localStorage.setItem("musicPlayed", "false");
            toggleButton.innerHTML = `<i class="fa-solid fa-volume-xmark"></i>`; // Cập nhật icon loa tắt
        }
    });
