/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    
    // code codes in here 
    console.log("App Started...");
    
    
    /*
    // declare named function
    function writeToFirstParagraph() {
        // for debugging only
        console.log("Executing writeToFirstParagraph");
        
        // create a reference to a p element with an id of "firstParagraph"
        var firstPTag = document.getElementById("firstParagraph");
    
        firstPTag.textContent = "It's alive!!!";
    }
    */
    
    // declare a variable that points to anonymous function
    var writeToFirstParagraph = function() {
        // for debugging only
        console.log("Executing writeToFirstParagraph");
        
        // create a reference to a p element with an id of "firstParagraph"
        var firstPTag = document.getElementById("firstParagraph");
    
        firstPTag.textContent = "It's alive!!!";
    } 
   
    
    
    // execute function
    writeToFirstParagraph();
    
    console.log(firstParagraph);
    
    
})();