const nav = document.getElementById('navbar');
const navbar = document.getElementById('navbar')

const navbarScroll = () => {

      window.addEventListener('scroll', () => {
            if(window.scrollY){
                  nav.style.backgroundColor = 'black';
                  nav.style.transition = '0.6s';
                  // navbar.style.transition = '0.6s';
                  nav.style.position = 'sticky';
                  nav.style.top = '0px'
                  // console.log('yes')
            }else if(window.scrollY === 0){
                  nav.style.backgroundColor = 'transparent';
                  nav.style.position = 'relative';
                  // nav.style.transition = '0.6s';
                  // console.log(scrollY)
            }
            
      })
}

navbarScroll();

// End of Navbar Scroll
let slideIndex = 1;

const nextSlide = (n) =>{
      showSlides(slideIndex += n)
}

// const currentSlide = () => {
//       showSlides(slideIndex = n)
// }

const showSlides = (n) => {
      let slides = document.getElementsByClassName('practice-child');
      // let slidesback = document.getElementById
      let currentSlide = document.getElementById('currentSlide');

      if(n > slides.length){slideIndex = 1}
      if(n < 1){slideIndex = slides.length}
      for(i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
            // slides[i].style.transition = "3s";
      }
      
      slides[slideIndex-1].style.display = "block";
      // slides[slideIndex-1].style.backgroundImage = 'url(../images/back4.jpeg)'
      // slides[slideIndex-1].style.transition = "3s";

      currentSlide.innerHTML = `${slideIndex}/5`


      
}

showSlides(slideIndex);


