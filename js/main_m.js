$(document).ready(function(){
    
    androidCss();
    menuLink();
    landingPage();
    portfolioPage();
    snsLink();
    footerTxt();
        
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
        console.log(i);
        
        if( i == 1){
            window.location.href='rb_index_m.html';
        }
        
        if( i == 2){
            window.location.href='rb_portfolio_m.html';
        }
        
        if( i == 3){
            var url = window.location.href;
            //console.log("i=3 "+url);
            
            if( url == "http://studiorb.me/rb_index_m.html" || url == "http://studiorb.me/rb_index_m.html#aboutus_anchor" || url == "http://studiorb.me/rb_index_m.html#goto_contact"){
                $('html,body').stop().animate({
                scrollTop: $("#aboutus_anchor").offset().top}, 600, 'swing');
            }else{
             window.location.href='rb_index_m.html#aboutus_anchor';
            }     
            
        
        }if(i == 4){
            var url = window.location.href;
            //console.log("i=4 "+url);
        
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
        //console.log(i);
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
    //console.log(currentScroll);
    
    if(currentScroll <= 3210 && currentScroll >= 2000){
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

        if(currentScroll >= 2000){
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
        
        if( index == 1) {
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
    
    
    //column 1
    
    $(".portfolio_wrap .column1 .contents_1").on('click', function(){
        window.location.href='m_ptd_vodana.html';
        //vodana
    });
    
    $(".portfolio_wrap .column1 .contents_2").on('click', function(){
        window.location.href='m_ptd_bluest.html';
        //bluest
    });
    
    $(".portfolio_wrap .column1 .contents_3").on('click', function(){
        window.location.href='m_ptd_tnc.html';
        //tnc
    });
    
    $(".portfolio_wrap .column1 .contents_4").on('click', function(){
        window.location.href='m_ptd_map.html';
        //map
    });
    
    $(".portfolio_wrap .column1 .contents_5").on('click', function(){
        window.location.href='m_ptd_qplace.html';
        //qplace
    });

    $(".portfolio_wrap .column1 .contents_6").on('click', function(){
        window.location.href='m_ptd_haya.html';
        //haya
    });
    
    $(".portfolio_wrap .column1 .contents_7").on('click', function(){
        window.location.href='m_ptd_font.html';
        //서체관리자
    });
    
    $(".portfolio_wrap .column1 .contents_8").on('click', function(){
        window.location.href='m_ptd_zeron_2.html';
        //Zeromon
    });
    
    $(".portfolio_wrap .column1 .contents_9").on('click', function(){
        window.location.href='m_ptd_cube.html';
        //Zeromon
    });
    
    $(".portfolio_wrap .column1 .contents_10").on('click', function(){
        window.location.href='m_ptd_neoregen.html';
        //neoregen
    });
    
    $(".portfolio_wrap .column1 .contents_11").on('click', function(){
        window.location.href='m_ptd_above.html';
        //above
    });
    
    $(".portfolio_wrap .column1 .contents_12").on('click', function(){
        window.location.href='m_ptd_woo.html';
        //woo
    });
    
    $(".portfolio_wrap .column1 .contents_13").on('click', function(){
        window.location.href='m_ptd_trlt.html';
        //jaypark trlt
    });
    
    $(".portfolio_wrap .column1 .contents_14").on('click', function(){
        window.location.href='m_ptd_bolca.html';
        //bolca
    });
    
    $(".portfolio_wrap .column1 .contents_15").on('click', function(){
        window.location.href='m_ptd_doota2.html';
        //doota fashion week
    });
    
    
    //column 2
    
    $(".portfolio_wrap .column2 .contents_1").on('click', function(){
        window.location.href='m_ptd_malevich.html';
        //malevich
    });
    
    $(".portfolio_wrap .column2 .contents_2").on('click', function(){
        window.location.href='m_ptd_rooming.html';
        //rooming
    });
    
    $(".portfolio_wrap .column2 .contents_3").on('click', function(){
        window.location.href='m_ptd_jb.html';
        //jb academy
    });
    
    $(".portfolio_wrap .column2 .contents_4").on('click', function(){
        window.location.href='m_ptd_overtime.html';
        //overtime
    });
    
    $(".portfolio_wrap .column2 .contents_5").on('click', function(){
        window.location.href='m_ptd_zeron_1.html';
        //zeron_1
    });

    $(".portfolio_wrap .column2 .contents_6").on('click', function(){
        window.location.href='m_ptd_bino.html';
        //bino
    });
    
    $(".portfolio_wrap .column2 .contents_7").on('click', function(){
        window.location.href='m_ptd_circles.html';
        //bino
    });
    
    $(".portfolio_wrap .column2 .contents_8").on('click', function(){
        window.location.href='m_ptd_jb_2.html';
        //jb gangnam
    });
    
    $(".portfolio_wrap .column2 .contents_9").on('click', function(){
        window.location.href='m_ptd_dmm.html';
        //dmm
    });
    
    $(".portfolio_wrap .column2 .contents_10").on('click', function(){
        window.location.href='m_ptd_denmobili.html';
        //denmobili
    });
    
    $(".portfolio_wrap .column2 .contents_11").on('click', function(){
        window.location.href='m_ptd_smnct.html';
        //smnct
    });
    
    $(".portfolio_wrap .column2 .contents_12").on('click', function(){
        window.location.href='m_ptd_gr.html';
        //garam
    });
    
    $(".portfolio_wrap .column2 .contents_13").on('click', function(){
        window.location.href='m_ptd_doota1.html';
        //doota new year
    });
    
    $(".portfolio_wrap .column2 .contents_14").on('click', function(){
        window.location.href='m_ptd_nabba.html';
        //nabba
    });
    
    $(".portfolio_wrap .column2 .contents_15").on('click', function(){
        window.location.href='m_ptd_kravebeauty.html';
        //kravebeauty
    });
    
} // 이부분은 상세페이지 더 나오면 디테일하게 잡을 것!!!!!

/*-------------------------------------------------------*/

/*sns link*/
function snsLink(){
    
    $(".footer .sns_wrap .sns_1").on('click', function(){
       window.open('https://www.instagram.com/studio_redbrick','_blank');    
    });
    
    $(".footer .sns_wrap .sns_2").on('click', function(){
       window.open('https://www.behance.net/red_brick','_blank');    
    });
    
    $(".footer .sns_wrap .sns_3").on('click', function(){
       window.open('https://dribbble.com/red_brick','_blank');    
    });
}

/*detect mobile devices*/
function androidCss(){
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }; 
    
    //if( isMobile.iOS() ) alert('iOS');
    //if( isMobile.Android() ) alert('Android');
    
    if(isMobile.Android()){
        $(".wrap .portfolio_detail_wrap .inner_wrap .content_txt_wrap .content_txt").css({"width":"90%"});
        
        // visit site
        $(".wrap .portfolio_detail_wrap .inner_wrap .content_txt_wrap .plus_link").css({"margin-top":"9px"});
        
        $(".wrap .portfolio_detail_wrap .inner_wrap .content_txt_wrap a").css({"margin-bottom":"0px"});
    }
}

function footerTxt(){
    //address
    $(".footer_wrap .footer .txt p").empty();
    $(".footer_wrap .footer .txt p").append("(c) all rights reserved by Studio Red_Brick <br>서울 금천구 가산디지털2로 115 대륭3차 1114-6호<br> bbalganbyukdol@gmail.com // +82-10-9182-6193");
}


      