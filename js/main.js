    $(document).ready(function(){
        
        easeScroll();
        menuScroll();
        showTexture();
        showBoxes();
        
        
    }); //document ready END


function showTexture(){
    $(".menu ul li").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            $(".solid_2").css({'display':'none'});
            
        
            if(i == 2){
                $(".texture_"+i).css({'display':'block'});
                $(".solid_8").css({'display':'block'});
                
                
            }else if(i == 3){
                $(".texture_"+i).css({'display':'block'});
                $(".solid_7").css({'display':'block'});
                $(".solid_4").css({'display':'block'});
                
            }else{
                $(".texture_"+i).css({'display':'block'});
                $(".solid_9").css({'display':'block'});
            }
        });
        
        $(".menu ul li").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            $(".solid_2").css({'display':'block'});
            
            if(i == 2){
                $(".texture_"+i).css({'display':'none'});
                $(".solid_8").css({'display':'none'});

            }else if(i == 3){
                $(".texture_"+i).css({'display':'none','opacity':'0.7'});
                $(".solid_7").css({'display':'none'});
                $(".solid_4").css({'display':'none'});
            }else{
                $(".texture_"+i).css({'display':'none'});
                $(".solid_9").css({'display':'none'});
            }
        });
}

function showBoxes(){
    $(".client_boxes .row_1 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+i).css({'background':'#fff', 'cursor':'pointer'});
        });
    
    $(".client_boxes .row_2 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+(i+3)).css({'background':'#fff', 'cursor':'pointer'});
        });
    
    $(".client_boxes .row_1 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+i).css({'background':'#f4f4f4'});
        });
    
    $(".client_boxes .row_2 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+(i+3)).css({'background':'#f4f4f4'});
        });
}

function menuScroll(){
    $(".menu3").click(function() {
    $('html,body').stop().animate({
        scrollTop: $(".wrap_3").offset().top}, 1000, 'swing');
    }); // menu1 JB소식
}

function easeScroll(){
    $("html").easeScroll({
        frameRate:60,
        animationTime: 800,
        stepSize: 20,
        pulseAlgorithm: 2,
        pulseScale: 10,
        pulseNormalize: 1,
        accelerationDelta: 10,
        accelerationMax : 1,
        keyboardSupport: false,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: false 
    });
}


      