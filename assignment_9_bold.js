/*This function here was declared in order to test elementsByTagName which works
perfectly with a button, when the button is clicked all text within strong tags are highlighted.*/
function highlightText() {//text changer function declared here
    var x = document.getElementsByTagName("STRONG");//get all strong text we want to highlight
    var i;//keeps count of strong elements.
    for (i = 0; i < x.length; i++) {//this for loop goes through all strong elements length.
        x[i].style.backgroundColor = "red";//output all strong tags as one single color.
    }}


/*This function declared here was suppose to highlight bold
text, but instead does nothing, feed back on why would be great. */
document.getElementsByTagName("strong").onmouseover = function() {mouseOver()};
document.getElementsByTagName("strong").onmouseout = function() {mouseOut()};

//function on mouseover declared here changes the strong tags background color when mouseover is over the tag.
function mouseOver() {
    document.getElementsByTagName("strong").style.backgroundColor = "red";
}

//function on mouseout declared here changes the strong tags background color when mouseout.
function mouseOut() {
    document.getElementsByTagName("strong").style.backgroundColor = "black";
}