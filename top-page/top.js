'use strict';

const btn = document.getElementById('js-hamberger');
const nav = document.getElementById('js-nav');

btn.addEventListener("click",()=>{
  btn.classList.toggle('active');
  nav.classList.toggle('active');
})
