function store() {
    var name = document.getElementById('name');
    localStorage.setItem("name",name.value);

    var sname = document.getElementById('sname');
    localStorage.setItem('sname',sname.value);

    var email = document.getElementById('email');
    localStorage.setItem('email',email.value);

    var log = document.getElementById('log');
    localStorage.setItem('log',log.value);

    var pw = document.getElementById('pw');
    localStorage.setItem('pw',pw.value);

    var repw = document.getElementById('repw');
    localStorage.setItem('repw',repw.value); 

    var password = document.getElementById("pw").value;
        var confirmPassword = document.getElementById("repw").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;

}

function check() {
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    } else {
        alert('ERROR.');
    }
}

function Validate() {
        var password = document.getElementById("pw").value;
        var confirmPassword = document.getElementById("repw").value;
        if (password != confirmPassword) {
            alert("Passwords do not match.");
            return false;
        }
        return true;
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
