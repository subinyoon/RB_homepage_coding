$(document).ready(function(){
    
    menuLink();
    landingPage();
    portfolioPage();
        
}); //document ready END

function landingPage(){
    showTexture();
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
    
    if($(".light_box_wrap").css("display") == "block"){
       $(".bubbles").css({"display":"none"});
    }
    
    $(".light_box_wrap .close_btn").on('click',function(){
        $(".light_box_wrap").css({"animation":"lightboxhide 0.3s forwards ease-in-out"});
        $(".bubbles").css({"display":"block"});
    });
}

/*menu link---------------------------------------------*/
function menuLink(){
    $(".menu ul li").on('click', function(){
        var i = $(this).index()+1;
        //console.log(i);
        
        if( i == 1){
            window.location.href='rb_index_m.html';
        }
        
        if( i == 2){
            window.location.href='rb_portfolio_m.html';
        }
        
        if( i == 3){
            var url = window.location.href;
            console.log("i=3 "+url);
            
            if( url == "http://studiorb.me/rb_index_m.html" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor" || url == "http://studiorb.me/rb_index_m.html#goto_contact"){
                $('html,body').stop().animate({
                scrollTop: $("#aboutus_anchor").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index_m.html#aboutus_anchor';
            }     
            
        
        }if(i == 4){
            var url = window.location.href;
            console.log("i=4 "+url);
        
            if( url == "http://studiorb.me/rb_index_m.html" || url == "http://studiorb.me/rb_index_m.html#goto_contact" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $(".wrap_3").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index_m.html#goto_contact';
            }        
        }
    });
    
    /*logo : clicked*/
    $(".wrap .wrap_fixed_1 .menu ul .logo").on('click', function(){
        window.location.href='rb_index_m.html';
    });
}

/*-------------------------------------------------------*/
/*mobile landing: main graphic*/
function showTexture(){
    $(".graphic_main .graphic_pointers li").on('click', function(){
        
        var i = $(this).index()+1;
        console.log(i);
        $(".solid_2").css({'display':'none'});
        $(".graphic_wrap .graphic_main .graphic_pointers .pointer_1").css({"display":"block"});
        $(".graphic_wrap .graphic_main .graphic_pointers .pointer_2").css({"display":"block"});
        $(".graphic_wrap .graphic_main .graphic_pointers .pointer_3").css({"display":"block"});
        
        if( i == 1){
            $(".texture_"+i).css({'display':'block'});
            $(".theme_1_1").css({'display':'block'});
            $(".theme_1_2").css({'display':'block'});
            $(".theme_1_3").css({'display':'block'});
            $(".theme_1_4").css({'display':'block'});
            $(".theme_1_5").css({'display':'block'});
            $(".theme_1_6").css({'display':'block'});
            $(".theme_1_7").css({'display':'block'});
            $(".theme_1_8").css({'display':'block'});
            $(".theme_1_9").css({'display':'block'});
            $(".solid_1").css({'display':'none'});
            
            //texture2 off
            $(".texture_2").css({'display':'none'});
            $(".theme_2_1").css({'display':'none'});
            $(".theme_2_2").css({'display':'none'});
            $(".theme_2_3").css({'display':'none'});
            $(".theme_2_4").css({'display':'none'});
            
            //texture3 off
            $(".texture_3").css({'display':'none'});
            $(".solid_4").css({'display':'none'});
            $(".theme_3_1").css({'display':'none'});
            
            //pointers off
            $(".graphic_wrap .graphic_main .graphic_pointers .pointer_"+i).css({"display":"none"});
            
        }
        
        if(i == 2){
            $(".texture_"+i).css({'display':'block'});
            $(".theme_2_1").css({'display':'block'});
            $(".theme_2_2").css({'display':'block'});
            $(".theme_2_3").css({'display':'block'});
            $(".theme_2_4").css({'display':'block'});
            
            //texture1 off
            $(".texture_1").css({'display':'none'});
            $(".theme_1_1").css({'display':'none'});
            $(".theme_1_2").css({'display':'none'});
            $(".theme_1_3").css({'display':'none'});
            $(".theme_1_4").css({'display':'none'});
            $(".theme_1_5").css({'display':'none'});
            $(".theme_1_6").css({'display':'none'});
            $(".theme_1_7").css({'display':'none'});
            $(".theme_1_8").css({'display':'none'});
            $(".theme_1_9").css({'display':'none'});
            $(".solid_1").css({'display':'block'});
            
            //texture3 off
            $(".texture_3").css({'display':'none'});
            $(".solid_4").css({'display':'none'});
            $(".theme_3_1").css({'display':'none'});
            
            //pointers off
            $(".graphic_wrap .graphic_main .graphic_pointers .pointer_"+i).css({"display":"none"});
        }
        
        if(i == 3){
            $(".texture_"+i).css({'display':'block'});
            $(".solid_4").css({'display':'block'});
            $(".theme_3_1").css({'display':'block'});
            
            //texture1 off
            $(".texture_1").css({'display':'none'});
            $(".theme_1_1").css({'display':'none'});
            $(".theme_1_2").css({'display':'none'});
            $(".theme_1_3").css({'display':'none'});
            $(".theme_1_4").css({'display':'none'});
            $(".theme_1_5").css({'display':'none'});
            $(".theme_1_6").css({'display':'none'});
            $(".theme_1_7").css({'display':'none'});
            $(".theme_1_8").css({'display':'none'});
            $(".theme_1_9").css({'display':'none'});
            $(".solid_1").css({'display':'block'});
            
            //texture2 off
            $(".texture_2").css({'display':'none'});
            $(".theme_2_1").css({'display':'none'});
            $(".theme_2_2").css({'display':'none'});
            $(".theme_2_3").css({'display':'none'});
            $(".theme_2_4").css({'display':'none'});
            
            //pointers off
            $(".graphic_wrap .graphic_main .graphic_pointers .pointer_"+i).css({"display":"none"});
        }
    });
}

/*landing: contact gototop*/
function showGoToTop(){
    
    $(".gototop_wrap").fadeOut(10);
    
    $(".gototop_wrap").click(function() {
            $('html,body').stop().animate({
                scrollTop: $(".graphic_wrap").offset().top}, 500, 'swing');
        });
    
    $(document).scroll(function(){
        var currentScroll = $(document).scrollTop();
        
        //console.log(currentScroll);
        
        if(currentScroll >= 1254){
            $(".gototop_wrap").fadeIn(500);
        }else{
            $(".gototop_wrap").fadeOut(500);
        }
    });
}

/*all: fade in effect on wraps*/
function showWrap(){
    
    var currentScroll = $(document).scrollTop();
    console.log(currentScroll);
    
    if(currentScroll <= 3378 && currentScroll >= 2450){
        $(".wrap_3").css({'animation':'moveWrap3 1s forwards'}); 
        $(".contact_bg").animate({'opacity':'1'}, 1500, 'swing');
    }
    
    if(currentScroll <= 2360 && currentScroll >= 400){
        $(".wrap_2 .aboutus_wrap .aboutus_txt_wrap").css({'animation':'moveWrap3 1s forwards'});
        
        setTimeout(function(){
                $(".wrap_2 .aboutus_wrap .aboutus_skills").css({'animation':'moveWrap 1s forwards'}); 
        },600); 
    }
    
    if(currentScroll >= 0){
        $(".portfolio_wrap").css({'animation':'moveWrap 1s forwards'}); 
    }
    
    $(document).scroll(function(){
        currentScroll = $(document).scrollTop();
        //console.log(currentScroll);

        if(currentScroll >= 2450){
            $(".wrap_3").css({'animation':'moveWrap3 1s forwards'});
            $(".contact_bg").animate({'opacity':'1'}, 1500, 'swing');
        }
        
        if(currentScroll >= 400){
            $(".wrap_2 .aboutus_wrap .aboutus_txt_wrap").css({'animation':'moveWrap 1s forwards'}); 
        
            setTimeout(function(){
                $(".wrap_2 .aboutus_wrap .aboutus_skills").css({'animation':'moveWrap 1s forwards'}); 
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
        //bluest
    });
    
    $(".portfolio_wrap .column1 .contents_4").on('click', function(){
        window.location.href='rb_portfolio_detail_B.html';
        //hongik map
    });
    
    $(".portfolio_wrap .column2 .contents_4").on('click', function(){
        window.location.href='rb_portfolio_detail_3.html';
        //overtime
    });
    
    $(".portfolio_wrap .column2 .contents_1").on('click', function(){
        window.location.href='rb_portfolio_detail_D.html';
        //overtime
    });
    
    $(".portfolio_wrap .column2 .contents_2").on('click', function(){
        window.location.href='rb_portfolio_detail_A.html';
        //overtime
    });
    
    $(".portfolio_wrap .column3 .contents_1").on('click', function(){
        window.location.href='rb_portfolio_detail_5.html';
        //zeron
    });
    
    $(".portfolio_wrap .column3 .contents_2").on('click', function(){
        window.location.href='rb_portfolio_detail_4.html';
        //bino
    });
    
    $(".portfolio_wrap .column3 .contents_4").on('click', function(){
        window.location.href='rb_portfolio_detail_2.html';
        //haya
    });
    
    $(".portfolio_wrap .column1 .contents_3").on('click', function(){
        window.location.href='rb_portfolio_detail_F.html';
        //jbsat
    });
    
    $(".portfolio_wrap .column3 .contents_3").on('click', function(){
        window.location.href='rb_portfolio_detail_E.html';
        //qplace
    });
    
} // 이부분은 상세페이지 더 나오면 디테일하게 잡을 것!!!!!

/*-------------------------------------------------------*/


      