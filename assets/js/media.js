let mediaQuery=window.matchMedia('(max-width:767px)');
if(mediaQuery.matches){
    let newHead=document.getElementsByClassName('myCarousel');
    newHead.outerHTML=
    `
    <div class="carousel-item ">
    <img src="assets/img/slide1.jpg" class="d-block w-100" alt="..." />
    <div class="carousel-caption d-md-block">
      <h1>
        the best theme for
        <p>education</p>
      </h1>
      <a href="#" class="mainbtn">buy now</a>
    </div>
  </div>
    
    `
}