$(document).ready(function(){
    
    landingPage();
    menuLink();
        
}); //document ready END

function landingPage(){
    showTexture();
    showBoxes();
    showContactGraphic();
    showClientGraphic();
    showContactBg();
    showGoToTop();
    showWrap();
}

/*menu link--------------------------------*/
function menuLink(){
    $(".menu ul li").on('click', function(){
        var i = $(this).index()+1;
        
        if( i == 1){
            window.location.href='';
        }else if( i == 2){
            window.location.href='rb_aboutus.html';  
        }else if (i == 3){
            var url = window.location.href;
            console.log(url);
        
            if( url == "http://127.0.0.1:64258/rb_index.html" || url == "http://127.0.0.1:64258/rb_index.html#goto_contact" ){
                $('html,body').stop().animate({
                scrollTop: $(".wrap_3").offset().top}, 600, 'swing');
            }else{
                window.location.href='rb_index.html#goto_contact';
            }        
        }
    });
    
    /*rb left nav logo : clicked*/
    $(".wrap_fixed_2 .nav_1 .mid").on('click', function(){
        window.location.href='rb_index.html';
    });
}

/*-------------------------------------------------------*/
/*landing: main graphic*/
function showTexture(){
    $(".menu ul li").on('mouseover', function(){
            var i = $(this).index()+1;
            //console.log(i);
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

/*landing: client*/
function showBoxes(){
    $(".client_boxes .row_1 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            //console.log(i);
            $(".box_"+i).css({'background':'#fff', 'cursor':'pointer'});
    });
    
    $(".client_boxes .row_2 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            //console.log(i);
            $(".box_"+(i+3)).css({'background':'#fff', 'cursor':'pointer'});
    });
    
    $(".client_boxes .row_1 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            //console.log(i);
            $(".box_"+i).css({'background':'#f4f4f4'});
    });
    
    $(".client_boxes .row_2 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            //console.log(i);
            $(".box_"+(i+3)).css({'background':'#f4f4f4'});
    });
}

/*landing: client graphic*/
function showClientGraphic(){
    
    $(document).scroll(function(){
        var currentScroll = $(document).scrollTop();
        //console.log(currentScroll);
        if(currentScroll >= 540){
            $("#client_line").animate({'stroke-dashoffset':'0'}, 3000, 'swing');
            $("#client_line_2").animate({'stroke-dashoffset':'0'}, 3500, 'swing');
        }
    });
}

/*landing: contact graphic*/
function showContactGraphic(){
    
    $(document).scroll(function(){
        var currentScroll = $(document).scrollTop();
        
        //console.log(currentScroll);
        if(currentScroll >= 1360){
           $(".form_wrap #graphic_contact").animate({'stroke-dashoffset':'0'}, 3000, 'swing');
            $(".form_wrap .graphic_solid_grey").animate({'opacity':'1'}, 4000, 'swing');
            $(".form_wrap .graphic_solid_red").animate({'opacity':'1'}, 5000, 'swing');
        }
    });
}

/*landing: contact bg*/
function showContactBg(){
    
    $(document).scroll(function(){
        var currentScroll = $(document).scrollTop();
        //console.log(currentScroll);
        if(currentScroll >= 970){
            $(".contact_bg").animate({'opacity':'1'}, 1500, 'swing');
        }
    });
}

/*landing: contact gototop*/
function showGoToTop(){
    
    $(document).scroll(function(){
        var currentScroll = $(document).scrollTop();
        //console.log(currentScroll);
        if(currentScroll >= 1280){
            $(".wrap_3 .gototop").animate({'opacity':'0.7'}, 1000, 'swing');
            
            $(".wrap_3 .gototop").click(function() {
                $('html,body').stop().animate({
                    scrollTop: $(".graphic_wrap").offset().top}, 500, 'swing');
            });
        }
    });
}

/*landing: fade in effect on wraps*/
function showWrap(){
    
    var currentScroll = $(document).scrollTop();
    //console.log(currentScroll);
    
    if(currentScroll <= 1546 && currentScroll >= 985){
            $(".wrap_3").css({'animation':'moveWrap3 1s forwards'});
    }
    
    $(document).scroll(function(){
        currentScroll = $(document).scrollTop();
        //console.log(currentScroll);
        
        if(currentScroll >= 220){
            $(".wrap_2").css({'animation':'moveWrap2 1s forwards'});
        }
        if(currentScroll >= 985){
            $(".wrap_3").css({'animation':'moveWrap3 1s forwards'});
        }
    });
}
/*-------------------------------------------------------*/

      