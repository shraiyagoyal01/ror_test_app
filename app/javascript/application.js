// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"
// import "semantic-ui"
import "semantic-ui"


// $(document).on('turbolinks:load', function(){
//     $('.ui .dropdown').dropdown();
// })



  // scroll_bottom();
//     if ($('#messages').length > 0) {
//       $('#messages').scrollTop($('#messages')[0].scrollHeight);
//     }


$(function(){

    // function scroll_bottom() {
    //     console.log('bef');
    //     if ($('#messages').length > 0) {
    //         $('#messages').scrollTop($('#messages')[0].scrollHeight);
    //       }
    //   }
    // scroll_bottom();

   //function submit_message() {
    //    $("#message_body").on('keyDown', function(e){
    // alert('ddd')

    //    })

       $("input").keypress(function(e){  
        if (e.keyCode == 13) {
            $('button').click();
            e.target.value = "";
          };
        
    });  
  // }
  // submit_message();

})







//   submit_message = function() {
//     $('#message_body').on('keydown', function(e) {
//       if (e.keyCode == 13) {
//         $('button').click();
//         e.target.value = "";
//       };
//     });
//   };
  











$(document).ready(function(){
    $('.ui .dropdown').dropdown()
    $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
      ;
    })
;
//   submit_message();
//   scroll_bottom();
});

    import "channels"
