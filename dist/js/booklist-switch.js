document.addEventListener('DOMContentLoaded', function(){
  let http = new XMLHttpRequest();
  http.open('GET', 'js/booklist-spag.js', true);
  http.onload = function(){
      // console.log(this.responseText);
      let myScript = this.responseText;
      let theScript = document.querySelector('.current-script');
      theScript.textContent = myScript;
  }
  http.send();
})

const es6Btn = document.getElementById('es6');
const es5Btn = document.getElementById('es5');
const spagBtn = document.getElementById('spag');

es6Btn.addEventListener('click', function(){

  let theScript = document.querySelector('#myScript');
  theScript.setAttribute('src', 'js/booklist-es6.js');


  let http = new XMLHttpRequest();
  http.open('GET', 'js/booklist-es6.js', true);
  http.onload = function(){
      let myScript = this.responseText;
      let theScript = document.querySelector('.current-script');
      theScript.textContent = myScript;
  }
  http.send();
})

es5Btn.addEventListener('click', function(){

  let theScript = document.querySelector('#myScript');
  theScript.setAttribute('src', 'js/booklist-es5.js');


  let http = new XMLHttpRequest();
  http.open('GET', 'js/booklist-es5.js', true);
  http.onload = function(){
      let myScript = this.responseText;
      let theScript = document.querySelector('.current-script');
      theScript.textContent = myScript;
  }
  http.send();
})

spagBtn.addEventListener('click', function(){

  let theScript = document.querySelector('#myScript');
  theScript.setAttribute('src', 'js/booklist-spag.js');


  let http = new XMLHttpRequest();
  http.open('GET', 'js/booklist-spag.js', true);
  http.onload = function(){
      let myScript = this.responseText;
      let theScript = document.querySelector('.current-script');
      theScript.textContent = myScript;
  }
  http.send();
})

// MODAL
const btn = document.querySelector('#closeModal');
const modal = document.querySelector('.modal');
const modalCont = document.querySelector('.modal-content');

document.addEventListener('DOMContentLoaded', function(){
	modal.style.display = 'block';
  modalCont.style.display = 'block';
})

// modal.addEventListener('click', function(e){
//   if(e.target.classList.contains('modal')){ 
//   	modal.style.display = 'none';
//   	modalCont.style.display = 'none';    
//   }
//     console.log(e.target);
// });

btn.addEventListener('click', function(){
   
  	modal.style.display = 'none';
  	modalCont.style.display = 'none';    
  
});