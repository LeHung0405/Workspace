document.getElementById("signin").addEventListener("click", function () {
    const username = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    // Kiểm tra nếu không nhập thông tin
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Giả lập kiểm tra tài khoản
    if (username === "admin" && password === "123456") {
        alert("Login successful! Welcome " + username);
        // Thực hiện chuyển hướng
        window.location.href = "/dashboard.html";
    } else {
        alert("Invalid username or password.");
    }
});
