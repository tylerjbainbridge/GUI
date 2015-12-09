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

src="//code.jquery.com/jquery-1.9.1.js"
src="//ajax.aspnetcdn.com/ajax/jquery.validate/1.9/jquery.validate.min.js"

function myFunction() {
    var num1 = document.getElementsByName("number1")[0].value; //
    var num2 = document.getElementsByName("number2")[0].value;
    var num3 = document.getElementsByName("number3")[0].value;
    var num4 = document.getElementsByName("number4")[0].value;
    var i;
    var j;
    var string = "";

    if (!isNaN(num1) & !isNaN(num2) & !isNaN(num3) & !isNaN(num4) & num1.length != 0 & num2.length != 0 & num3.length != 0 & num4.length != 0) { //some javascript validation
        var array = [num1, num2, num3, num4];
        string = string + "<br>";
        string = string + "<table>"; //opening the table

        string = string + "<tr>" + "<th>" + " " + "</th>"; //for (1,1) and starts a row
        for (j = 0; j < array.length; j++) //for the first row(printing the original four numbers)
        {
            string = string + "<th>" + array[j] + "</th>" //prints the first number (i, 1)
        }

        string = string + "</tr>"; //ends the first row

        for (i = 0; i < array.length; i++) //for each row
        {
            string = string + "<tr>"; //starts a row
            string = string + "<th>" + array[i] + "</th>";
            for (j = 0; j < array.length; j++) //for each column in each row
            {
                string = string + "<th>" + array[i] * array[j] + "</th>"
            }
            string = string + "</tr>"; //ends the row at the end of the iteration
        }
        string = string + "</table>"; //closed the table

        document.getElementById("result").innerHTML = string; //puts the content between the div tags

    } else {
        validateForm();
        string = "<br>Whoops! Looks like you didn't enter information correctly! Try entering four numbers.";
        document.getElementById('result').innerHTML = string    ;


    }
}

<!-- Load jQuery and jQuery-Validate scripts -->
src="http://code.jquery.com/jquery-1.11.1.min.js"
src="http://jqueryvalidation.org/files/dist/jquery.validate.min.js"
src="http://jqueryvalidation.org/files/dist/additional-methods.min.js"

function validateForm(){
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
// When the document is ready
    $(document).ready(function () {

        //validation rules
        $("#numbers").validate({
            rules: {
                "number1": {
                    required: true,
                    digits: true
                },
                "number2": {
                    required: true,
                    digits: true
                },
                "number3": {
                    required: true,
                    digits: true
                },
                "number4": {
                    required: true,
                    digits: true
                }
            },
            messages: {
                "number1": {
                    required: "ERROR: Missing first number",
                    digits : "ERROR: Not a positive integer value"
                },
                "number2": {
                    required: "ERROR: Missing second number",
                    digits : "ERROR: Not a positive integer value"
                },
                "number3": {
                    required: "ERROR: Missing third number",
                    digits : "ERROR: Not a positive integer value"
                },
                "number4": {
                    required: "ERROR: Missing fourth number",
                    digits: "ERROR: Not a positive integer value"
                }
            }
        });

    });
}
