// get element

let email = document.getElementById('input');
let password = document.getElementById('input');
let phone = document.getElementById('input');
let post = document.getElementById('input');
let myForm = document.getElementById('myForm')

// declare regex

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
let postRegex = /\d{4}/ ;

// add event listener 

// email.addEventListener('submit', () => {
//     let str = email.value ;
//     if ( emailRegex.test(str)) {
//         window.alert('Email is Valid') ; 
//     } else {
//        window.alert ('Invalid Email') ;
//     }
// });
// password.addEventListener('submit', () => {
//     let str = password.value ;
//     if ( passRegex.test(str)) {
//         window.alert('Password is Valid') ;
//     } else {
//        window.alert ('Invalid Password') ;
//     }    
// });
// phone.addEventListener('submit', () => {
//     let str = phone.value ;
//     if ( phoneRegex.test(str)) {
//         window.alert('Phone Number is Valid') ;
//     } else {
//        window.alert ('Invalid Phone Number') ;
//     }    
// });
// post.addEventListener('submit', () => {
//     let str = post.value ;
//     if ( postRegex.test(str)) {
//         window.alert('Post code is Valid') ;
//     } else {
//        window.alert ('Invalid Post code') ;
//     }    
// });

myForm.addEventListener('submit', (e) => {
    let emailValue = email.value;
    let passValue = password.value;
    let phoneValue = phone.value;
    let postValue = post.value;

    if (emailRegex.test(emailValue)) {
        alert('Email is valid');
    } else if (passRegex.test(passValue)) {
        alert('Password is valid');
    } else if (phoneRegex.test(phoneValue)) {
        alert('Phone Number is  valid');
    } else if (postRegex.test(postValue)) {
        alert('Post code is valid');
    } else {
        alert('input invalid')
    }

    e.preventDefault();
})



// password.addEventListener('submit', checkValid);
// phone.addEventListener('submit', checkValid);
// post.addEventListener('submit', checkValid);




