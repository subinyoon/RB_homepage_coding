$(document).ready(function(){

    portfolioDetailPage();
    
}); //document ready END

function portfolioDetailPage(){
    content2();
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
            
            $(".box_5").css({
            'opacity':'0.3',
            'box-shadow':'none'
            });  
        }else if(i == 5){
            $(".box_"+i).css({
            'opacity':'1',
            'box-shadow':'2px 2px 8px #e2e2e2'
            });
            
            $(".box_4").css({
            'opacity':'0.3',
            'box-shadow':'none'
            });        
        }  
    });
}
      