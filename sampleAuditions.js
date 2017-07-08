function clearErrors() {    
    console.log("clearErrors()");
    for (var loopCounter = 0; 
        loopCounter < document.forms["evenNumForm"].elements.length; 
        loopCounter++) {
        if (document.forms["evenNumForm"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["evenNumForm"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
}
function resetForm() {  
    console.log("resetForm()");
    clearErrors();
    document.forms["evenNumForm"]["numStart"].value = "";
    document.forms["evenNumForm"]["numEnding"].value = "";
    document.forms["evenNumForm"]["numStep"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("resultList").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["evenNumForm"]["numStart"].focus();
}

function validateItems() {
    console.log("validateItems()");
    clearErrors();

    var numStart = Number(document.forms["evenNumForm"]["numStart"].value);
    console.log("numStart: " + numStart);
    
    if (numStart == "" || isNaN(numStart)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["evenNumForm"]["numStart"]
           .parentElement.className = "form-group has-error";
        document.forms["evenNumForm"]["numStart"].focus();
        return false;
    }
    
    var numEnding = Number(document.forms["evenNumForm"]["numEnding"].value);
    console.log("numEnding: " + numEnding);

    if (numEnding == "" || isNaN(numEnding)) {
       alert("Ending Number must be filled in with a number.");
       document.forms["evenNumForm"]["numEnding"]
          .parentElement.className = "form-group has-error"
       document.forms["evenNumForm"]["numEnding"].focus();
       return false;
    }

    if (numEnding <= numStart) {
       alert("Ending Number(" + numEnding + ") must be larger than Starting Number(" + numStart + ").");
       document.forms["evenNumForm"]["numEnding"]
          .parentElement.className = "form-group has-error"
       document.forms["evenNumForm"]["numEnding"].focus();
       return false;
    }

    var numStep = Number( document.forms["evenNumForm"]["numStep"].value);
    console.log("numStep: " + numStep);

   if (numStep < 0) {
       posNum = " POSITIVE ";
   } else {
       posNum = " ";
   }

   if (numStep == "" || isNaN(numStep) || numStep < 0) {
       alert("Step must be filled in with a" + posNum + "number.");
       document.forms["evenNumForm"]["numStep"]
          .parentElement.className = "form-group has-error"
       document.forms["evenNumForm"]["numStep"].focus();
       return false;
   }

    for (var index = numStart; index <= numEnding; index+=numStep){
        if (index % 2) {
            console.log("ODD: " + index + " index % 2 = " + index % 2);
        } else {
            console.log("EVEN: " + index + " index % 2 = " + index % 2);
            var node = document.createElement("li");
            var listItemText = document.createTextNode(index);
            node.appendChild(listItemText);
            document.getElementById("resultList").appendChild(node);
        }
    }

   document.getElementById("resultList").style.display = "block";
   document.getElementById("startNum").innerText = numStart;
   document.getElementById("endNum").innerText = numEnding;
   
   //return false will prevent the form from submitting
   return false;
}