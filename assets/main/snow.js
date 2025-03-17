document.addEventListener("DOMContentLoaded", () => {
    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.innerHTML = "❄";
        snowflake.classList.add("snowflake");
        
        // Đặt vị trí cố định để không bị ảnh hưởng khi cuộn
        snowflake.style.position = "fixed";
        snowflake.style.left = Math.random() * window.innerWidth + "px";
        snowflake.style.top = "-10px"; // Bắt đầu từ trên cùng của màn hình
        snowflake.style.fontSize = Math.random() * 10 + 10 + "px";
        snowflake.style.opacity = Math.random();
        snowflake.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        
        document.body.appendChild(snowflake);
        
        // Xóa tuyết sau khi rơi xong
        setTimeout(() => {
            snowflake.remove();
        }, 5000);
    }

    function startSnowfall() {
        requestAnimationFrame(() => {
            createSnowflake();
            setTimeout(startSnowfall, 200);
        });
    }

    startSnowfall();
});
