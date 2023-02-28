function openMenu() {

    if(screen.width < 1000)
    {
        let menu = document.querySelector(".menuBar");
        menu.style="width:80%";
        document.querySelector(".headbar").style="z-index:2"
        document.querySelector(".overlay").style="display:block";
        document.querySelector(".menuCloseBtn").style="display:block";
    }

    else{
        let menu = document.querySelector(".menuBar");
        menu.style="width:25%";
        document.querySelector(".headbar").style="z-index:2"
        document.querySelector(".overlay").style="display:block";
        document.querySelector(".menuCloseBtn").style="display:block";
    }
}

function closeMenu() {
    let menu = document.querySelector(".menuBar");
    menu.style="width:0%";
    document.querySelector(".headbar").style="z-index:4"
    document.querySelector(".overlay").style="display:none";
    document.querySelector(".menuCloseBtn").style="display:none";
}

function scrollNext(e) {
    e.target.parentNode.parentNode.scrollLeft += 250;
    e.target.parentNode.parentNode.parentNode.scrollLeft += 250;
    
    // e.target.parentNode.parentNode.scrollLeft += 200;
}
function scrollPrev(e) {
    e.target.parentNode.parentNode.scrollLeft -= 250;
    e.target.parentNode.parentNode.parentNode.scrollLeft -= 250;
}

function showSigninDropDown() {
    document.getElementById("account-DropDown").style.display="block";
    document.querySelector(".overlay").style="display:block";
}

function hideSigninDropDown() {
    document.getElementById("account-DropDown").style.display="none";
    document.querySelector(".overlay").style="display:none";
}

function showFilter(e) {
    console.log(e)
    document.getElementById("mobFilterDropDown").style.display="block";
}
function hideFilter() {
    document.getElementById("mobFilterDropDown").style.display="none";
}

let cartCount=0;

function cartCnt(){
    if (cartCount == 25) {
        cartCount=0;
    }
cartCount++;
document.querySelector(".cartCount").innerHTML=cartCount;
document.getElementById("cartCount").innerHTML=cartCount;
}
