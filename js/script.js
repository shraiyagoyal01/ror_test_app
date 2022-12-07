$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  //  $(".red-box").fadeOut(2000);
  //  $(".red-box").fadeIn(2000);
  //  $(".green-box").fadeOut(2000);
  //  $(".green-box").fadeIn(2000);
  //  $(".blue-box").fadeOut(2000);
  //  $(".blue-box").fadeIn(2000);

  //  $(".red-box").fadeTo(3000, 0.2);
  //  $(".green-box").fadeTo(2000, 0.5);
  //  $(".blue-box").fadeto(1000, 0.8);

  //  $(".green-box").fadeToggle();
  //  $(".green-box").fadeToggle();

    // $(".blue-box").hide(2000);
    // $(".blue-box").show(2000);
    // $(".blue-box").toggle();


    // $(".blue-box").slideUp(2000);
    // $(".blue-box").slideDown(2000);

    // $("p").hide(2000);
    // $("p").hide();
    // $("p").slideDown(2000);

    // $(".blue-box").slideToggle();

  // $(".blue-box").animate({
  //   marginLeft: "200px"
  //         },1000);

  // $(".blue-box").animate({
  //   "margin-left": "200px",
  //   "opacity": "0",
  //   "height": "50px",
  //   "width": "50px",
  //   "margin-top": "25px"
  //   },1000);

  //   $("p").animate({
  //       "font-size": "20px"
  //     },1000);
 
    // $(".red-box").fadeTo(1000,0.2);
    // $(".green-box").delay(1000).fadeTo(1000,0.5); //showing deßlay function
    // $(".blue-box").delay(2000).fadeTo(1000,0.8).fadeOut().delay(500).fadeIn();   //chaining


    // $(".red-block").animate(1000, 0, function() {
    //   $(".green-box").fadeTo(1000, 0, function() {
    //       $(".blue-box").fadeTo(1000, 0);
    //   });
    // });


    // $(".lightbox").delay(500).fadeIn(1000);

    // $("p").css("background-color", "rgba(180,180,30,0.8)");
    // $(".red-box").css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").css("background-color", "rgba(180,180,30,0.8)");
    // $("input[type='text']").css("background-color", "rgba(180,180,30,0.8)");
    // $("h2,p,input").css("background-color", "rgba(180,180,30,0.8)");
    // $("p:first").css("background-color", "rgba(180,180,30,0.8)");
    // $("li:last").css("background-color", "rgba(180,180,30,0.8)");
    // $("li:even").css("background-color", "rgba(180,180,30,0.8)");
    // $("li:odd").css("background-color", "rgba(180,180,30,0.8)");
    // $("input:text").css("background-color", "rgba(180,180,30,0.8)");
    // $("input:submit").css("background-color", "rgba(180,180,30,0.8)");


    // $("#list").find("li").css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").children("li").css("background-color", "rgba(180,180,30,0.8)");  //select only main item not sub item - only direct children 
    // $("#list").parents().css("background-color", "rgba(180,180,30,0.8)")
    // $("#list").parents("div").css("background-color", "rgba(180,180,30,0.8)")
    // $("#list").parents("body").css("background-color", "rgba(180,180,30,0.8)")
    // $("#list").parent().css("background-color", "rgba(180,180,30,0.8)")

    // $("#list").siblings().css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").siblings("p").css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").siblings(":header").css("background-color", "rgba(180,180,30,0.8)");


      //Traversal Functions
    // $("#list").prev().css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").next().css("background-color", "rgba(180,180,30,0.8)");

    // $(":header").next().css("background-color", "rgba(180,180,30,0.8)");

    // $("#list").find("li").filter(":even").css("background-color", "rgba(180,180,30,0.8)");
    // $("#list").children("li").filter(":even").css("background-color", "rgba(180,180,30,0.8)");

    //can add any function to the filter method
    // $("li").filter(function(index){
    //     return index % 3 == 2;
    // }).css("background-color", "rgba(180,180,30,0.8)");

    // $("li").first().css("background-color", "rgba(180,180,30,0.8)");
    // $("li").last().css("background-color", "rgba(180,180,30,0.8)");

    // $("li").eq(5).css("background-color", "rgba(180,180,30,0.8)");   //select any item from the list by index
    // $("li").eq(-2).css("background-color", "rgba(180,180,30,0.8)");  //select last element


    //opposite of filter function means given hi select nhi hoga baki sb hoga and specify function also
    // $("li").not(":first").css("background-color", "rgba(180,180,30,0.8)"); 
    // $("li").not(function(index){
    //   return index % 3 == 2;
    //   }).css("background-color", "rgba(180,180,30,0.8)"); 


    //we can add any element to DOM without HTML also

    // $("ul ul:first").append("<li>I'm gonna the last item of list </li>"); //append to last elementof list
    // $("<li>I'm gonna the last item of list </li>").appendTo("ul ul"); //add subelement or child to every list, methods are same 

    // $("ul ul:first").prepend("<li>I'm gonna the first item of list </li>"); //add child to first place of list
    // $("<li>I'm gonna the last item of list </li>").prependTo("ul u");

    // $("<h4>Peter Sommhoff</h4>").prependTo("#content");




    //how to element at same levele means siblings,there are 2 function for the same:-'
     
    // $(".red-box").after("<div class='red-box'>Another RED Box </div>");
    // $(".blue-box").before("<div class='blue-box'>Another BLUE Box </div>");
    
    // $(".blue-box").before(function() {
    //    return "<div class='blue-box'>Another BLUE Box </div>";
    // });
      
    //tell element to move at new position not creating one
      // $(".red-box").before($(".green-box"))
      // $("p").after($("#list"))

    // $(".red-box").after("<dic class='red-box'> Red Box 2 </div>");
    // $(".green-box").after("<dic class='green-box'> Green Box 2 </div>");
    // $(".blue-box").after("<dic class='blue-box'> Blue Box 2 </div>");

    //replacing element with new one or with new element
    // $("li").replaceWith("<li>Replaced.</li>")
    // $("li").replaceWith(function(){
    //   return "<li>Replaced with function. </li>"
    // });

      // var firstListItem = $("li:first");
      // $("p:first").replaceWith(firstListItem)  //this replace first paragraph with the first element of list called the replacing with existing element coz list is existing element 

      //task to do 
      // $(".red-box").replaceWith("<div class='green-box'> Green box repeat </div>");
      // $(".blue-box").replaceWith("<div class='green-box'> Green box repeat </div>");
      // $(".red-box, .blue-box").replaceWith("<div class='green-box'> Green box repeat </div>");
      // $("<div class='green-box'> Green box repeat </div>").replaceAll(".red-box, .blue-box");

      // $("li").remove();
      // $("form").children().not("input:text, textarea, br").remove();

      // var removedListItem = $("li").remove();
      
      // var detachedListItem = $("li").detach();
      // $("#content").append(detachedListItem);

      //empty tag just remove the text, tags exists there
      // $("p:first").empty();
      // $(".red-box, .blue-box, .green-box").empty();

      //How to change these values:- attr(attribute), prop(properties), val(value)
      // var specialLink = $("#special-link")
      // console.log(specialLink.attr("href"));
      // console.log(specialLink.attr("title"));

      // specialLink.attr("href", "http://petersommerhoff"); //use to update href with this link

      // var checkbox = $("input:checkbox");
      // console.log(checkbox.prop("checked")); //prop gives current status that it is true or false
      // console.log(checkbox.attr("checked")); //attr gives checked always because it is defined in html code

      // var textInput = $("input:text");
      // textInput.val("Peter Sommhoff")
      // console.log(textInput.val());

      // var rangeInput = $("input[type='range']")
      // console.log(rangeInput.val());

      //for making the image slider
      //  var galleryImage = $(".gallery").find("img").first();
      //  var images = [
      //     "images/laptop-mobile_small.jpg",
      //     "images/laptop-on-table_small.jpg",
      //     "images/people-office-group-team_small.jpg",
      //  ];

      //  var i = 0;
      //  setInterval(function() {
      //     i = (i + 1) % images.length;
      //     galleryImage.fadeOut(function() {
      //       $(this).attr("src", images[i]);
      //       $(this).fadeIn();
      //     });
      //     console.log(galleryImage.attr("src"));
      //  },2000);

// $(".gallery").css("display", "none"); //.hide()

// var redBox = $(".red-box");
// console.log(redBox.css("width"));
// console.log(redBox.width());

// redBox.css("background-color", "#AA7700");
// $("p").css("font-size", "18px");
// redBox.css("width", "+=20px");


// var properties = $("p").css(["font-size", "line-height", "color"]);
// console.log(properties);
// console.log(properties["font-size"]);

// redBox.css("user-select", "none");

// $("a").addClass("fancy-link");
// $("p:first").addClass("large  emphaisze");

// $("li li").addClass(function(index){
//   $(this).addClass("item-" + index)
// });

// $("div").addClass(function(index, currentClass) {
//   if(currentClass === "dummy"){
//    return "red-box";
//  }
// });

// // $(".red-box").removeClass().addClass("blue-box");
// $(".dummy").removeClass("dummy").addClass("green-box");


//Association of values to keys and access data also.
    // var gallery = $(".gallery")
    // var images = [
    //       "images/laptop-mobile_small.jpg",
    //       "images/laptop-on-table_small.jpg",
    //       "images/people-office-group-team_small.jpg",
    //   ];

    // gallery.data("availableImages", images);
    // console.log(gallery.data("availableImages"));  
    // gallery.data("name", "the Available images");
    // console.log(gallery.data());
    // gallery.removeData("name");
    // console.log(gallery.data("name"));

  //Also define in html also like im p tag define data-mydata="some data here" and access through mydata key from JS
      //  var firstData = $("p:first");
      //  console.log(firstData.data("mydata"));




  //NOW, how to change the text b/w html open and closing tag of html.of two types:- 1)text()- shows the only text b/w tags , 2)html()- shows the text with html tag b/w the tags of html

      var firstPar = $("p:first")
      //  console.log(firstPar.text());
      //  console.log(firstPar.html());

      // firstPar.text("<strong>HELLO</strong>World!"); //primts as it is!
      // firstPar.html("<strong>HELLO</strong> World!");  //print bold hello!
    

      // firstPar.html(firstPar.html() + "<strong>HELLO</strong> World!"); //String Concatenation

      //Event And Event Handling(event ye hua ki agr mouse bi drag kr rhe h screen pr ya hm kisi ko click kr rhe h toh wo event hua, Event Handler mei jo event occur ho rha h usmei koi functioning krni h ya koi bi operation perform kr rhe h usko Event Handling bolenge.)
            //ClickEvent
      // $("#btn-click").click(function(){
      //     alert("Button was Clicked");
      // });

      // $(".red-box").click(function(){
      //   $(this).fadeTo(500, 0.5);
      // })
      // $(".red-box").click();

            //HoverEvent
      // $("#btn-hover").hover(function(){
      //       alert("Button was Hovered");
      //   });

      // $(".green-box").hover(function(){
      //   $(this).text("I Was Hovered.")
      // });

  //Controlling enter and exit event of hover
      // var bluebox = $(".blue-box");
      // bluebox.mouseenter(function(){
      //   $(this).stop().fadeTo(500, 0.7);
      // });
      // bluebox.mouseleave(function(){
      //   $(this).stop().fadeTo(500, 1);
      // });

  //hoverhandler is the same function just doing in one line
  //hover(handlerIn, handlerOut)
      // var bluebox = $(".blue-box");
      // bluebox.hover(function() {
      //   $(this).stop().fadeTo(500, 0.7);
      //  }, function() { 
      //   $(this).stop().fadeTo(500, 1);
      //  });
  //Associate same type of eventhandler to more than one event by on function.
      // $("html").on("click keydown", function() {
      //     console.log("Mouse was clicked and key was pressed.");
      // });

      // var images = [
      //         "images/laptop-mobile_small.jpg",
      //         "images/laptop-on-table_small.jpg",
      //         "images/people-office-group-team_small.jpg",
      //     ];
        
      // var i = 0;
      // $(".gallery").find("img").on("click", function() {
      //   i = (i + 1) % images.length;
      //   $(this).fadeOut(function() {
      //     $(this).attr("src", images[i]).fadeIn();
      //   });
      // });

  //Inline Functions are those jha function ki value pass krni h wha hm function define kr rhe h poora and whi defination de rhe h function ki
  //Modularizing ka mtlb ye hota ki function bhar alag define kr diya fir usko call kr rhe h easy for complex functions

    // function logEvent(){
    //   console.log("Mouse was clicked and key was pressed.");
    // }
    // $("html").on("click keydown", logEvent);

    
      // var images = [
      //         "images/laptop-mobile_small.jpg",
      //         "images/laptop-on-table_small.jpg",
      //         "images/people-office-group-team_small.jpg",
      //     ];
        
      // var i = 0;
      // var galleryImage = $(".gallery").find("img");
      // galleryImage.on("click", logEvent);

      // function logEvent() {
  
      //   i = (i + 1) % images.length;
      //   galleryImage.fadeOut(function() {
      //     galleryImage.attr("src", images[i]).fadeIn();
      //   });
      
      // };

  //when you define dyanmic tags(like p, li, h2). the event handler doesnot work on it and we want to apply on all but jo last mei add kiya h dynamically uspr event occur nhi hoga

      // $("p").click(function(){
      //   $(this).slideUp();
      // });
      // $("#content").append("<p>This is a dynamically added paragraph.</p>");

    //To resolve this we use Delegated Events (means parent ke through child ko delegate krna)

  	  // $("#content").on("click", "p", function(){
      //   $(this).slideUp();
      // });
      // $("#content").append("<p>This is a dynamically added paragraph.</p>");

        // $("body").on("mouseenter", "li", function(){
        //   $(this).css("color", "#666");
        // });


   //How to add additional info when event occur
  //  $("#btn-click").click({
  //    user: "Peter",
  //    domain: "petersommerhoff.com"
  //  }, function(event){
  //     greetUser(event.data);
  //  }); 
   
  //  function greetUser(userdata) {
  //    username = userdata.user || "Anonymous";
  //    domain = userdata.domain || "example.com";

  //    alert("Welcome Back "+ username + " from "  + domain + " ! " );
  //  }

  //Make a images appear to lightbox
  //  var galleryItems = $(".gallery").find("img");
  //  galleryItems.css("width", "33%").css("opacity", "0.7");

  // galleryItems.mouseenter(function(){
  //   $(this).stop().fadeTo(500, 1);
  // });
  // galleryItems.mouseleave(function(){
  //   $(this).stop().fadeIn(500, 0.7);
  // });

  // galleryItems.click(function(){
  //   var source = $(this).attr("src");
  //   var image = $("<img>").attr("src", source).css("width", "100%");
  //   $(".lightbox").empty().append(image).fadeIn(2000);
  // });

  // $(".lightbox").click(function(){
  //   $(this).stop().fadeOut();
  // });

  //Key Press() - EVIL!
  //how to handle keyboard inputs from all users(means apne program mei keyboard keys ka function bi define kr sakte h like right arrow se box move krega)
      // $("html").keydown(function(event){
      //   console.log(event.which);
      // });

      // var RIGHT_ARROW = 39;
      // $("html").keydown(function(event){
      //   if (event.which == RIGHT_ARROW) {
      //    $(".blue-box").stop().animate({
      //      marginLeft: "+=10px"
      //    }, 50);
      //   }
      // });


      $( document ).ready(function() {
        console.log( "document loaded" );
    });

    $( window ).on( "load", function() {
      console.log( "window loaded" );
  });






});




