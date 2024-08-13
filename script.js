window.addEventListener("load", function() {
    document.getElementById("about").scrollIntoView();
  });

  let aboutTop = document.getElementById('about').offsetTop;

  window.addEventListener('scroll', function(event) {
    let scrollPosition = window.scrollY;
    if (scrollPosition < aboutTop) {
      window.scrollTo(0, aboutTop);
    }
  });

const menuButton = document.querySelector('.menu');
const menuSandwich = document.querySelector('.menu-sandwich');

menuButton.addEventListener('click', () => {
    menuSandwich.classList.toggle('show');
});

const projectImages = document.querySelectorAll('.project_image');

projectImages.forEach((image) => {
  const imageUrl = image.getAttribute('data-image-src');
  image.style.backgroundImage = `url(${imageUrl})`;
});