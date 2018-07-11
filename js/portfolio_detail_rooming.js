$(function(){
    


        var $imges = null;
        var $imgesBig = null;
        
        // drag
        var drag = false;
        var $dragTarget = null;
        var startImgX = 0;
        var startImgY = 0;
        
        // z index
        var zIndex = 100;
        
        // drop
        var $selectPanel = null;
        var selectInfo = null;
        
        
        $(document).ready(function(){
            init();
//            imgPos();
            initEvent();
            console.log($(".veryBig").position());
        })

        
        // reset
        function init(){
            $imges = $(".content_1_wrap img");
            
            //drop
            $selectPanel = $(".imgContainer");
            $imgesBig = $(".big .veryBig");
//            selectInfo ={
//                left : $selectPanel.offset().left,
//                top : $selectPanel.offset().top,
//                right : ($selectPanel.offset().left + $selectPanel.width()),
//                bottom : ($selectPanel.offset().top + $selectPanel.height()),
//            }
        }
        
        //imges position
//        function imgPos(){
//            $imgesBig.each(function(){
//                var left = Math.floor(Math.random()*700);
//                var top = Math.floor(Math.random()*200);
//                
//                $(this).css({
//                    left : left,
//                    top : top
//                })
//            })
//        }
        
        // event
        function initEvent(){
            $imges.on("mousedown",function(e){
             
                $dragTarget = $(this);
                drag = true;
                
                // start position
                var offset = $dragTarget.offset();
                startImgX = e.pageX - offset.left;
                startImgY = e.pageY - offset.top;
                
                // z index
                zIndex++;
                $dragTarget.css({
                    "z-index" : zIndex
                })
                
                
                activeDrag();
            })
            
        }
        
        function activeDrag(){
            // mousemove
            $(document).on("mousemove",function(e){
                if(drag==true){
                    // cancle
                    e.preventDefault();
                    
                    // mousePos
                    var endX = e.pageX - startImgX;
                    var endY = e.pageY - startImgY;
                    
                    // move
                    $dragTarget.offset({
                        left : endX,
                        top : endY
                    })
                    
                }
                
            });
            
            // mouseup
            $(document).on("mouseup",function(e){
                // drop pos
                drop(e.pageX,e.pageY);
                
                // event off
                $(document).off();
                
                // reset drag
                drag = false;
                $dragTarget = null;
 
            })
            
        }
//        
        function drop(dropX,dropY){
            
            
//            if(selectInfo.left<dropX && selectInfo.right>dropX){
//                if(selectInfo.top<dropY && selectInfo.bottom>dropY){
//                    $selectPanel.append($dragTarget);
                    
                    // off mouse event
//                    $dragTarget.off();
//                    $dragTarget = null;
                    
//                    console.log(selectInfo);
//                }
//            }
        }
});