$(document).ready(function(){
    visibleDisplay2(),
    $("body,html").delay(9000).animate({
            scrollTop: $("#display2").height()
        }, 800),
        ShowDisplay2() 
});
function visibleDisplay2() {
    $("#display2").css("display", "none");
}
function ShowDisplay2() {
    $("#display2").css("display", "flex")
}

