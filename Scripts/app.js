/*
File name: app.js
Author name: Khushdial Singh
website name: Khushdial Singh
Description: this file includes all the javascript element that are used in the project

*/

//Declaration of an array that will contain all the text string used in the project
var texts = [
    "Khushdial Singh",
    "I was born in India on March 22, 1996. At the age of 5 I moved to Italy were I lived for 14 years. I completed all my studies there and after getting my high school diploma in I.T., I decided to move to Canada to obtain a higher qualification in the technology field. I've been always interested in computers and software developing and I hope to get a good job in this field.",
    "My projects",
    "Project 1: Milk's composition",
    "I did this project during my last year of High-School in Italy. The main site was Prepared for the International Expo Fair that was taking place in Milan. The majority of the site was made by the entire class except the page linked below which was made entirely by me.",
    "Project 2: Energy Conservation",
    "I did project during my last semester at Centennial College in COMP213. This project is based on energy conservation methods.",
    "Project 3: Scarborough Bluffs Tennis Club",
    "This project is an application form which will allow people to join the Scarborough Tennis Club"
    ];

//IIFE function that contains all the coding to write on the pages
(function(){  
    
    var ids = [];
    ids[0] = document.getElementById('title1');
    ids[1] = document.getElementById('content1');
    ids[2] = document.getElementById('title2');
    ids[3] = document.getElementById('smallTitle1');
    ids[4] = document.getElementById('smallContent1');
    ids[5] = document.getElementById('smallTitle2');
    ids[6] = document.getElementById('smallContent2');
    ids[7] = document.getElementById('smallTitle3');
    ids[8] = document.getElementById('smallContent3');
    
    for (var i = 0; i < ids.length; i++) {
        
        if (ids[i]){
            ids[i].textContent = texts[i];}
    }
})();

   
    // creating link to all the field
   

   var form = document.getElementById("Form");
   
   //writing in the console
   if(form){
       form.addEventListener("submit", function(event){
       event.preventDefault();

       var firstName = document.getElementById("firstName");
   var lastName = document.getElementById("lastName");
   var email = document.getElementById("email");
   var contactNumber = document.getElementById("contactNumber");
   var message = document.getElementById("message");

   
        console.log("First Name: " + firstName.value);
        console.log("Last Name: " + lastName.value);
        console.log("Email: " + email.value);
        console.log("Contact Number: " + contactNumber.value);
        console.log("Message: " + message.value);
        form.reset();
        }); };   


