//document.getElementById('firstName')

// get to value of a input save it to cookie//
var fName = document.getElementById('fname').value;
// get to value of a input save it to cookie//
Cookies.set('firstName', fName);

//var fname = Cookies.get('firstName');
//attach a click event to a button
document.getElementById('submit').addEventListener('click', function(){
  var fName = document.getElementById('fname').value;
  Cookies.set('firstName', fName);




});



//console.log(fName);
