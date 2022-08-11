var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("confirmationForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, z, valid = true;
  x = document.getElementsByClassName("tab");


 //checks the first tab works correctly 
if(x[currentTab].firstElementChild.innerHTML == 'PERSONAL DETAILS:'){
    console.log('first tab')
    console.log(x[0].firstElementChild.innerHTML)
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
    z = x[0].getElementsByTagName("select");
    // If a field is empty...
    if (z[1].value == "") {
        // add an "invalid" class to the field:
        z[1].className += " invalid";
        // and set the current valid status to false:
        valid = false;
    }
    if(z[0].value == 'KCPE' || z[0].value=='KCSE'){
    if(z[1].value != ""){
        if(z[2].value == ""){
            z[2].className = "form-select";
            // and set the current valid status to true:
            valid = true
            console.log(z[2].classList);

        }
        else{
            z[2].className += " invalid";
            valid = false
        }
    }
    }
    if(z[0].value == ""){
        // add an "invalid" class to the field:
        z[0].className += " invalid";
        // and set the current valid status to false:
        valid = false
    }

    if(z[2].value == ""){
        console.log('series empty')
        //if tech is provided
        exams=['KCPE','KCSE']
        if(exams.includes(z[0].value)){

        }
        else{
            // add an "invalid" class to the field:
            z[2].className += " invalid";
            // and set the current valid status to false:
            valid = false
        }
    }

    if(z[2].value != ""){
        console.log('series not empty')
        //if tech is provided
        exams=['KCPE','KCSE']
        if(exams.includes(z[0].value)){
            // add an "invalid" class to the field:
            z[2].value= "";
            z[2].classList.remove(['invalid'])
        }
        else{
            
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

if(x[currentTab].firstElementChild.innerHTML == 'ADDRESS OF THE INSTITUTION REQUESTING CONFIRMATION'){
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
      // If a field is empty...
      if (y[i].value == "") {
        // add an "invalid" class to the field:
        y[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
  console.log('tab 2')
  z = x[1].getElementsByTagName("select");
  for (i = 0; i < z.length; i++) {
    // If a field is empty...
    if (z[i].value == "") {
      // add an "invalid" class to the field:
      z[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  f = x[1].getElementsByTagName("textarea");
  for (i = 0; i < f.length; i++) {
    // If a field is empty...
    if (f[i].value == "") {
      // add an "invalid" class to the field:
      f[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }


     // If the valid status is true, mark the step as finished and valid:
     if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
      }
      return valid; // return the valid status
 
}

if(x[currentTab].firstElementChild.innerHTML == 'OPTIONALS: FILL WHERE APPLICABLE'){
    console.log('tab 3')
    z = x[2].getElementsByTagName("input");
    for (i = 0; i < z.length; i++) {
      // If a field is empty...
      if (z[i].value == "") {
        valid=true;
      }
    }
  
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
   
  }
 

  if(x[currentTab].firstElementChild.innerHTML == 'ATTACHMENTS'){
    console.log('tab 4')
    z = x[3].getElementsByTagName("input");
    for (i = 0; i < z.length; i++) {
      // If a field is empty...
      if (z[i].value == "") {
        // add an "invalid" class to the field:
        z[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
  
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
   
  }  

  if(x[currentTab].firstElementChild.innerHTML == 'DISPATCH'){
    console.log('tab 5')
    z = x[4].getElementsByTagName("select");
    for (i = 0; i < z.length; i++) {
      // If a field is empty...
      if (z[i].value == "") {
        // add an "invalid" class to the field:
        z[i].className += " invalid";
        // and set the current valid status to false:
        valid = false;
      }
    }
  
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
   
  } 
   // If the valid status is true, mark the step as finished and valid:
   if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}



function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

