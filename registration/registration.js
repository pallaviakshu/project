var name = document.getElementById('name');
var sname = document.getElementById('sname');
var email = document.getElementById('email');
var log = document.getElementById('log');
var pw = document.getElementById('pw');
var repw = document.getElementById('repw');


function someFunc() {
    store();

}
function store() {
    localStorage.setItem('name',name.value);
    localStorage.setItem('sname',sname.value);
    localStorage.setItem('email',email.value);
    localStorage.setItem('log',log.value);
    localStorage.setItem('pw',pw.value);
    localStorage.setItem('repw'.repw.value); 
}

function nextpage()
{
    var url = "file:///home/sid-1/pallavi/Atlant/pages-login-v2.html";
    window.location(url);
}
  



// $(document).ready(function() {
// $("#Signup").click(function() {
// var firstname = $("#firstname").val();
// localStorage.setItem("lastname", "Smith");
// var.surname = $('#surname')
// var email = $("#email").val();
// var password = $("#password").val();
// var repassword = $("#repassword").val();
// if (firstname == '' || suname == '' || email == '' || password == '' || repassword == '') {
// alert("Please fill all fields...!!!!!!");
// } else if ((password.length) < 8) {
// alert("Password should atleast 8 character in length...!!!!!!");
// } else  (!(password).match(repassword)) {
// alert("Your passwords don't match. Try again?");
