(function($) { 

$(document).ready(function(){
    portfolioDetailPage();
    
}); //document ready END

function portfolioDetailPage(){
    showIllustration();
}

function showIllustration(){
    
    $(".inner_wrap .content_wrap .content_1_wrap .slides").on('click', function(){
        
        var chrome   = navigator.userAgent.indexOf('Chrome') > -1;
        var explorer = navigator.userAgent.indexOf('MSIE') > -1;
        var firefox  = navigator.userAgent.indexOf('Firefox') > -1;
        var safari   = navigator.userAgent.indexOf("Safari") > -1;
        var camino   = navigator.userAgent.indexOf("Camino") > -1;
        var opera    = navigator.userAgent.toLowerCase().indexOf("op") > -1;
        if ((chrome) && (safari)) safari = false;
        if ((chrome) && (opera)) chrome = false;
        
        if(safari){
           //get slide1 fixed url
            //console.log("safari");
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
            
        }else{
            
            //get slide1 fixed url
            //console.log("else");
            var fixdiv = $(".content_1_wrap .slide_1").attr('id');

            var getfixUrl = getComputedStyle($('#'+fixdiv)[0]).getPropertyValue("background-image");
                //console.log(getfixUrl);
            var slicefixUrl = getfixUrl.slice(27,37);
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
            var sliceUrl = getUrl.slice(27,37);
                //console.log(sliceUrl);
            var finalUrl = sliceUrl;
                //console.log(finalUrl);

            //action
            $(".content_1_wrap .slide_1").css({'background-image':'url(img'+finalUrl+')'});
            $(".content_1_wrap .slide_"+i).css({'background-image':'url(img'+finalfixUrl+')'});  
        }
    });
}

})(jQuery);


      