
const navbarScroll = () => {
      let nav = document.getElementById('navbar');
      let navbar = document.getElementById('navbar')

      window.addEventListener('scroll', () => {
            if(window.scrollY){
                  nav.style.backgroundColor = 'black';
                  nav.style.transition = '0.6s';
                  navbar.style.transition = '0.6s';
                  navbar.style.position = 'fixed';
                  navbar.style.top = '0px'
                  // console.log('yes')
            }else if(window.scrollY === 0){
                  nav.style.backgroundColor = 'transparent';
                  navbar.style.position = 'relative';
                  navbar.style.transition = '0.6s';
                  // console.log(scrollY)
            }
            
      })
}

navbarScroll();

// Navbar scroll