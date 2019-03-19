 
  function openSidemenu() {
    document.getElementById("sidemenu").style.width = "250px";
  }
  
  function closeSidemenu(){
    document.getElementById("sidemenu").style.width = "0";
  }


  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});