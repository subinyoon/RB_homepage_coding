$(document).ready(function(){
    
    menuLink();
    landingPage();
    portfolioPage();
    footerTxt();
        
}); //document ready END

function landingPage(){
    showTexture();
    showContactGraphic();
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
            window.location.href='rb_portfolio.html';
        }
        
        if( i == 2){
            var url = window.location.href;
            //console.log("i=2 "+url);
            
            if( url == "http://studiorb.me/" || url == "http://studiorb.me/index.html#aboutus_anchor" || url == "http://studiorb.me/index.html#goto_contact" || url == "http://studiorb.me/index.html#goto_contact" || url == "http://studiorb.me/index.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $("#aboutus_anchor").offset().top}, 600, 'swing');
            }else{
             window.location.href='index.html#aboutus_anchor';
            }     
        }
        
        if (i == 3){
            var url = window.location.href;
            //console.log("i=3 "+url);
        
            if( url == "http://studiorb.me/" || url == "http://studiorb.me/index.html#goto_contact" || url == "http://studiorb.me/index.html#aboutus_anchor" || url == "http://studiorb.me/index.html#goto_contact" || url == "http://studiorb.me/index.html#aboutus_anchor"){
                $('html,body').stop().animate({
                scrollTop: $(".wrap_3").offset().top}, 600, 'swing');
            }else{
             window.location.href='index.html#goto_contact';
            }        
        }
    });
    
    /*rb left nav logo : clicked*/
    $(".wrap_fixed_2 .nav_1 .mid, .wrap_fixed_2 .nav_2 .mid").on('click', function(){
        window.location.href='index.html';
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
        
        if(index == 1) {
            $(remaining).css({'display':'block'});
            $(".no_filter").css({"display":"block"});
            
        }
        
        if(index != 1){
            $(".f_"+index).css({'display':'block'});
            $(".no_filter").css({"display":"none"});
        }
    }); // onclick END   
}

/*-------------------------------------------------------*/

/*portfolio : linking to portfolio detail*/
function toDetail(){
    
    $(".portfolio_wrap .column1 .contents_1").on('click', function(){
        window.location.href='pc_ptd_map.html';
        //hongik map
    });
    
    $(".portfolio_wrap .column1 .contents_2").on('click', function(){
        window.location.href='pc_ptd_bluest.html';
        //bluest
    });
    
    $(".portfolio_wrap .column1 .contents_3").on('click', function(){
        window.location.href='pc_ptd_jb.html';
        //jb sat
    });
    
    $(".portfolio_wrap .column1 .contents_4").on('click', function(){
        window.location.href='pc_ptd_font.html';
        //서체관리자
    });
    
    $(".portfolio_wrap .column1 .contents_5").on('click', function(){
        window.location.href='pc_ptd_tnc.html';
        //tnc
    });
    
    $(".portfolio_wrap .column1 .contents_6").on('click', function(){
        window.location.href='pc_ptd_circles.html';
        //circle series
    });
    
    $(".portfolio_wrap .column1 .contents_7").on('click', function(){
        window.location.href='pc_ptd_neoregen.html';
        //neoregen
    });
    
    $(".portfolio_wrap .column1 .contents_8").on('click', function(){
        window.location.href='pc_ptd_above.html';
        //above
    });
    
    $(".portfolio_wrap .column1 .contents_9").on('click', function(){
        window.location.href='pc_ptd_gr.html';
        //garam
    });
    
    $(".portfolio_wrap .column1 .contents_10").on('click', function(){
        window.location.href='pc_ptd_doota2.html';
        //doota fashion week
    });
    
    
    
    $(".portfolio_wrap .column2 .contents_1").on('click', function(){
        window.location.href='pc_ptd_overtime.html';
        //overtime
    });
    
    $(".portfolio_wrap .column2 .contents_2").on('click', function(){
        window.location.href='pc_ptd_bino.html';
        //rooming
    });
    
    $(".portfolio_wrap .column2 .contents_3").on('click', function(){
        window.location.href='pc_ptd_malevich.html';
        //malevich
    });
    
    $(".portfolio_wrap .column2 .contents_4").on('click', function(){
        window.location.href='pc_ptd_vodana.html';
        //vodana
    });
    
    $(".portfolio_wrap .column2 .contents_5").on('click', function(){
        window.location.href='pc_ptd_zeron_2.html';
        //vodana
    });
    
    $(".portfolio_wrap .column2 .contents_6").on('click', function(){
        window.location.href='pc_ptd_jb_2.html';
        //jb gangnam
    });
    
    $(".portfolio_wrap .column2 .contents_7").on('click', function(){
        window.location.href='pc_ptd_denmobili.html';
        //denmobili
    });
    
    $(".portfolio_wrap .column2 .contents_8").on('click', function(){
        window.location.href='pc_ptd_trlt.html';
        //jaypark trlt
    });
    
    $(".portfolio_wrap .column2 .contents_9").on('click', function(){
        window.location.href='pc_ptd_doota1.html';
        //doota new year
    });
    
    $(".portfolio_wrap .column2 .contents_10").on('click', function(){
        window.location.href='pc_ptd_nabba.html';
        //nabba
    });
    
    
    
    $(".portfolio_wrap .column3 .contents_1").on('click', function(){
        window.location.href='pc_ptd_zeron_1.html';
        //zeron_1
    });
    
    $(".portfolio_wrap .column3 .contents_2").on('click', function(){
        window.location.href='pc_ptd_rooming.html';
        //bino
    });
    
    $(".portfolio_wrap .column3 .contents_3").on('click', function(){
        window.location.href='pc_ptd_qplace.html';
        //qplace
    });
    
    $(".portfolio_wrap .column3 .contents_4").on('click', function(){
        window.location.href='pc_ptd_haya.html';
        //haya
    });
    
    $(".portfolio_wrap .column3 .contents_5").on('click', function(){
        window.location.href='pc_ptd_cube.html';
        //haya
    });
    
    $(".portfolio_wrap .column3 .contents_6").on('click', function(){
        window.location.href='pc_ptd_dmm.html';
        //dmm
    });
    
    $(".portfolio_wrap .column3 .contents_7").on('click', function(){
        window.location.href='pc_ptd_smnct.html';
        //smnct
    });
    
    $(".portfolio_wrap .column3 .contents_8").on('click', function(){
        window.location.href='pc_ptd_woo.html';
        //woo won jae
    });
    
    $(".portfolio_wrap .column3 .contents_9").on('click', function(){
        window.location.href='pc_ptd_bolca.html';
        //bolca
    });
    
    $(".portfolio_wrap .column3 .contents_10").on('click', function(){
        window.location.href='pc_ptd_kravebeauty.html';
        //kravebeauty
    });
    
    
}

/*-------------------------------------------------------*/

function footerTxt(){
    //address
    $(".footer_wrap .footer .txt2 p").empty();
    $(".footer_wrap .footer .txt2 p").append("서울 금천구 가산디지털2로 115 대륭3차 1114-6호");
}



      