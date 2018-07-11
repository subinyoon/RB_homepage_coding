$(document).ready(function(){

    portfolioDetailPage();
    
}); //document ready END

function portfolioDetailPage(){
    content1();
}

function content1(){
    
    //img target
    var $img1 = $(".black_img");
    
    volumeControl();
        
    $(".animation_wrap").on("click", function(){
            
        var transition = document.getElementById("audio_transition");
            
        transition.volume = 0.02;
        transition.play();
            
        if($img1.css('opacity') == 1) {
            fadeOut();
        }else if($img1.css('opacity') == 0){
            fadeIn();
        }

    }); // click END
}
    
function fadeOut(){
    
    //img target
    var $img1 = $(".black_img");

    $img1.stop().animate({
        opacity:0
    },2000,"linear",function(){
        //console.log("fade out");
    });
}
    
function fadeIn(){
    
    //img target
    var $img1 = $(".black_img");
            
    $img1.stop().animate({
        opacity:1
    },2000,"linear",function(){
        //console.log("fade in");
    });
}
    
function volumeControl(){
    var x = document.getElementById("main_audio");
    x.volume = 0.01;
}

      