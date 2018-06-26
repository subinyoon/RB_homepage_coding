$(document).ready(function(){
    
    menuLink();
    landingPage();
    portfolioPage();
        
}); //document ready END

function landingPage(){
    showTexture();
    showBoxes();
    showContactGraphic();
    showClientGraphic();
    bubbleAppear();
    showGoToTop();
    showWrap();
    closeLightbox();
}

function portfolioPage(){
    toDetail();
    portfolioFilter();
}

/*light box---------------------------------------------*/
function closeLightbox(){
    
    $(".light_box_wrap .close_btn").on('click',function(){
        $(".light_box_wrap").css({"animation":"lightboxhide 0.3s forwards ease-in-out"});
    });
}

/*menu link---------------------------------------------*/
function menuLink(){
    $(".menu ul li").on('click', function(){
        var i = $(this).index()+1;
        //console.log(i);
        
        if( i == 1){
            window.location.href='rb_portfolio.html';
        }else if( i == 2){
            var url = window.location.href;
            console.log(url);
            
            if( url == "http://127.0.0.1:58620/rb_index.html" || url == "http://127.0.0.1:58620/rb_index.html#aboutus_anchor" || url == "http://127.0.0.1:58620/rb_index.html#goto_contact" || url == "rb_index.html#goto_contact" || url == "rb_index.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $("#aboutus_anchor").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index.html#aboutus_anchor';
            }     
            
        }else if (i == 3){
            var url = window.location.href;
            //console.log(url);
        
            if( url == "http://127.0.0.1:58620/rb_index.html" || url == "http://127.0.0.1:58620/rb_index.html#goto_contact" || url == "http://127.0.0.1:58620/rb_index.html#aboutus_anchor" || url == "rb_index.html#goto_contact" || url == "rb_index.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $(".wrap_3").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index.html#goto_contact';
            }        
        }
    });
    
    /*rb left nav logo : clicked*/
    $(".wrap_fixed_2 .nav_1 .mid, .wrap_fixed_2 .nav_2 .mid").on('click', function(){
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
            //console.log(i);
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

/*landing speech bubbles*/
function bubbleAppear(){
    
    $(".bubbles .anchor").stop().fadeOut();
    $(".bubbles .allbub").stop().fadeOut();
    
    setTimeout(function(){
        $(".bubbles .anchor").stop().fadeIn(2000, "linear", function(){
            $(".bubbles .anchor").css({"display":"block"});
        });
    },5000);
    
    
    $(".bubbles .anchor_wrap .anchor").on('mouseover', function(){
        var i = $(this).index()+1;
        //console.log(i);
        $(".bubbles .bubble"+i).stop().fadeIn(500, "linear", function(){
                $(".bubbles .bubble"+i).css({"display":"block"});
            });
    });
    
    $(".bubbles .anchor_wrap .anchor").on('mouseout', function(){
        $(".bubbles .allbub").stop().fadeOut(500, "linear", function(){
            $(".bubbles .allbub").css({"display":"none"});
        });
    });
}

/*landing: client hover*/
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

/*all: fade in effect on wraps*/
function showWrap(){
    
    var currentScroll = $(document).scrollTop();
    console.log(currentScroll);
    
    if(currentScroll <= 1778 && currentScroll >= 1230){
        $(".wrap_3").css({'animation':'moveWrap3 1s forwards'}); 
        $(".contact_bg").animate({'opacity':'1'}, 1500, 'swing');
    }
    
    if(currentScroll <= 1231 && currentScroll >= 805){
        $(".wrap_2 .aboutus_wrap .aboutus_skills").css({'animation':'moveWrap3 1s forwards'});
        
        setTimeout(function(){
                $(".wrap_2 .aboutus_wrap .aboutus_txt_wrap").css({'animation':'moveWrap 1s forwards'}); 
        },400); 
    }
    
    if(currentScroll >= 0){
        $(".portfolio_wrap").css({'animation':'moveWrap 1s forwards'}); 
    }
    
    $(document).scroll(function(){
        currentScroll = $(document).scrollTop();
        //console.log(currentScroll);

        if(currentScroll >= 1230){
            $(".wrap_3").css({'animation':'moveWrap3 1s forwards'});
            $(".contact_bg").animate({'opacity':'1'}, 1500, 'swing');
        }
        
        if(currentScroll >= 280){
            $(".wrap_2 .aboutus_wrap .aboutus_skills").css({'animation':'moveWrap 1s forwards'}); 
        
            setTimeout(function(){
                $(".wrap_2 .aboutus_wrap .aboutus_txt_wrap").css({'animation':'moveWrap 1s forwards'}); 
            },400); 
        }
    });
}
/*-------------------------------------------------------*/
/*portfolio us : filter*/
function portfolioFilter(){
    $(".filter_wrap ul li").on('click', function(){
        
        var index = $(this).index()+1;
        
        var remaining = $(".f_2, .f_3, .f_4, .f_5, .f_6");
        
        $(remaining).css({'display':'none'});
        
        if( index === 1) {
            $(remaining).css({'display':'block'});
        } 
        $(".f_"+index).css({'display':'block'});
        
        //console.log(index);
    }); // onclick END   
}

/*-------------------------------------------------------*/

/*portfolio : linking to portfolio detail*/
function toDetail(){
    
    $(".portfolio_wrap .column1 .contents_2").on('click', function(){
        window.location.href='rb_portfolio_detail_1.html';
    });
    
    $(".portfolio_wrap .column3 .contents_3").on('click', function(){
        window.location.href='rb_portfolio_detail_2.html';
    });
    
    $(".portfolio_wrap .column2 .contents_4").on('click', function(){
        window.location.href='rb_portfolio_detail_3.html';
    });
    
    $(".portfolio_wrap .column3 .contents_1").on('click', function(){
        window.location.href='rb_portfolio_detail_5.html';
    });
    
    $(".portfolio_wrap .column3 .contents_2").on('click', function(){
        window.location.href='rb_portfolio_detail_4.html';
    });
    
    $(".portfolio_wrap .column1 .contents_4").on('click', function(){
        window.location.href='rb_portfolio_detail_A.html';
    });

} // 이부분은 상세페이지 더 나오면 디테일하게 잡을 것!!!!!

/*-------------------------------------------------------*/


      