//Section1: This section is for Navigation menu, start

/*Navigation opener, its sets width of side-nav to 80% when menu-icon is pressed*/
function openNav(){
    document.getElementById('sideNav').style.right = "0";
    document.getElementById('navLeft').style.left = "0";
}

/*Navigation closer, it sets width of side-nav to 0 when close-btn is pressed*/
function closeNav(){
    document.getElementById('sideNav').style.right = "-80%";
    document.getElementById('navLeft').style.left = "-20%";    
}

//Section1 ends here

//Section2: This section is for signup button activation

function agree(checkbox, signupButton){
  var button = document.getElementById(signupButton);

  if(checkbox.checked === true){
    button.disabled = "";
    button.style.backgroundColor = "#F35E86";
  } else{
    button.disabled = "disabled";
    button.style.backgroundColor = "#999";
  }
}

//Section2 ends