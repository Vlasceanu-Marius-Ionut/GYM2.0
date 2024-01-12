function toggleSearchPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("search-popup");
  
    overlay.classList.toggle("show-overlay");
    popup.classList.toggle("show-popup");
  }
  
  function hideSearchPopup() {
    var overlay = document.getElementById("overlay");
    var popup = document.getElementById("search-popup");
  
    overlay.classList.remove("show-overlay");
    popup.classList.remove("show-popup");
  }
  

  const getReady = document.getElementById('getReady');
  const redy = getReady.querySelector('p');
  redy.textContent = redy.textContent.toUpperCase();

