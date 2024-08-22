
/* function to change text on contact area */

const contactParagraph = document.querySelector('.contact_text_paragraph');
if (window.matchMedia("(max-width: 1279px)").matches) {
  contactParagraph.innerHTML = contactParagraph.innerHTML.replace('formulário ao lado', 'formulário abaixo');
}

/* function to scroll the content  below the banner */
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
/* function add class show to the menu_sandwish on mobile screens */
const menuButton = document.querySelector('.menu');
const menuSandwich = document.querySelector('.menu-sandwich');

menuButton.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 1280px)").matches) {
    menuSandwich.classList.toggle('show');
  }
});

const projectImages = document.querySelectorAll('.project_image');

projectImages.forEach((image) => {
  const imageUrl = image.getAttribute('data-image-src');
  image.style.backgroundImage = `url(${imageUrl})`;
});


