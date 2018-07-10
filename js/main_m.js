$(document).ready(function(){
    
    menuLink();
    landingPage();
    portfolioPage();
        
}); //document ready END

function landingPage(){
    showTexture();
    showContactGraphic();
    showClientGraphic();
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
        
        if( i == 2){
            window.location.href='rb_portfolio_m.html';
        }
        
        if( i == 3){
            var url = window.location.href;
            console.log("i=2 "+url);
            
            if( url == "http://studiorb.me/rb_index_m.html" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor" || url == "http://studiorb.me/rb_index_m.html#goto_contact" || url == "http://studiorb.me/rb_index_m.html#goto_contact" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $("#aboutus_anchor").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index.html_m#aboutus_anchor';
            }     
            
        
        }if(i == 4){
            var url = window.location.href;
            console.log("i=3 "+url);
        
            if( url == "http://studiorb.me/rb_index_m.html" || url == "http://studiorb.me/rb_index_m.html#goto_contact" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor" || url == "http://studiorb.me/rb_index_m.html#goto_contact" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $(".wrap_3").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index_m.html#goto_contact';
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
                $(".theme_2_1").css({'display':'block'});
                $(".theme_2_2").css({'display':'block'});
                $(".theme_2_3").css({'display':'block'});
                $(".theme_2_4").css({'display':'block'});
                $(".bubbles").css({'display':'none'});
                
            }else if(i == 3){
                $(".texture_"+i).css({'display':'block'});
                $(".solid_4").css({'display':'block'});
                $(".theme_3_1").css({'display':'block'});
                $(".bubbles").css({'display':'none'});
                
            }else{
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
                $(".bubbles").css({'display':'none'});
                $(".solid_1").css({'display':'none'});
            }
    });
        
    $(".menu ul li").on('mouseout', function(){
            var i = $(this).index()+1;
            //console.log(i);
            $(".solid_2").css({'display':'block'});
            
            if(i == 2){
                $(".texture_"+i).css({'display':'none'});
                $(".theme_2_1").css({'display':'none'});
                $(".theme_2_2").css({'display':'none'});
                $(".theme_2_3").css({'display':'none'});
                $(".theme_2_4").css({'display':'none'});
                $(".bubbles").css({'display':'block'});

            }else if(i == 3){
                $(".texture_"+i).css({'display':'none'});
                $(".solid_4").css({'display':'none'});
                $(".theme_3_1").css({'display':'none'});
                $(".bubbles").css({'display':'block'});
            }else{
                $(".texture_"+i).css({'display':'none'});
                $(".theme_1_1").css({'display':'none'});
                $(".theme_1_2").css({'display':'none'});
                $(".theme_1_3").css({'display':'none'});
                $(".theme_1_4").css({'display':'none'});
                $(".theme_1_5").css({'display':'none'});
                $(".theme_1_6").css({'display':'none'});
                $(".theme_1_7").css({'display':'none'});
                $(".theme_1_8").css({'display':'none'});
                $(".theme_1_9").css({'display':'none'});
                $(".bubbles").css({'display':'block'});
                $(".solid_1").css({'display':'block'});
            }
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
    //console.log(currentScroll);
    
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


      