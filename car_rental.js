/// language button 

$(document).ready(()=>{
    $(".drop-menu").hide();
    $("#lang-btn").click(()=>{
        $('.drop-menu').toggle();
    });
});

/// scroll top to bottom button

$(document).ready(()=>{
    $(window).scroll(() => {
        if ($(window).scrollTop() > 300) {
            $('.scroll-btn').show();
        } else {
            $('.scroll-btn').hide();
        }
    });  

    $('.scroll-btn').click(()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
        
    })
    
})

/// car slider ///
$('.car-slider').owlCarousel({
    loop:true,
    autoplay:true,
    nav:true,
    margin:10,
    dots:false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

//scroll navbar

$(document).ready(()=>{
    $(window).scroll(() => {
        if ($(window).scrollTop() > 0) {
            $('.navbar').addClass('navbar-scroll');
            $('.head-link').addClass('h-link');
            $('.navbar a span').addClass('icon-rod');
        } else {
            $('.navbar').removeClass('navbar-scroll');
            $('.head-link').removeClass('h-link');
            $('.navbar a span').removeClass('icon-rod');
        }
    });   
})

// vehicles button
$(document).ready(()=>{
    $(".cars").hide();
    var value;    
    $("#vehicle-btn1").addClass('vehicle-btn-color');
    $("#vehicle-btn1").addClass('select-btn');
    $("#vehicle1").show();

    let mybtn =document.getElementById('veh').querySelectorAll("button");
    var btnlen=[];

    mybtn.forEach(element => {
        btnlen.push(element.value)
    });

    var i,j;
    for(i=1;i<=6;i++){
        showbtn="#vehicle-btn"+i;
        $(showbtn).show();
    }
    for(j=7;j<=btnlen.length;j++){
        showbtn="#vehicle-btn"+j;
        $(showbtn).hide();
    }

    i=1;
    j=7;

    function upbtn(){ 
       if(i>0 && j>7){
        j--;
        i--;
        if(i<1){
            i=1;
        }
        showbtn="#vehicle-btn"+i;
        $(showbtn).show();
        showbtn="#vehicle-btn"+j;
        $(showbtn).hide();
       }
    }

    function downbtn(){
        if(i<5 && j<btnlen.length+1){
            let upbtn="#vehicle-btn"+i;
            $(upbtn).hide();
            let downbtn="#vehicle-btn"+j;
            $(downbtn).show();
            i++;
            j++;
            if(j>btnlen+1){
                j=btnlen+1;
            }
        }
    }

    $('#up-btn').click(()=>{
        upbtn()
    })
    $('#down-btn').click(()=>{
        downbtn();
    })       

    function addbtn(vbtn,cbtn){
        $(vbtn).addClass('vehicle-btn-color');
        $(vbtn).addClass('select-btn');
        $(cbtn).show(1000);
    }
    function rembtn(vbtn,cbtn){
        $(vbtn).removeClass('vehicle-btn-color');
        $(vbtn).removeClass('select-btn');
        $(cbtn).hide(1000);
    }
    var prebtn=$("#vehicle-btn1")
    var cbtn=$("#vehicle1")
    

    $(".vehicle-btn").click(function() {
        rembtn(prebtn,cbtn);
        prebtn=$(this);
        value = $(this).val();
        let vbtn ="#vehicle-btn"+value;
        cbtn ="#vehicle"+value;
        addbtn(vbtn,cbtn);
    });        
});


$('.review-slider').owlCarousel({
    loop:true,
    autoplay:true,
    nav:false,
    margin:10,
    dots:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

