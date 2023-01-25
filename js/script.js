(function($){
    $(function(){
       
        /* Mobile navigation */
       $(".jq--nav-icon").click(function(){
           
        $(".nav-background").slideToggle();
        $(".mobile-nav-back").fadeToggle();
         $("nav ul").fadeToggle();  
     });

        /* Change hamburger to cross vice versa */
       $(".jq--image-hamburger").click(function(){
  
        if($(".jq--image-hamburger").attr("src") == "img/hamburgerMenu.png")
        {
            $($(".jq--image-hamburger").attr("src","img/crossMenu.png"));
        } 
        else 
        {
            $($(".jq--image-hamburger").attr("src","img/hamburgerMenu.png"));
        }  
    });



    }); 
 })(jQuery);
 