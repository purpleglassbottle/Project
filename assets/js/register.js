const form_user=document.querySelector('#form');

    form_user.addEventListener('submit', validateForm)


function validateForm(e){
    e.preventDefault();
    console.log('validating form')
    const username=document.querySelector('#username').value;
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    const password2=document.querySelector('#password-confirm').value;
    const error=document.querySelector('.error');

    console.log(username)
    console.log(email)
    console.log(password)
    console.log(password2)
    
}