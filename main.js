console.log( document.getElementsByTagName("nav"));

//testar git
let menuButton = _id("menuButton");

menuButton.addEventListener("click", function(){
    
    let nav = _tagFirst("nav");
    nav.classList.toggle("hidden");
});


// wideHelpers
function _id(id){
    return document.getElementById(id);
}
function _tagFirst(tag)
{
    return document.getElementsByTagName(tag)[0];
}