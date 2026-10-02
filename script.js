function login() {

    const keyInput = document.getElementById("key");
    const message = document.getElementById("error");

    const key = keyInput.value.trim();

    // =========================
    // DARKWIZ TEST KEY
    // =========================

    const validKey = "DARKWIZ-2026";


    // ไม่มี Key

    if (key === "") {

        message.textContent = "Please enter your key.";
        message.style.color = "#ff4d6d";

        return;
    }


    // Key ผิด

    if (key !== validKey) {

        message.textContent = "Invalid key.";
        message.style.color = "#ff4d6d";

        return;
    }


    // Key ถูก

    message.textContent = "Key verified.";
    message.style.color = "#32d6ff";


    // เข้า Dashboard

    setTimeout(() => {

        window.location.href = "dashboard.html";

    }, 600);

}