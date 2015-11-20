/*
 Tyler J. Bainbridge
 tyler_bainbridge@student.uml.edu
 91.461 GUI Programming I
 Assignment 6: Javascript

 Tyler Bainbridge, UMass Lowell Computer Science, tbainbr@cs.uml.edu
 Copyright (c) 2015 by Tyler J Bainbridge
 updated by TJB on October 19th, October 19th, 2015 at 7:45 PM
 */

/*importing font faces for the website.*/

/**
 * Created by Tyler on 11/2/2015.
 */

//the jQuery Validation Plugin is from http://bassistance.de/jquery-plugins/jquery-plugin-validation
src="//code.jquery.com/jquery-1.9.1.js"
src="//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"

// Load jQuery and jQuery-Validate scripts
src="http://code.jquery.com/jquery-1.11.1.min.js"
src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"
src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"

src="//code.jquery.com/jquery-1.10.2.js"
src="//code.jquery.com/ui/1.11.4/jquery-ui.js"

var totalTabs = 0;

$(function() {

    //slider variables for each number
    var sliderOpts1 = {
        max: 99,
        value: 50,
        slide: function( event, ui ) {
            $(".num1").val(ui.value);
        }
    };

    var sliderOpts2 = {
        max: 99,
        value: 50,
        slide: function( event, ui ) {
            $(".num2").val(ui.value);
        }
    };

    var sliderOpts3 = {
        max: 99,
        value: 50,
        slide: function( event, ui ) {
            $(".num3").val(ui.value);
        }
    };

    var sliderOpts4 = {
        max: 99,
        value: 50,
        slide: function( event, ui ) {
            $(".num4").val(ui.value);
        }
    };

    //initializing the sliders
    $( "#slider1" ).slider(sliderOpts1);
    $( "#slider2" ).slider(sliderOpts2);
    $( "#slider3" ).slider(sliderOpts3);
    $( "#slider4" ).slider(sliderOpts4);

});
function doThings(){
    $('ul.tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
}
//This function was created with the help of stack overflow http://stackoverflow.com/questions/23892420/javascript-tab-navigation-issue
// Wait until the DOM has loaded before querying the document
$(document).ready(function(){
    $('ul.tabs').each(function(){
        // For each set of tabs, we want to keep track of
        // which tab is active and it's associated content
        var $active, $content, $links = $(this).find('a');

        // If the location.hash matches one of the links, use that as the active tab.
        // If no match is found, use the first link as the initial active tab.
        $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
        $active.addClass('active');

        $content = $($active[0].hash);

        // Hide the remaining content
        $links.not($active).each(function () {
            $(this.hash).hide();
        });

        // Bind the click event handler
        $(this).on('click', 'a', function(e){
            // Make the old tab inactive.
            $active.removeClass('active');
            $content.hide();

            // Update the variables with the new link and content
            $active = $(this);
            $content = $(this.hash);

            // Make the tab active.
            $active.addClass('active');
            $content.show();

            // Prevent the anchor's default click action
            e.preventDefault();
        });
    });
});

function addTab(strTable){
    //initializing the variables with the element information
    var one = document.getElementsByName("number1")[0].value;
    var two = document.getElementsByName("number2")[0].value;
    var three = document.getElementsByName("number3")[0].value
    var four = document.getElementsByName("number4")[0].value;
    //a nice name for the links
    var linkName = one + " " + two + " " + three +  " " + four;
    //creating a div id for the links
    var tab = "tab";
    totalTabs++;
    tab = tab + totalTabs;

    //adding a tab
    $(".tabs").tabs();

    //adding to a list of tabs
    $(".tabs").append(
        "<li><a href=" + "#" + tab + ">" + linkName + "</li>"
    );

    //adding divs after the list
    $(".tabs").after(
        "<div class=\"tabStyle\" id=" + "\"" + tab + "\"" + ">" + "<p>" + strTable + "</p>" + "</div>"
    )

    //refresh the tabs
    $(".tabs").tabs("refresh");
}



//initializes the jQuery validator
jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
});

$(document).ready(function () {         //if the document is ready

    //validation rules
    $("#numbers").validate({            //validates the form "numbers"
        rules: {                        //the rules for the error messages
            "number1": {
                required: true,         //input is required
                digits: true,           //must be a a digit (aka no negative numbers)
                maxlength: 2            //can't input a number larger than two
            },
            "number2": {
                required: true,         //input is required
                digits: true,           //must be a a digit (aka no negative numbers)
                maxlength: 2            //can't input a number larger than 100
            },
            "number3": {
                required: true,         //input is required
                digits: true,           //must be a a digit (aka no negative numbers)
                maxlength: 2            //can't input a number larger than 100
            },
            "number4": {
                required: true,         //input is required
                digits: true,           //must be a a digit (aka no negative numbers)
                maxlength: 2            //can't input a number larger than 100
            }
        },
        messages: {                     //the messages that correspond with the broken rules
            "number1": {
                required: "ERROR: Missing first number",        //tell the user which field is missing input
                digits : "ERROR: Not a positive integer value",  //tell the user what they are doing wrong
                maxlength : "ERROR: Max input length: 2"
            },
            "number2": {
                required: "ERROR: Missing second number",        //tell the user which field is missing input
                digits : "ERROR: Not a positive integer value",  //tell the user what they are doing wrong
                maxlength : "ERROR: Max input length: 2"
            },
            "number3": {
                required: "ERROR: Missing third number",        //tell the user which field is missing input
                digits : "ERROR: Not a positive integer value",  //tell the user what they are doing wrong
                maxlength : "ERROR: Max input length: 2"
            },
            "number4": {
                required: "ERROR: Missing fourth number",        //tell the user which field is missing input
                digits : "ERROR: Not a positive integer value",  //tell the user what they are doing wrong
                maxlength : "ERROR: Max input length: 2"
            }
        }
    });

});

function updateSlider(){

    //updating the slider value when the text box is manipulated
    $("#slider1").slider('value',document.getElementsByName("number1")[0].value);
    $("#slider2").slider('value',document.getElementsByName("number2")[0].value);
    $("#slider3").slider('value',document.getElementsByName("number3")[0].value);
    $("#slider4").slider('value',document.getElementsByName("number4")[0].value);
}

function myFunction() {
    var num1 = document.getElementsByName("number1")[0].value; //taking in number 1
    var num2 = document.getElementsByName("number2")[0].value; //taking in number 2
    var num3 = document.getElementsByName("number3")[0].value; //taking in number 3
    var num4 = document.getElementsByName("number4")[0].value; //taking in number 4
    var i;              //for iterating
    var j;              //for iterating
    var string = "";    //for holding the strings

    if (!isNaN(num1) & !isNaN(num2) & !isNaN(num3) & !isNaN(num4) & num1.length != 0 & num2.length != 0 & num3.length != 0 & num4.length != 0) { //some javascript validation
        var array = [num1, num2, num3, num4];
        string = string + "<br>";                               //new line for spacing
        string = string + "<table>";                            //opening the table

        string = string + "<tr>" + "<th>" + " " + "</th>";      //for (1,1) and starts a row
        for (j = 0; j < array.length; j++)                      //for the first row(printing the original four numbers)
        {
            string = string + "<th>" + array[j] + "</th>"       //prints the first number (i, 1)
        }

        string = string + "</tr>";                              //ends the first row

        for (i = 0; i < array.length; i++)                      //for each row
        {
            string = string + "<tr>";                           //starts a row
            string = string + "<th>" + array[i] + "</th>";
            for (j = 0; j < array.length; j++)                  //for each column in each row
            {
                string = string + "<th>" + array[i] * array[j] + "</th>"
            }
            string = string + "</tr>";                          //ends the row at the end of the iteration
        }
        string = string + "</table>";                           //closed the table

        //document.getElementById("result").innerHTML = string; //puts the content between the div tags
        addTab(string);

    } else {
        string = "<br>Whoops! Looks like you didn't enter information correctly! Try entering four numbers.";
        document.getElementById('result').innerHTML = string    ;


    }
}

