// // Fonctionnalité 1 :
// let footerEl = document.querySelector("footer");
// var cliqueConsole1 = function(){
//   console.log("Bravo!");
// };
// footerEl.addEventListener('click',cliqueConsole1);

// // Fonctionnalité 1-bis :
// let i = 0;
// var cliqueConsole2 = function(){
//   console.log(`Bravo! Tu peux spammer le bouton de ta souris (click n° ${i++})`);
// };
// footerEl.addEventListener('click',cliqueConsole2);

// // Fonctionnalité 2 :
// let hamburgerEl = document.querySelector(".navbar-toggler-icon");
// let navEl = document.getElementById("navbarHeader");
//  function collapseOnOff() {
//   navEl.classList.toggle("collapse");
// };
// hamburgerEl.addEventListener("click",collapseOnOff);

// // Fonctionnalité 3 :
// const editEl1 = document.querySelectorAll('.btn-outline-secondary')[0];
// const cardEl1 = document.querySelectorAll('.card-text')[0];
// var changeTextToRed = function() {
// cardEl1.style.color = "red";
// };
// editEl1.addEventListener("click",changeTextToRed)

// Fonctionnalité 4 :
// const editEl2 = document.querySelectorAll('.btn-outline-secondary')[1];
// const cardEl2 = document.querySelectorAll('.card-text')[1];
// function changeTextToGreenOrNot(){
//   if (cardEl2.style.color === 'green'){
//       cardEl2.style.color = '' ;
//   } else cardEl2.style.color = "green";
// };
// editEl2.addEventListener("click",changeTextToGreenOrNot);

// // Fonctionnalité 5 :
// let headerEl = document.querySelector('div.navbar');
// let bootEl = document.querySelector('link');
// var ciaoBoot = function(){
// if (bootEl.disabled === false) {
//   bootEl.disabled = true;
// }
// else {
//   bootEl.disabled = false;
//   }
// };  
// headerEl.addEventListener("dblclick",ciaoBoot);

// // Fonctionnalité 6:
let viewCard = document.getElementsByClassName("btn-success");
for (let i = 0; i < viewCard.length; i++){
  viewCard[i].addEventListener("mouseover", function(){
  document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
  document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
  })
};

// // Fonctionnalité 7:

const parent = document.querySelector('.album .row');
const btnEl1 = document.querySelector('section .btn-secondary');

btnEl1.addEventListener('click', function (e) {
    e.preventDefault();
    parent.insertBefore(parent.lastElementChild, parent.firstElementChild);
});

// Fonct 8

const btnEl2 = document.querySelector('section .btn-primary');

btnEl2.removeAttribute('href');

btn2.addEventListener('click', function (e) {
    e.preventDefault();
    parent.insertBefore(parent.firstElementChild, parent.lastElementChild.nextSibling)
});
