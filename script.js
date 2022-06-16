"use strict"
document.querySelectorAll("header ul li")[0].style.backgroundColor = '#ff3f40';
document.querySelectorAll("header ul li").forEach(element => {
     element.addEventListener('click',()=>{
          document.querySelectorAll("header ul li").forEach(element => {
               element.style.backgroundColor = 'transparent';
          });
          element.style.backgroundColor = '#ff3f40';
     })
});


setInterval(() => {
     console.log(document.documentElement.clientWidth + 'px');
     document.querySelector("body").style.width = document.documentElement.clientWidth + 'px';

     document.querySelectorAll(".background").forEach(element => {
          element.style.width = document.documentElement.clientWidth + 'px';
     });
}, 100);
