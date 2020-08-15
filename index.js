$( document ).ready(function() {

    $("#divTopo").show();
    $("#form").hide();
    $("#divFim").hide();
    $("#topic1").hide();
 

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

   
    
});





