const btn = document.getElementById('show-password');
const password = document.getElementById('pass');
const eye = document.getElementById('eye');
btn.addEventListener('click',()=>{
    if (password.type === 'password') {
        password.type = 'text';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
        
       
    } else {
        password.type = 'password';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');

        
        
    }
})

