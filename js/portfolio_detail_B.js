$(function(){
    


        var $lands, 
            $background,
            $landTarget,
            position,
            $symbol,
            $symbolTarget = null;
    
        var top,
            landNum,
            symbolNum = 0;
        var count = 1;
    
        $(document).ready(function(){
            init();
            clickland();
        })

        // reset
        function init(){
            $lands = $(".land_group img");
            $background = $(".background");
            $symbol = $(".symbol_group img");
        }
        
    
        function clickland(){
            $lands.on("click",function(){
               $landTarget = $(this); 
                count += 1;
                
                if(count%2 ==0){
                    onselect();
                }else{
                    offselect();
                }
                
                showSymbol();
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

            $background.css({
                display: 'block'
            });

//            $landTarget.attr("src",result);
            
            $landTarget.css({
                opacity: 1,
                top: top+'px',
                "z-index": 1

            });
            
            
            
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
            
            $background.css({
                display: 'none'
            });
            
//            $landTarget.attr("src",result);
            
            $landTarget.css({
                top: top+'px',
                "z-index": 0

            });
        
        }
    
        function showSymbol(){
            landNum = $landTarget.attr("id");
            $symbolTarget = $symbol.get(landNum-1);
            symbolNum = $symbolTarget.getAttribute("id");
            
            console.log("land = "+landNum);
            console.log("symbol = "+symbolNum);
            console.log($symbol.length);
            console.log($symbolTarget);
            
            if(symbolNum==landNum){
                $symbolTarget.css({
                    display: 'block',
                    opacity: 1,
                    "z-index": 2
                });  
            } 
            
//            $symbolTarget.one("click",function(){
//                if($symbolTarget.hasClass("none")==true){
//                    $symbolTarget.css({
//                        display: 'none',
//                        "z-index": -3
//                    });  
//                    offselect();
//                    
//                }
//            })
            
            
        }
        
        function show(){
            
        }
    
    
    
    
    
    
        
       
        
//        // event
//        function initEvent(){
//            $imges.on("mousedown",function(e){
//             
//                $dragTarget = $(this);
//                drag = true;
//                
//                // start position
//                var offset = $dragTarget.offset();
//                startImgX = e.pageX - offset.left;
//                startImgY = e.pageY - offset.top;
//                
//                // z index
//                zIndex++;
//                $dragTarget.css({
//                    "z-index" : zIndex
//                })
//                
//                
//                activeDrag();
//            })
//            
//        }
//        
//        function activeDrag(){
//            // mousemove
//            $(document).on("mousemove",function(e){
//                if(drag==true){
//                    // cancle
//                    e.preventDefault();
//                    
//                    // mousePos
//                    var endX = e.pageX - startImgX;
//                    var endY = e.pageY - startImgY;
//                    
//                    // move
//                    $dragTarget.offset({
//                        left : endX,
//                        top : endY
//                    })
//                    
//                }
//                
//            });
//            
//            // mouseup
//            $(document).on("mouseup",function(e){
//                // drop pos
//                drop(e.pageX,e.pageY);
//                
//                // event off
//                $(document).off();
//                
//                // reset drag
//                drag = false;
//                $dragTarget = null;
// 
//            })
//            
//        }
////        
//        function drop(dropX,dropY){
//            
//            
////            if(selectInfo.left<dropX && selectInfo.right>dropX){
////                if(selectInfo.top<dropY && selectInfo.bottom>dropY){
////                    $selectPanel.append($dragTarget);
//                    
//                    // off mouse event
////                    $dragTarget.off();
////                    $dragTarget = null;
//                    
////                    console.log(selectInfo);
////                }
////            }
//        }
});