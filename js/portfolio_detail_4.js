$(document).ready(function(){
    alert("load");
    portfolioDetailPage();
    
    
}); //document ready END

function portfolioDetailPage(){
    showIllustration();
}

function showIllustration(){
    
    $(".content_1_wrap .slides").on('click', function(){
        alert("clicked");
        //get slide1 fixed url
        var fixdiv = $(".content_1_wrap .slide_1").attr('id');

        var getfixUrl = getComputedStyle($('#'+fixdiv)[0]).getPropertyValue("background-image");
            console.log(getfixUrl);
        var slicefixUrl = getfixUrl.slice(27,41);
            console.log(slicefixUrl);
        var finalfixUrl = ".."+slicefixUrl;
            console.log(finalfixUrl);

        
        //get $(this).onclicked url
        var i = $(this).index()+1;
            console.log(i);
        var div = $(this).attr('id');
            console.log(div);
        var getUrl = getComputedStyle($('#'+div)[0]).getPropertyValue("background-image");
            console.log(getUrl);
        var sliceUrl = getUrl.slice(27,41);
            console.log(sliceUrl);
        var finalUrl = ".."+sliceUrl;
            console.log(finalUrl);
        
        //action
        $(".content_1_wrap .slide_1").css({'background-image':'url('+finalUrl+')'});
        $(".content_1_wrap .slide_"+i).css({'background-image':'url('+finalfixUrl+')'}); 
    });
}
      