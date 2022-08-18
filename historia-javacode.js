$(document).ready(function(){
    $("#menu section").each(function(contador){
        $(this).delay((contador)*700).fadeTo(1000, 1);
    })
})