$(function(){
    
    var $preview,
        $preview2 = null;
    
    var $infoSize,
        $infoLineHeight,
        $infoSize2,
        $infoLineHeight2,
        $notoSans,
        $nanumMJ = null;
    
    var v,
        fontSize,
        lineHeight,
        v2,
        fontSize2,
        lineHeight2= 0;
    
    $(document).ready(function(){    
        $("#font-style").prettyDropdown();
        $("#font-style2").prettyDropdown();
        
        slide();
        slide2();
        selectStyle();
    });
    
    
    
    function slide(){
        init();
        fontSizeChange();
        lineHeightChange();
        
        infoFontSize();
        
        textInput();
        
    }
    
    
    function slide2(){
        init2();
        fontSizeChange2();
        lineHeightChange2();
        
        infoFontSize2();
        
        textInput2();
    }
    
    
    
    function init(){
        $notoSans = $("#notoSans");
        $preview = $notoSans.find(".style-string-preview");
        
        $infoSize = $notoSans.find(".font-size-info");
        $infoLineHeight = $notoSans.find(".line-height-info");
        
        fontSize = parseInt($preview.css("font-size"));
        lineHeight = parseInt($preview.css("line-height"));

    }
    
    function init2(){
        $nanumMJ = $("#nanumM");
        
        $preview2 = $nanumMJ.find(".style-string-preview");
       
        $infoSize2 = $nanumMJ.find(".font-size-info-mj");
        $infoLineHeight2 = $nanumMJ.find(".line-height-info-mj");
        
        fontSize2 = parseInt($preview2.css("font-size"));
        lineHeight2 = parseInt($preview2.css("line-height"));
   
    }
    
    
    // font-size 
    function fontSizeChange(){
        $notoSans.find("#font-size-slidebar").on('change',function(){
            v = parseInt($(this).val());
           
            $preview.css({
                fontSize : v + "px",
                lineHeight : v + "px"
            });
            $notoSans.find("#line-height-slidebar").val(v);

            $infoSize.html(v+"px");
            $infoLineHeight.html(v+"px");
        });
    }
    
    function fontSizeChange2(){
        $nanumMJ.find("#font-size-slidebar").on('change',function(){
            v2 = parseInt($(this).val());
            
            $preview2.css({
                fontSize : v2 + "px",
                lineHeight : v2 + "px"
            });
            
            $nanumMJ.find("#line-height-slidebar").val(v2);
            
            $infoSize2.html(v2+"px");
            $infoLineHeight2.html(v2+"px");
        });
    }

    
    function infoFontSize(){
        var elem = document.querySelector('.font-size-slider input[type="range"]');
        
        var rangeValue = function(){
            var newValue = elem.value;
            var target = document.querySelector('.font-size-info');
            target.innerHTML = newValue+"px";
        }
        elem.addEventListener("input", rangeValue);
        
        
        var elem2 = document.querySelector('.line-height-slider input[type="range"]');

        var rangeValue2 = function(){
            var newValue2 = elem2.value;
            var target2 = document.querySelector('.line-height-info');
            target2.innerHTML = newValue2+"px";
        }
        elem2.addEventListener("input", rangeValue2);
        
           
    }
    
    function infoFontSize2(){
         // nanum MJ
        var elem3 = document.querySelector('.font-size-slider-mj input[type="range"]');
        
        var rangeValue3 = function(){
            var newValue3 = elem3.value;
            var target3 = document.querySelector('.font-size-info-mj');
            target3.innerHTML = newValue3+"px";
        }

        elem3.addEventListener("input", rangeValue3);
        
//        
        var elem4 = document.querySelector('.line-height-slider-mj input[type="range"]');

        var rangeValue4 = function(){
            var newValue4 = elem4.value;
            var target4 = document.querySelector('.line-height-info-mj');
            target4.innerHTML = newValue4+"px";
        }
        elem4.addEventListener("input", rangeValue4);
        
    }

    
    // line-height
    function lineHeightChange(){
        $notoSans.find("#line-height-slidebar").on('change',function(){
            v = parseInt($(this).val());
            
            if(v<=fontSize){
                $preview.css({
                    lineHeight : fontSize +"px"
                });
                $infoLineHeight.html(fontSize+"px");
                $notoSans.find("#line-height-slidebar").val(fontSize);
                
            }else{
                $preview.css({
                    lineHeight : v +"px"
                });

            
            }
        
        });
    }
    
    function lineHeightChange2(){
        $nanumMJ.find("#line-height-slidebar").on('change',function(){
            v2 = parseInt($(this).val());
            
            if(v2<=fontSize2){
                $preview2.css({
                    lineHeight : fontSize2 +"px"
                });
                
                $infoLineHeight2.html(fontSize2+"px");
                $nanumMJ.find("#line-height-slidebar").val(fontSize2);
                
            }else{
                $preview2.css({
                    lineHeight : v2 +"px"
                });
            
            }
            
            
        });
    }
    
    
    // text input
    function textInput(){
        var $textPreview = $notoSans.find(".style-string-preview");

        $textPreview.one("click",function(){
            $textPreview.html("");
            
//            $textPreview.remove();
//            $(".style-string-input").css("display","block");
        });
    }
    
    function textInput2(){
        var $textPreview = $nanumMJ.find("span.style-string-preview");

        $textPreview.one("click",function(){
            $textPreview.html("");
            
//            $textPreview.remove();
//            $(".style-string-input").css("display","block");
        });
    }
    
    // font-style
    function selectStyle(){   
        $("#font-style").change(function(){
            var $item = $("#font-style option:selected");
            var $nowStyle = $item.attr("value");
            
            $preview.css({
                fontWeight : $nowStyle
            });
        
        });
        
        $("#font-style2").change(function(){
            var $item2 = $("#font-style2 option:selected");
            var $nowStyle2 = $item2.attr("value");
            
            $preview2.css({
                fontWeight : $nowStyle2
            });
        
        });

    };
    
})