var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n)
{
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

function nextPrev(n)
{
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
    console.log(currentTab);
    //...the form gets submitted:
    document.getElementById("confirmationForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm()
{
  // This function deals with validation of the form fields
  var x, y, i, z, valid = true;
  x = document.getElementsByClassName("tab");


 //checks the first tab works correctly 
  if(x[currentTab].firstElementChild.innerHTML == 'PERSONAL DETAILS:')
  { 
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++)
    { 
      if( y[i].id == "id_number" && y[i].value.length != 8)
      {
        y[i].className += " invalid";
        //display error
        var lastSibling = y[i].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        
        // and set the current valid status to false:
        valid = false;
        // If a field is empty...
        if (y[i].value != "") {
          lastSibling.innerHTML='ID must be 8 digits';
        }
        
        return;
      }
      if( y[i].id == "index_number" && y[i].value.length != 11)
      {
        y[i].className += " invalid";
        //display error
        var lastSibling = y[i].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        
        // and set the current valid status to false:
        valid = false;
        // If a field is empty...
        if (y[i].value != "") {
          lastSibling.innerHTML='ID must be 11 digits';
        }
        
        return;
      }
      else{
        y[i].classList.remove("invalid");
        var lastSibling = y[i].parentNode.lastElementChild;
        lastSibling.style.display = "none";
        valid = true;
      }
    }

    // validate select fields
    z = x[0].getElementsByTagName("select");

    // Exam Type
    if(z[0].value == '')
    {
      z[0].className += " invalid";
      console.log(z[0]);
      var lastSibling = z[0].parentNode.lastElementChild;
      lastSibling.style.display = "block";
      valid = false;
      return;
    }

    if(z[0].value == 'KCPE' || z[0].value=='KCSE')
    {
      z[2].value='';
      z[2].classList.remove("invalid");
      valid = true
      var lastSibling = z[0].parentNode.lastElementChild;
      lastSibling.style.display = "none";
    }
    else{
      //if tech is provided
      z[0].classList.remove("invalid");
      var lastSibling = z[0].parentNode.lastElementChild;
      lastSibling.style.display = "none";
      if(z[2].value == "")
      {
        var lastSibling = z[2].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        valid = false;
        return;
      }
      else{
        z[2].classList.remove("invalid");
        var lastSibling = z[2].parentNode.lastElementChild;
        lastSibling.style.display = "none";
        valid = true;
      }

    }
    //exam year
    if (z[1].value == "")
    {
      z[1].className += " invalid";
      var lastSibling = z[1].parentNode.lastElementChild;
      lastSibling.style.display = "block";
      valid = false;
      return;
    }
    else{
      z[1].classList.remove("invalid");
      var lastSibling = z[1].parentNode.lastElementChild;
      lastSibling.style.display = "none";
      valid = true;
    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) 
    {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid;
}

if(x[currentTab].firstElementChild.innerHTML == 'ADDRESS OF THE INSTITUTION REQUESTING CONFIRMATION')
{
  //input fields
    y = x[currentTab].getElementsByTagName("select");
    for (i = 0; i < y.length; i++) 
    {
      // If a field is empty...
      if (y[i].value == "")
      {
        y[i].className += " invalid";
        valid = false;
        var lastSibling = y[i].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        return;
      }
      else{
        y[i].classList.remove("invalid");
        valid = true;
        var lastSibling = y[i].parentNode.lastElementChild;
        lastSibling.style.display = "none";
      }
    }

  //select fields
  z = x[currentTab].getElementsByTagName("input");
  for (i = 0; i < z.length; i++) {
    if (z[i].value == "") {
      z[i].className += " invalid";
      valid = false;
      var lastSibling = z[i].parentNode.lastElementChild;
      lastSibling.style.display = "block";
      return;
    }
    else{
      z[i].classList.remove("invalid");
      valid = true;
      var lastSibling = z[i].parentNode.lastElementChild;
      lastSibling.style.display = "none";
    }
  }

  //text
  f = x[currentTab].getElementsByTagName("textarea");
  for (i = 0; i < f.length; i++) {
    if (f[i].value == "") {
      f[i].className += " invalid";
      valid = false;
      var lastSibling = f[i].parentNode.lastElementChild;
      lastSibling.style.display = "block";
      return;
    }
    else{
      f[i].classList.remove("invalid");
      valid = true;
      var lastSibling = f[i].parentNode.lastElementChild;
      lastSibling.style.display = "none";
    }
  }


  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; 

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
    f = x[3].getElementsByTagName("input");
    for (i = 0; i < f.length; i++) {
      if (f[i].value == "") {
        f[i].className += " invalid";
        valid = false;
        var lastSibling = f[i].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        return;
      }
      else{
        f[i].classList.remove("invalid");
        valid = true;
        var lastSibling = f[i].parentNode.lastElementChild;
        lastSibling.style.display = "none";
      }
    }
  
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
   
  }  

  if(x[currentTab].firstElementChild.innerHTML == 'DISPATCH'){
    console.log('dispatch')
    f = x[currentTab].getElementsByTagName("input");
    for (i = 0; i < f.length; i++) {
      if (f[i].value == "") {
        f[i].className += " invalid";
        valid = false;
        var lastSibling = f[i].parentNode.lastElementChild;
        lastSibling.style.display = "block";
        return;
      }
      else{
        f[i].classList.remove("invalid");
        valid = true;
        var lastSibling = f[i].parentNode.lastElementChild;
        lastSibling.style.display = "none";
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

