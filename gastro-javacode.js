$(document).ready(function(){

    $("p").hide();
    $("#Ver-menos1").hide();
    $("#Ver-menos2").hide();
    $("#Ver-menos3").hide();
    $("#Ver-mas1").click(function (e) { 
        $("#p1").show();
        $("#Ver-menos1").show();
    });
    $("#Ver-mas2").click(function (e) { 
        $("#p2").show();
        $("#Ver-menos2").show();
    });
    $("#Ver-mas3").click(function (e) { 
        $("#p3").show();
        $("#Ver-menos3").show();
    });
    $("#Ver-menos1").click(function (e) { 
        $("#p1").hide();
        $("#Ver-menos1").hide();
    });
    $("#Ver-menos2").click(function (e) { 
        $("#p2").hide();
        $("#Ver-menos2").hide();
    });
    $("#Ver-menos3").click(function (e) { 
        $("#p3").hide();
        $("#Ver-menos3").hide();
    });
})
