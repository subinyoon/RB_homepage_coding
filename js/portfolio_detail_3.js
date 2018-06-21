$(document).ready(function(){
    
    setWinHeight();

    $(document).on('scroll', function(){
        positionFixed();
        drawSvg();
        changeBg();
    });
        
}); //document ready END

function setWinHeight(){
    var winHeight = window.innerHeight;
    var getHeight = $(".wrap .graphic_image").css('height');
    var strHeight = getHeight.replace(/\D/g,'');
    var numHeight = Number(strHeight); 
    var sumHeight = numHeight+winHeight;
    
    $(".wrap .graphic_image").css({"height":sumHeight});
}

function positionFixed(){
    var offset = window.pageYOffset;
        //console.log(offset);
        console.log(window.innerHeight);
            
        if(offset >= 620){
                
            $(".svgs .svg_lines").css({"position":"fixed"});
                
            $(".svg_1").css({"top":"-620px"});
            $(".svg_2").css({"top":"-202px"});
            $(".svg_3").css({"top":"-64px"});
            $(".svg_4").css({"top":"-620px"});
            $(".svg_5").css({"top":"-620px"});
            $(".svg_6").css({"top":"-620px"});
            $(".svg_7").css({"top":"-620px"});
                
            $(".wrap .bg_wrap").css({"top":"94px"});
            $(".wrap .bg_wrap .bg_fixed").css({"position":"fixed"}); 
            
        }else{
            
            $(".svgs .svg_lines").css({"position":"relative"});
                
            $(".svg_1").css({"top":"0px"});
            $(".svg_2").css({"top":"418px"});
            $(".svg_3").css({"top":"556px"});
            $(".svg_4").css({"top":"0px"});
            $(".svg_5").css({"top":"0px"});
            $(".svg_6").css({"top":"0px"});
            $(".svg_7").css({"top":"0px"});
                
            $(".wrap .bg_wrap").css({"top":"714px"});
            $(".wrap .bg_wrap .bg_fixed").css({"position":"relative"});
        }
    
        //반복 코드 제거용... 아직 미완
        /*
        for(var i = 1; i < 8; i++){
        var getTopValue = $(".svg_"+i).css("top");
        var removeStr = getTopValue.replace(/\D/g,'');
        var number = 554;
        var strToNum = Number(removeStr)-number; 
        
        var offset = window.pageYOffset;
        console.log(offset);
            
        if(offset >= 554){
            $(".svg_"+i).css({"top":strToNum});
            }
        }*/ 
}

function drawSvg(){
    var percentScroll = window.pageYOffset/($(document).height()-$(window).height());
        
        var getNum1 = $(".svg_1 .black_1").css('stroke-dasharray');
        var strNum1 = getNum1.replace(/\D/g,'');
        var numNum1 = Number(strNum1); 
        var Num1per = numNum1*percentScroll;
        var Num1 = numNum1 - Num1per;
        
        var getNum2 = $(".svg_2 .black_2").css('stroke-dasharray');
        var strNum2 = getNum2.replace(/\D/g,'');
        var numNum2 = Number(strNum2); 
        var Num2per = numNum2*percentScroll;
        var Num2 = numNum2 - Num2per;
        
        var getNum3 = $(".svg_3 .black_3").css('stroke-dasharray');
        var strNum3 = getNum3.replace(/\D/g,'');
        var numNum3 = Number(strNum3); 
        var Num3per = numNum3*percentScroll;
        var Num3 = numNum3 - Num3per;
        
        var getNum4 = $(".svg_4 .white_1").css('stroke-dasharray');
        var strNum4 = getNum4.replace(/\D/g,'');
        var numNum4 = Number(strNum4); 
        var Num4per = numNum4*percentScroll;
        var Num4 = numNum4 - Num4per;
        
        var getNum5 = $(".svg_5 .white_2").css('stroke-dasharray');
        var strNum5 = getNum5.replace(/\D/g,'');
        var numNum5 = Number(strNum5); 
        var Num5per = numNum5*percentScroll;
        var Num5 = numNum5 - Num5per;
        
        var getNum6 = $(".svg_6 .white_3").css('stroke-dasharray');
        var strNum6 = getNum6.replace(/\D/g,'');
        var numNum6 = Number(strNum6); 
        var Num6per = numNum6*percentScroll;
        var Num6 = numNum6 - Num6per;
        
        var getNum7 = $(".svg_7 .black_4").css('stroke-dasharray');
        var strNum7 = getNum7.replace(/\D/g,'');
        var numNum7 = Number(strNum7); 
        var Num7per = numNum7*percentScroll;
        var Num7 = numNum7 - Num7per;
        
        $(".svg_1 .black_1").css({"stroke-dashoffset":Num1});
        $(".svg_2 .black_2").css({"stroke-dashoffset":Num2});
        $(".svg_3 .black_3").css({"stroke-dashoffset":Num3});
        $(".svg_4 .white_1").css({"stroke-dashoffset":Num4});
        $(".svg_5 .white_2").css({"stroke-dashoffset":Num5});
        $(".svg_6 .white_3").css({"stroke-dashoffset":Num6});
        $(".svg_7 .black_4").css({"stroke-dashoffset":Num7});
}

function changeBg(){
    var percentScroll = window.pageYOffset/($(document).height()-$(window).height());

    //console.log(percentScroll);
    var changeBg = parseInt(percentScroll*255);
            //console.log(changeBg);
            //console.log(percentScroll);
    $(".bg_wrap .bg_fixed").css({'background':'rgb(0,0,'+changeBg+')'});
}
