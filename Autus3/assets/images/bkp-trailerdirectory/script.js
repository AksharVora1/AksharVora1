jQuery(document).ready(function(){

    jQuery("body").on("click" , '.nav-item i' , function(){
        var dataAttr = jQuery(this).parents(".nav-item").attr('data-attr');
        jQuery(".main-navbar").removeClass("hovered");
        jQuery(".dropdown").show();
        jQuery('.sub-dropdown-menu').hide();
        jQuery('#'+ dataAttr).show();
        jQuery("body").append('<div class="menu-over"></div>');
        jQuery(".nav-item").removeClass("active");
        jQuery(this).parents(".nav-item").addClass("active");
        jQuery(".nav-item-close").after('<div class="sub-close"></div>');
	});
            
    jQuery("body").on("click" , ".menu-over" , function(){
        jQuery(".main-navbar").addClass("hovered");
        jQuery('.sub-dropdown-menu').hide();
        jQuery(this).remove();
    });
            
    jQuery("body").on("click" , ".sub-menu a " , function(){
		jQuery('.sub-dropdown-menu').hide();
		jQuery(".menu-over").remove();
    });
    jQuery("body").on("click"  , ".sub-close" , function(){
        jQuery('.sub-dropdown-menu').hide();   
        jQuery(".sub-close").remove();
        jQuery(".main-header-section").addClass("active");
        jQuery(".main-navbar").addClass("hovered");
    });

    jQuery("body").on("click" , ".nav-item-close" , function(){
        jQuery(".main-navbar").toggleClass("hovered");
        jQuery('.sub-dropdown-menu').hide();
        jQuery(".menu-over").remove();
        jQuery(".main-header-section").toggleClass("active");
        jQuery(this).find("i").toggleClass("fa-times fa-bars")
    });
         
});


function headerWidth(){


    if(jQuery(".main-navbar").hasClass("hovered")){
        console.log(sidebar);
        jQuery(".main-header-section").css("width" , newWidth);
    } else {
        jQuery(".main-header-section").css("width" , returnWidth );
    }
}
