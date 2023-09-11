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

const removeJustifyContent = () => {
      let navbarNav = document.getElementById('navbarNav');

      // if(window.innerWidth < 991){
      //       console.log('yes');
      // }else{
      //       console.log('no')
      // }

      // let p = 0

     
     
      // console.log(p)
      
}

navbarScroll();
removeJustifyContent();

// Navbar scroll

