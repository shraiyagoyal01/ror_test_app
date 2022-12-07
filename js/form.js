$(function(){
    //Focus Event - focus to text input(jis field mei input de rhe h uspr focus hona chaie)
    //Blue event - when users jump into the next inpute field

    // var inputFields = $("input:text, input:password, textarea");
    // inputFields.focus(function() {
    //     $(this).css("box-shadow", "0 0 4px #666");
    // });

    // inputFields.blur(function(){
    //     $(this).css("box-shadow", "none");
    // });

    // $("#name").blur(function() {
    //     var text = $(this).val(); //gives the current value input
    //     if(text.length < 3) {
    //         $(this).css("box-shadow", "0 0 4px #811");
    //     } else {
    //         $(this).css("box-shadow", "0 0 4px #181");
    //     }

    // })

    // //change event - checkboxes, radio, select 
    // $("#checkbox").change(function(){
    //     var isChecked = $(this).is(":checked"); //.prop("checked")
    //     if(isChecked) {
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181");
    //     } else {
    //         $(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811");
    //     }
    // });

    // $("#selection").change(function() {
    //     var selectedOption = $(this).find(":selected").text();
    //     alert(selectedOption);
    // });

    // $("#form").submit(function(event){
    //     var textarea = $("#message");
    //     if(textarea.val().trim() == "") {
    //         textarea.css("box-shadow", "0 0 4px #811");
    //         event.preventDefault();
    //     } else {

    //     }
    // });

    //Form Validations:-
        var form = $("#form");
        enableFastFeedback(form);

        form.submit(function(event){
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked");

        validateNamefield(name, event);
        validatePasswordField(password, event);
        validateMessageField(message, event);
        validateCheckboxField(checked, event);
     });

    function enableFastFeedback(formElement) {
        var nameInput = formElement.find("#name");
        var passwordInput = formElement.find("#password");
        var messageInput = formElement.find("#message");
        var checkboxInput = formElement.find("#checkbox");

        nameInput.blur(function(event) {
            var name = $(this).val();
            validateNamefield(name, event);

            if(!isValidName(name)) {
                $(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
            } else {
                $(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
            }
        });

        checkboxInput.change(function(event){
            var isChecked = $(this).is(":checked");
            validateCheckboxField(isChecked, event);

            if (!isChecked) {
                $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"});
            } else {
                $(this).add("label[for='cb']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"});
            }
        });
    }
     function validateNamefield(name, event) {
        if(!isValidName(name)) {
            $("#name-feedback").text("Please enter at least two-characters");
            event.preventDefault();
        } else {
            $("#name-feedback").text("");
        }
     }

     function validatePasswordField(password, event) {
       if(!isValidPassword(password)) {
           $("#password-feedback").text("The Password should have atleast 6 characters and contain a number");
           event.preventDefault();
       } else {
            $("#password-feedback").text("");
       }
    }

    function validateMessageField(message, event) {
        if(!isValidMessage(message)) {
            $("#message-feedback").text("Please enter a Message");
            event.preventDefault();
        } else {
            $("#message-feedback").text("");
        }
    }

    function validateCheckboxField(isChecked, event){
        if(!isChecked) {
            $("#checkbox-feedback").text("Please agree to this!");
            event.preventDefault();
        } else {
            $("#checkbox-feedback").text("");
        }
    }


     function isValidName(name) {
        return name.length >= 2;
     }
     function isValidPassword(password) {
        return password.length > 6 && /.*[0-9].*/.test(password);
     }
     function isValidMessage(message) {
        return message.trim() != "";
     }
    












});
