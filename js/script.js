$( document ).ready(function() {

  var at = '\x40';
  var foo = '\x6Dail';
  // Email contact
  $('a[href*="#"]')
    .each(function () {
      this.href = foo + "to:" + "\x61lsh\x61w" + "296" + at + "g\x6D\x61il.com";
    });

  // SMOOTH SCROLLING IMPLEMENTATION
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {

          });
        }
      }
    });

});