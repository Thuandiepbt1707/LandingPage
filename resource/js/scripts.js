$(document).ready(
    function(){ 
        // scroll smooth
        $('a').click(function(){
            $('html, body').animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
        });
    }
)