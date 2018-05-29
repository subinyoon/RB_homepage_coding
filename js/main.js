    $(document).ready(function(){

        showTexture();
        showBoxes();
        
    }); //document ready END


function showTexture(){
    $(".menu ul li").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            $(".solid_2").css({'display':'none'});
            
        
            if(i == 2){
                $(".texture_"+i).css({'display':'block'});
                $(".solid_8").css({'display':'block'});
                
                
            }else if(i == 3){
                $(".texture_"+i).css({'display':'block'});
                $(".solid_7").css({'display':'block'});
                $(".solid_4").css({'display':'block'});
                
            }else{
                $(".texture_"+i).css({'display':'block'});
                $(".solid_9").css({'display':'block'});
            }
        });
        
        $(".menu ul li").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            $(".solid_2").css({'display':'block'});
            
            if(i == 2){
                $(".texture_"+i).css({'display':'none'});
                $(".solid_8").css({'display':'none'});

            }else if(i == 3){
                $(".texture_"+i).css({'display':'none','opacity':'0.7'});
                $(".solid_7").css({'display':'none'});
                $(".solid_4").css({'display':'none'});
            }else{
                $(".texture_"+i).css({'display':'none'});
                $(".solid_9").css({'display':'none'});
            }
        });
}

function showBoxes(){
    $(".client_boxes .row_1 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+i).css({'background':'#fff', 'cursor':'pointer'});
        });
    
    $(".client_boxes .row_2 .boxes").on('mouseover', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+(i+3)).css({'background':'#fff', 'cursor':'pointer'});
        });
    
    $(".client_boxes .row_1 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+i).css({'background':'#f4f4f4'});
        });
    
    $(".client_boxes .row_2 .boxes").on('mouseout', function(){
            var i = $(this).index()+1;
            console.log(i);
            
            $(".box_"+(i+3)).css({'background':'#f4f4f4'});
        });
}


      