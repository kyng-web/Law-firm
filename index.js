const nav = document.getElementById('navbar');
const navbar = document.getElementById('navbar')

const navbarScroll = () => {

      window.addEventListener('scroll', () => {
            if(window.scrollY){
                  nav.style.backgroundColor = 'black';
                  nav.style.transition = '0.6s';
                  // navbar.style.transition = '0.6s';
                  nav.style.position = 'fixed';
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
      const img = document.getElementById('firmPractice');
      // const img2 =
      // const img3 =
      // const img4 =

      if(n > slides.length){slideIndex = 1}
      if(n < 1){slideIndex = slides.length}
      for(i = 0; i < slides.length; i++){
            slides[i].style.display = 'none';
            // slides[i].style.transition = "3s";
      }
      
      slides[slideIndex-1].style.display = "block";
      currentSlide.innerHTML = `${slideIndex}/5`
      // slides[slideIndex-1].style.backgroundImage = 'url(../images/back4.jpeg)'
      // slides[slideIndex-1].style.transition = "3s";

      switch(slideIndex){
            case 1:
                  console.log(1)
                  img.style.backgroundImage = "url('../images/busniess.jpg')"
            break;
            case 2:
                  console.log(2)
                  img.style.backgroundImage = "url('../images/bankruptcy.jpg')"
            break;
            case 3:
                  console.log(3)
                  img.style.backgroundImage = "url('../images/handcuffs2.jpg')"
            break;
            case 4:
                  console.log(4);
                  img.style.backgroundImage = "url('../images/tax.jpg')"
            break;
            case 5:
                  console.log(5)
                  img.style.backgroundImage = "url('../images/family.jpg')"
            break;
      }



      
}

showSlides(slideIndex);


