const loginForm =document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')
const togglePassword = document.getElementById('togglePassword')
const error= document.getElementById('errorMessage')
const submitButton = document.getElementById('btn')
const bt = document.getElementById('bt')




togglePassword.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  
        togglePassword.textContent = '🙈';  
    } else {
        passwordInput.type = 'password'; 
        togglePassword.textContent = '👁';  
    }
});


function Default(){
    const user ='admin';
    const pass ='12345';

    if(!localStorage.getItem('username') || !localStorage.getItem('password')){
        localStorage.setItem('username', user)
        localStorage.setItem('password', pass)
        alert(`local added`)
    }
}
function validateCredentials(username, password) {
    const storedUsername = localStorage.getItem('username')
    const storedPassword = localStorage.getItem('password')
    return username === storedUsername && password === storedPassword;
}

loginForm.addEventListener('submit', (r)=>{
    r.preventDefault()
    const username  = usernameInput.value.trim()
    const password  = passwordInput.value.trim() 

    if(validateCredentials(username, password)){
        alert(`Успешно вошли`)
        window.location.href='about.html';

    }else{
        error.textContent='логин или имя неправильный!'
        error.style.display='block'
    }

})


function check(){
        const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    submitButton.disabled = !(username && password);

} 


usernameInput.addEventListener('input',check)
passwordInput.addEventListener('input', check)

Default();

// bt.addEventListener('click',()=>{
//     window.location.href='index.html';
// })





