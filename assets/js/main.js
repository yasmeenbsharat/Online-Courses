
$(document).ready(function(){
    
    $('.carousel_01').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    $('.carousel_02').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.carousel_03').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        center:true,
        onDragged:triggerNext,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });


    function triggerNext(event){
        if(event.target.classList.contains('carousel_03')){
            $('.carousel_04').trigger('next.owl.carousel')
        }
        else if(event.target.classList.contains('carousel_04')){
            $('.carousel_03').trigger('next.owl.carousel')
        }
    }

    $('.carousel_04').owlCarousel({
        loop:true,
        margin:10,
        onDragged:triggerNext,
        items:1
          
    });
  });
  

  


let countDownDate=new Date('Feb 15,2023,15:59:59').getTime();
let countDown= setInterval(function(){
    let now=new Date().getTime();
    let distance=countDownDate-now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

    if(distance<=0){
        document.getElementById("timer").innerHTML="Expired";
    }
    
    
},1000);