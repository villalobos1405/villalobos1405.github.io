$(document).ready(function(){

    $("#BalneText").hide();
    $("#ParqueText").hide();
    $("#FaroText").hide();
    $("#IslaText").hide();

    $("#ParqueImg").hover(function(e){
        $("#ParqueText").fadeIn();
    })

    $("#FaroImg").hover(function(e){
        $("#FaroText").fadeIn();
    })
    $("#BalneImg").hover(function(e){
        $("#BalneText").fadeIn();
    })
    $("#IslaImg").hover(function(e){
        $("#IslaText").fadeIn();
    })
    $("#ParqueImg").mouseleave(function(e){
        $("#ParqueText").fadeOut();
    })

    $("#FaroImg").mouseleave(function(e){
        $("#FaroText").fadeOut();
    })
    $("#BalneImg").mouseleave(function(e){
        $("#BalneText").fadeOut();
    })
    $("#IslaImg").mouseleave(function(e){
        $("#IslaText").fadeOut();
    })
})