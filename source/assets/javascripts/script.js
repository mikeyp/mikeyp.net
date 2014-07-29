//= require "_jquery-1.11.1.min.js"
//= require "_imagesloaded.min.js"

(function ($) {

  // Call the plugin on all forms
  $(function() {
    imagesLoaded($(".banner_container"), function () {
        $(".user_banner").css("display", "block"), $(".user_banner").addClass("fadeInDown")
    })

  })

})(jQuery)
