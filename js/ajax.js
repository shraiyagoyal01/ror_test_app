$(function(){

    //$.load() :- retrieve files from your own server like:- js files and have to define path from where we have to load data from server 
    //eg: here load js file

    // $("#code").load("js/ajax.js");

    //show the code of js file.script js file retrieve from the server itself

    //also define callback functions here:-
    // $("#code").load("idontexist.php", function(response, status){
    // if (status == "error") {
    //     alert("could not find idontexist.php");
    // } 
    // console.log(response); 
    // });


    //add flickr images through JSON

    // var flickrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?"; //for jsonp and allow data from other server also.

    //pass object for configration from flickr website
    // $.getJSON(flickrApiUrl, {
    //     tags: "sun, beach",
    //     tagmode: "any",
    //     format: "json"
    // }).done(function(data) {
    //     console.log(data);
    //     $.each(data.items, function(index, item) {
    //         console.log(item);
    //         $("<img>").attr("src", item.media.m).appendTo("#flickr");

    //         if(index == 4) {
    //             return false;
    //         }
    //     })
    // }).fail(function() {
    //     alert("Ajax call failed!");
    // })




    // var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";

    // $.getJSON(pokeapiUrl).done(function(data) {
    //     console.log(data);
    //     $.each(data.pokemon_species, function(index, pokemon) {
    //         var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    //         var par = $("<p>").html("Pokemon Species no. " + (index+1) + " is " + name);
    //         par.appendTo("#pokemon");
    //     });
    // }).fail(function() {
    //     console.log("Request to Pokeapi failed.");
    // }).always(function(){
    //     console.log("Pokemon is Awesome!");
    // });























});