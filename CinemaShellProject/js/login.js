const login = (event) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();

    let users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : {};

    let storedUser = users[email];

    if (storedUser && storedUser.password === password) {
        alert('Đăng nhập thành công');
        window.location.href = 'index.html'; // Chuyển hướng qua trang chính
    } else {
        alert('Email hoặc mật khẩu không đúng');
    }
}
document.querySelector('#login-form').addEventListener('submit', login);