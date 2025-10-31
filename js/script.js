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

// dropdown bars edit 
// Dropdown click logic
document.querySelectorAll(".dropdown > a").forEach(drop => {
  drop.addEventListener("click", function(e) {
    e.preventDefault();

    let parent = this.parentElement;
    parent.classList.toggle("active");

    // close others
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("active");
    });
  });
});

function scrollGallery(val) {
  document.querySelector(".gallery-container").scrollBy({
    left: val,
    behavior: "smooth"
  });
}
