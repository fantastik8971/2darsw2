// const myStudents = [
//     {
//         ism:"sanjar",
//         login:2222,
//         parol:1212,

//     },
//     {
//         ism:"elshod",
//         login:2252,
//         parol:1242,


//     }
// ]

// let userLogin = +prompt("login kiriting");
// let userParol = +prompt("parol kiriting");


// const result = myStudents.find(item.login == userLogin && item.parol == userParol)



// const  group897 = {

// ism:"sanjar ",
// familya:"safarov",
// age:14,
// shahar:"Toshkent",
// sinf:"9-sinf",
// boyim:1.80,
// rayon:"yunusobod",
// oquvmarkazi:"mars IT",




// }

// console.log(group897["boyim"]);


let userForm = document.querySelector(".form");
let userInput = document.querySelector(".input");
let userBtn = document.querySelector(".Btn");

userForm.addEventListener("submit" ,  (evt)=>{
evt.preventDefault();
let nexText = document.createElement("h2");
nexText.nextContent = userInput.ariaValueMax;
document.body.appendChild(nexText)


})
