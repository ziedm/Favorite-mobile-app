(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* listitem  Mailing */
    
    
        /* listitem  Navigation */
    
    
        /* listitem  Storage */
    $(document).on("click", ".uib_w_7", function(evt)
    {
         activate_page("#uib_page_10"); 
    });
    
        /* listitem  Navigation */
    $(document).on("click", ".uib_w_5", function(evt)
    {
         activate_page("#uib_page_9"); 
    });
    
        /* listitem  Games */
    
    
        /* listitem  Photographies */
    
    
        /* listitem  Photographies */
    
    
        /* listitem  Games */
    
    
        /* listitem  Mailing */
    
    
        /* listitem  Photographies */
    $(document).on("click", ".uib_w_12", function(evt)
    {
         activate_page("#uib_page_12"); 
    });
    
        /* listitem  Games */
    $(document).on("click", ".uib_w_11", function(evt)
    {
         activate_page("#uib_page_11"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
