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