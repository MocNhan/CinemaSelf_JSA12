const register = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form


    // Bước 1: lấy dữ liệu từ form đăng ký
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;



    // Bươớc 2: kiểm tra dữ liệu hợp lệ
    // regular expression (biểu thức chính quy)
    let lowerCaseLetters = /[a-z]/g;
    let upperCaseLetters = /[A-Z]/g;
    let numbers = /[0-9]/g;

    if (!email || !password || !confirmPassword) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (password !== confirmPassword) {
        alert("Mật khẩu không khớp");
        return;
    }

    if (password.length < 6) {
        alert("Mật khẩu phải có ít nhất 6 ký tự");
        return;
    }
    if (!password.match(lowerCaseLetters)) {
        alert("Mật khẩu phải có ít nhất một chữ cái thường");
        return;
    }
    if (!password.match(upperCaseLetters)) {
        alert("Mật khẩu phải có ít nhất một chữ cái hoa");
        return;
    }

    if (!password.match(numbers)) {
        alert("Mật khẩu phải có ít nhất một số");
        return;
    }

    // Bước 3: Lưu dữ liệu vào localStorage
    let users = JSON.parse(localStorage.getItem("users")) || {};

    // Kiểm tra email đã tồn tại chưa
    if (users[email]) {
        alert("Email đã được đăng ký");
        return;
    } else {
        users[email] = {
            password: password
        }
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng ký thành công");
        window.location.href = "login.html"; // Chuyển hướng qua trang đăng nhập
    }
}
document.querySelector("#signup-form").addEventListener("submit", register);
