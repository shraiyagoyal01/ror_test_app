$(function(){
    //title, model, description, brand, price, finish, condition, quantity

    var form = $("#fo");
  
    form.submit(function(event){
        var title = $("#title").val();

    validateNamefield(title, event);
    });    

    function validateNamefield(title, event) {
        if(!isValidName(title)) {
            $("#title-feedback").text("Please enter at least two-characters");
            event.preventDefault();
        } else {
            $("#title-feedback").text("");
        }
        }

    function isValidName(title) {
        return title.length >= 2;
        }







});