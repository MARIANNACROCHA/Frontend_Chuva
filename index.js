$( document ).ready(function() {

    $("#divTopo").show();
    $("#form").hide();
    $("#divFim").hide();
    $("#topic1").hide();
    $("#topic4").hide();
    $("#topic5").hide();
    $("#topic6").hide();
    $("#topic7").hide();
   
 

    $("#new-topic").click(function(){
        $("#divTopo").hide();
        $("#form").show();
    });

    $("#btnEnviarForm").click(function(){
        $("#divTopo").hide();
        $("#form").hide();
        $("#divFim").show();
        $("#topic1").show();
    });

    $("#new-topic2").click(function(){
        $("#divTopo").hide();
        $("#form").show();
        $("#divFim").hide();
        $("#topic1").hide();
    });

    $("#topic3").click(function() {
        $("#topic4").show();
        $("#topic5").show();
        $("#topic6").show();
        $("#topic7").show();
    })

});





