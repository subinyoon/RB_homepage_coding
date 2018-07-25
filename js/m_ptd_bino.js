(function($) { 

$(document).ready(function(){
    portfolioDetailPage();
}); //document ready END

function portfolioDetailPage(){
    showIllustration();
}

function showIllustration(){
    
    var isMobile = {
            Android: function() {return navigator.userAgent.match(/Android/i);},
            BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
            iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
            Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
            Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
            any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
    }; 
    
    $(".inner_wrap .content_wrap .content_1_wrap .slides").click(function(){
        
        if(isMobile.Android()){
            //get slide1 fixed url
            //console.log("else");
            var fixdiv = $(".content_1_wrap .slide_1").attr('id');

            var getfixUrl = getComputedStyle($('#'+fixdiv)[0]).getPropertyValue("background-image");
                console.log(getfixUrl);
            var slicefixUrl = getfixUrl.slice(27,37);
                console.log(slicefixUrl);
            var finalfixUrl = slicefixUrl;
                console.log(finalfixUrl);


            //get $(this).onclicked url
            var i = $(this).index()+1;
                //console.log(i);
            var div = $(this).attr('id');
                //console.log(div);
            var getUrl = getComputedStyle($('#'+div)[0]).getPropertyValue("background-image");
                console.log(getUrl);
            var sliceUrl = getUrl.slice(27,37);
                console.log(sliceUrl);
            var finalUrl = sliceUrl;
                console.log(finalUrl);

            //action
            $(".content_1_wrap .slide_1").css({'background-image':'url(img'+finalUrl+')'});
            $(".content_1_wrap .slide_"+i).css({'background-image':'url(img'+finalfixUrl+')'}); 
            
        }else{
           
            //get slide1 fixed url
            var fixdiv = $(".content_1_wrap .slide_1").attr('id');

            var getfixUrl = getComputedStyle($('#'+fixdiv)[0]).getPropertyValue("background-image");
                //console.log(getfixUrl);
            var slicefixUrl = getfixUrl.slice(27,36);
                //console.log(slicefixUrl);
            var finalfixUrl = slicefixUrl;
                //console.log(finalfixUrl);

            //get $(this).onclicked url
            var i = $(this).index()+1;
                //console.log(i);
            var div = $(this).attr('id');
                //console.log(div);
            var getUrl = getComputedStyle($('#'+div)[0]).getPropertyValue("background-image");
                //console.log(getUrl);
            var sliceUrl = getUrl.slice(27,36);
                //console.log(sliceUrl);
            var finalUrl = sliceUrl;
                //console.log(finalUrl);

            //action
            $(".content_1_wrap .slide_1").css({'background-image':'url(img/'+finalUrl+')'});
            $(".content_1_wrap .slide_"+i).css({'background-image':'url(img/'+finalfixUrl+')'});
        }
    });
}

})(jQuery);


      