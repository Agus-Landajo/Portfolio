$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
    })

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })

    $(".carousel").owlCarousel({
        margin:20,
        loop: true,
        autoplayTimeoue: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:1,
                nav:false,
            },
            900:{
                items:2,
                nav:false,
                
            },
            1000:{
                items:3,
                nav:false,
                
            },
        }
    })

    var typed = new Typed(".typing", {
        strings: ["Programador","Desarrollador","Maquetador","Diseñador"],
        typeSpeed: 90,
        backSpeed: 50,
        loop: true,
    })
})


