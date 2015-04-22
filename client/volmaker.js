"use strict";

$(document).ready(function() {

    function handleError(message) {
        $("#errorMessage").text(message);
        $("#domoMessage").animate({width:'toggle'},350);
    }
    
    function sendAjax(action, data) {
        $.ajax({
            cache: false,
            type: "POST",
            url: action,
            data: data,
            dataType: "json",
            success: function(result, status, xhr) {
                $("#volMessage").animate({width:'hide'},350);

                window.location = result.redirect;
            },
            error: function(xhr, status, error) {
                var messageObj = JSON.parse(xhr.responseText);
            
                handleError(messageObj.error);
            }
        });        
    }
    
    $("#makevolSubmit").on("click", function(e) {
        e.preventDefault();
    
        $("#volMessage").animate({width:'hide'},350);
    
        if($("#volName").val() == '' || $("#volAge").val() == '') {
            handleError("RAWR! All fields are required");
            return false;
        }

        sendAjax($("#volForm").attr("action"), $("#volForm").serialize());
        
        return false;
    });
    
});