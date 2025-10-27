let menu = document.querySelector('#menu-btn');
let navbarLinks = document.querySelector('.navbar .links');

menu.onclick = () => {
   menu.classList.toggle('fa-times'); // toggles X icon
   navbarLinks.classList.toggle('active'); // slide menu in/out
};

window.onscroll = () => {
   menu.classList.remove('fa-times');
   navbarLinks.classList.remove('active');

   if(window.scrollY > 60){
      document.querySelector('.navbar').classList.add('active');
   } else {
      document.querySelector('.navbar').classList.remove('active');
   }
};
