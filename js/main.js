function toggleSearchPopup() {
    let overlay = document.getElementById("overlay");
    let popup = document.getElementById("search-popup");
  
    overlay.classList.toggle("show-overlay");
    popup.classList.toggle("show-popup");
  }
  
  function hideSearchPopup() {
    let overlay = document.getElementById("overlay");
    let popup = document.getElementById("search-popup");
  
    overlay.classList.remove("show-overlay");
    popup.classList.remove("show-popup");
  }
  

  const getReady = document.getElementById('getReady');
  const redy = getReady.querySelector('p');
  redy.textContent = redy.textContent.toUpperCase();


  const homer = document.querySelector('.logo');
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

const loss = ''
