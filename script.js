let length = 0;
/* The above sets a variable to detiremine the length of my square. The below is connecting my button to that of the myInput function */
document.getElementById('press').addEventListener('click', myInput);
/* Line 5 is the start of my math function. Line 6 is making the variable length become equal to my input-box. Line 7 is forming the mathmatical equation for my square. Lastly, line 8 is displaying my result through an alert */
function myInput() {
length = document.getElementById('box').value
length = (length ** 2)
alert(length)
}