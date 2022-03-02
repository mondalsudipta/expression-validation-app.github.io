// get element

let email = document.getElementById('input');
let password = document.getElementById('input');
let phone = document.getElementById('input');
let post = document.getElementById('input');
let myForm = document.getElementById('myForm')

//get form selected field

let emailSelect = document.getElementById("email");
let passwordSelect = document.getElementById("password");
let phoneSelect = document.getElementById("phone");
let postSelect = document.getElementById("post");
let selectedField = document.getElementById("most-like");

console.log(selectedField[1]);

//console.log(emailSelect);
//console.log(passwordSelect);
//console.log(phoneSelect);
//console.log(postSelect);


// declare regex

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
let phoneRegex = /^(?:\+88|88)?(01[3-9]\d{8})$/;
let postRegex = /^\d{4}$/;




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




//tried in different ways

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





// password.addEventListener('submit', checkValid);
// phone.addEventListener('submit', checkValid);
// post.addEventListener('submit', checkValid);

// myForm.addEventListener('submit', (e) => {
//     let emailValue = email.value.trim();
//     let passValue = password.value.trim();
//     let phoneValue = phone.value.trim();
//     let postValue = post.value.trim();


//     for (let i = 1; i < selectedField.length; i++) {

//         if (selectedField[i] == emailSelect) {
//             if (emailRegex.test(emailValue)) {
//                 alert('This is a valid Email address');
//             } else {
//                 alert('Wrong Input')
//             }
//         }
//         else if (selectedField[i] == passwordSelect) {
//             if (passRegex.test(passValue)) {
//                 alert('This is a valid password');
//             } else {
//                 alert('Wrong Input')
//             }
//         } 
//         else if (selectedField[i] === phoneSelect) {
//             if (phoneRegex.test(phoneValue)) {
//                 alert('This is a valid Phone Number');
//             } else {
//                 alert('Wrong Input')
//             }
//         }
//         else if (selectedField[i] === postSelect) {
//             if (postRegex.test(postValue)) {
//                 alert('This is a valid Post code');
//             } else {
//                 alert('Wrong Input')
//             }
//         }
//     }



//     e.preventDefault();

// })




// myForm.addEventListener('submit', (e) => {
//     let emailValue = email.value;
//     let passValue = password.value;
//     let phoneValue = phone.value;
//     let postValue = post.value;



// let value = emailSelect;
// switch (value) {
//     case emailSelect:
//         if (emailRegex.test(emailValue)) {
//             alert('Email is valid');
//         }
//         break;
//     case passwordSelect:
//         if (passRegex.test(passValue)) {
//             alert('Password is valid');
//         }
//         break;
//     case phoneSelect:
//         if (phoneRegex.test(phoneValue)) {
//             alert('Phone Number is  valid');
//         }
//         break;
//     case postSelect:
//         if (postRegex.test(postValue)) {
//             alert('Post code is valid');
//         }
//         break;
//     default:
//         alert('Wrong Input')
// }

// e.preventDefault();

// })