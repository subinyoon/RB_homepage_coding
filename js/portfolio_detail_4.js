$(document).ready(function(){

    portfolioDetailPage();
    
}); //document ready END

function portfolioDetailPage(){
    content1();
    content2();
}

/*portfolio detail : content 1 onclick effect*/
function content1(){
    
    $(".content_1_wrap .box").on('click', function(){
        
        //get box1 fixed url
        var fixdiv = $(".content_1_wrap .box_1").attr('id');
            //console.log(div);
        var getfixUrl = getComputedStyle($('#'+fixdiv)[0]).getPropertyValue("background-image");
            //console.log(getfixUrl);
        var slicefixUrl = getfixUrl.slice(27,43);
            //console.log(slicefixUrl);
        var finalfixUrl = ".."+slicefixUrl;
            //console.log(finalfixUrl);

        
        //get $(this).onclicked url
        var i = $(this).index()+1;
            //console.log(i);
        var div = $(this).attr('id');
            //console.log(div);
        var getUrl = getComputedStyle($('#'+div)[0]).getPropertyValue("background-image");
            //console.log(getUrl);
        var sliceUrl = getUrl.slice(27,43);
            //console.log(sliceUrl);
        var finalUrl = ".."+sliceUrl;
            //console.log(finalUrl);
        
        //action
        $(".content_1_wrap .box_1").css({'background-image':'url('+finalUrl+')'});
        $(".content_1_wrap .box_"+i).css({'background-image':'url('+finalfixUrl+')'});
    });
}

/*portfolio detail : content 2 onclick effect*/
function content2(){
    $(".content_2_wrap .box").on('click', function(){

        var i = $(this).index()+4;
            //console.log(i);
        
        if(i == 4){
            $(".box_"+i).css({
            'opacity':'1',
            'box-shadow':'2px 2px 8px #e2e2e2'
            });
            
            $(".box_5, .box_6").css({
            'opacity':'0.3',
            'box-shadow':'none'
            });  
        }else if(i == 5){
            $(".box_"+i).css({
            'opacity':'1',
            'box-shadow':'2px 2px 8px #e2e2e2'
            });
            
            $(".box_4, .box_6").css({
            'opacity':'0.3',
            'box-shadow':'none'
            });     
        }else if(i == 6){
            $(".box_"+i).css({
            'opacity':'1',
            'box-shadow':'2px 2px 8px #e2e2e2'
            });
            
            $(".box_5, .box_4").css({
            'opacity':'0.3',
            'box-shadow':'none'
            });     
        }  
    });
}
      