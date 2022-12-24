$(document).ready(
    function(){
        //sticky
        $('.about_us').waypoint(
            function(direction){
                if (direction == "down"){
                    $('nav').addClass('sticky');
                }else{
                    $('nav').removeClass('sticky');
                }
            },{
                offset: '100px'
            }
        )   
        // scroll smooth
        $('a').click(function(){
            $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });
    }
)