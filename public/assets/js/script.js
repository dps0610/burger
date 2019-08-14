$(document).ready(function(){

    $(".devour").on("click", function(){
        // event.preventDefault();

        var burgerID = $(this).data("id");
        console.log("we got clicked " + burgerID);
        $.ajax({
            method: "PUT",
            url: "/api/burgers/" + burgerID
        }).then(function(data){
            location.reload();
        })
        //ajax call, location reload belongs in the then


    })

});