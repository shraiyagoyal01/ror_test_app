$(function() {

    if ($("select#category").val() == "") {
     $("select#subcategory option").remove();
     var row = "<option value=\"" + "" + "\">" + "Subcategory" + "</option>";
     $(row).appendTo("select#subcategory");
    }
    $("select#category").change(function() {
     var id_value_string = $(this).val();
     if (id_value_string == "") {
      $("select#subcategory option").remove();
      var row = "<option value=\"" + "" + "\">" + "subcategory" + "</option>";
      $(row).appendTo("select#subcategory");
     } else {
      // Send the request and update course dropdown
      $.ajax({
       dataType: "json",
       cache: false,
       url: '/update_subcategories/' + id_value_string,
       timeout: 5000,
       error: function(XMLHttpRequest, errorTextStatus, error) {
        alert("Failed to submit : " + errorTextStatus + " ;" + error);
       },
       success: function(data) {
        // Clear all options from course select
        $("select#course option").remove();
        //put in a empty default line
        var row = "<option value=\"" + "" + "\">" + "subcategory" + "</option>";
        $(row).appendTo("select#subcategory");
        // Fill course select
        $.each(data, function(i, j) {
         row = "<option value=\"" + j.id + "\">" + j.title + "</option>";
         $(row).appendTo("select#subcategory");
        });
       }
      });
     }
    });
 
   });