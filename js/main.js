document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
  

function toggleMenu() {
  const menu = document.querySelector('.burger-menu');
  menu.classList.toggle('active');
}
function toggleMenu() {
  let navBar = document.getElementById("navi");
  navBar.classList.toggle("active");
}



  const getReady = document.getElementById('getReady');
  const redy = getReady.querySelector('p');
  redy.textContent = redy.textContent.toUpperCase();


  const homer = document.querySelector('.logo');
  homer.addEventListener('click', function Homer(){
    window.location.href = 'index.html'
  })

  const homer2 = document.querySelector('.logo');
  homer.addEventListener('click', function Homer(){
    window.location.href = 'index.html'
  })

  const offer = document.querySelector('.logo');
  offer.addEventListener('click', function Offerer(){
    window.location.href = 'offerings.html'
  })

const location = document.getElementById('.location');
location.addEventListener('clik', function location(){
  window.location.href = 'Location.html'
})


