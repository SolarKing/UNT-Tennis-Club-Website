$(document).ready(function() {
   smoothScroll(60);
});

$(window).scroll(function() {
   navbarPos();
   applyTwitterCSS();
});

function navbarPos() {
   var h = $("#utc-header").height(); // height if #utc-header
   var pos = $(window).scrollTop(); 

   if (pos < h) {
      $("#utc-navbar").css({
         position:"absolute",
         top: h
      });   
   } else {
      $("#utc-navbar").css({
         position:"fixed",
         top: 0
      });
   }
}

/* Scrolls to ID selector */
function smoothScroll(pos) {
   $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         // console.log("Scrolling to: " + (target.offset().top - 60));
         if (target.length) {
            $('html,body').animate({
            scrollTop: target.offset().top - pos
            },850, "easeInOutQuart");
            return false;
         }
      }
   });   
}

/* Applies Custom UNT Style */
function applyTwitterCSS() {
   console.log("applied");
   $(".twitter-timeline").contents().find(".timeline-header").css({
      background: "#01852C",
      borderRadius: "5px 5px 0 0"
   });
   $(".twitter-timeline").contents().find(".timeline-footer").css({
      background: "#01852C",
      borderRadius: "0 0 5px 5px"
   });
   $(".twitter-timeline").contents().find('a[title="Tweets from UNT Club Tennis"]').css({
      color: "white"
   });
}