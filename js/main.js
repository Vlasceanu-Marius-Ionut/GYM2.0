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

  document.addEventListener("DOMContentLoaded", function() {
    let carouselContainer = document.querySelector(".carousel");

    let carouselImages = [
        "path/to/image1.jpg",
        "path/to/image2.jpg",
        "path/to/image3.jpg",
    ];
    carouselImages.forEach(function(imagePath) {
        let imgElement = document.createElement("img");
        imgElement.src = imagePath;
        carouselContainer.appendChild(imgElement);
    });
    $(carouselContainer).slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});
