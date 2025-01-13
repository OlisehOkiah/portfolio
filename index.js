var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.display ='block';
    navLinks.style.right = '0';

    
}
function hideMenu(){
    navLinks.style.right = '-200px';
   

}
document.getElementById("scrollButton").addEventListener("click", function(){
    const target = document.getElementById("footers");
    target.scrollIntoView({behavior: "smooth"});
})


$(document).ready(function() {
    $(`.skill-per`).each(function() {
      var $this = $(this);
      var percentage = $this.attr('percentage');
      $this.css("width", percentage + "%");
      $({
        animatedValue: 0
      }).animate({
        animatedValue: percentage
      }, {
        duration: 1300,
        step: function() {
          $this.attr("percentage", Math.floor(this.animatedValue));
        }
      });
    });
  });