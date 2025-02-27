document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ipAddress = document.getElementById('ipAddress').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log('Login attempted with:', { ipAddress, username, password });
    alert('Login functionality would process here. Check console for details.');
});

const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');

passwordToggle.addEventListener('click', function() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    } else {
        passwordInput.type = 'password';
    }
});