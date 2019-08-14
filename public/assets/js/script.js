$(document).ready(function(){

    $(".devour").on("click", function(){
        event.preventDefault();

        var burgerID = $(this).data("id");
        console.log("we got clicked " + burgerID);
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burgerID
        }).then(function(data){
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
    
        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        }
    
        $.ajax("/api/burgers",{
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("made new burger");
            location.reload();
        });
    });
});

