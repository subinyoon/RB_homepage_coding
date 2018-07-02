$(function(){
    


        var $lands, 
            $background,
            $landTarget,
            position,
            $symbol,
            $symbolTarget,
            $spots,
            $explain,
            $exTarget= null;
    
        var top,
            landNum,
            symbolNum,
            exNum= 0;
    
        var count = 1;
    
        $(document).ready(function(){
            init();
            clickland();
        })

        // reset
        function init(){
            $spots = $(".spot_group img");
            $lands = $(".land_group img");
            $background = $(".background");
            $symbol = $(".symbol_group img");
            $explain = $(".explain_group div");
        }
        
    
        function clickland(){
            $lands.on("click",function(){
               $landTarget = $(this); 
                count += 1;
                
                
                onselect();
                showSymbol();
                showExplain();
                
                $background.one("click",function(){
                    $exTarget.style.display ='none';
                    $symbolTarget.style.display ='none';
                    $symbolTarget.style.zIndex='-1';
                    offselect();
                    
                });
                
                
//                }else{
//                    offselect();
//                }
                
                
           });  
        }
    
        function onselect(){
            position = $landTarget.position();
            top = position.top - 10;
            
//            str = $landTarget.attr("src");
//            result = str.replace(".png","2.png");

            $lands.css({
                opacity: 0.2
            });

            $spots.css({
                opacity: 0.2
            });
            
            $background.css({
                display: 'block',
                "z-index": 3
            });

//            $landTarget.attr("src",result);
            setTimeout(function(){
                $landTarget.css({
                opacity: 1,
                top: top+'px',
                "z-index": 1

                });  
            },200);
            
            
            
        }
    
        function offselect(){
            position = $landTarget.position();
            top = position.top + 10;
//            
//            str = $landTarget.attr("src");
//            result = str.replace("2.png",".png");
            
            $lands.css({
                opacity: 1
            });
            
            $spots.css({
                opacity: 1
            });
            
            $background.css({
                display: 'none',
                "z-index": -1
            });
            
//            $landTarget.attr("src",result);
            
            $landTarget.css({
                top: top+'px',
                "z-index": 0
            });
            
            
        
        }
    
        function showSymbol(){
            landNum = $landTarget.attr('id');
            symbolNum = $symbol.eq(landNum-1).attr('id');
            
            $symbolTarget = $symbol.get(symbolNum-1);
            
//            console.log("land = "+landNum);
//            console.log("symbol = "+symbolNum);
//            console.log($symbol.length);
//            console.log($symbolTarget);
            
            setTimeout(function(){
                $symbolTarget.style.zIndex="2";
                $symbolTarget.style.display ="block";  
            },200);
                      
        };
    
        function showExplain(){
            landNum = $landTarget.attr('id');
            exNum = $explain.eq(landNum-1).attr('id');
            
            $exTarget = $explain.get(exNum-1);
              
            setTimeout(function(){
                $exTarget.style.display = "block";
            },500);
        }
    
    
    
  
});