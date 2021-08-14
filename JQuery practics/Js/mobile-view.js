
var clickIndex = 0;
// clickFunction(clickIndex);

function clickFunction(){
    clickableFunction(clickIndex);
}



function clickableFunction(){
    var btns = document.querySelectorAll("#bottom-btn");

    for (var i = 0; i < btns.length; i++) {
        btns[i].className = btns[i].className.replace( "active", " " );
    } 

    for(i = 0; i < btns.length; i++){
        btns[0].className = "active";
    }
}


function showContent(){
    document.querySelector(".top-right .content").style.display = "none";
    var content = document.querySelector(".top-left-content");
    content.style.display = "block";
}

function hideContent(){
    var content = document.querySelector(".top-left-content");
    content.style.display = "none";
}

function showRightContent(){
    document.querySelector(".top-left-content").style.display = "none";
    let content = document.querySelector(".top-right .content");
    content.style.display = "block";
}

function hideRightContent(){
    let content = document.querySelector(".top-right .content")
    content.style.display = "none";
}