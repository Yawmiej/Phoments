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