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
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('email1');
    var userPw = document.getElementById('userPw');

    if(userName.value == storedName && userPw.value == storedPw ) {
        alert('You are loged in successful.');
        window.open('home.html')
    } else {
        alert('User name and password invalid.');
    }
}





function forgot() {
    var storeemail = localStorage.getItem('email');

    var email1= document.getElementById('email1');

    if(email1.value == storeemail) {
        // alert('You can reset your password.');
        window.open('resetpassword.html')
    } else {
        alert('User email id is invalid.');
    }
}

function update() {

    var pw = document.getElementById('pw');
    localStorage.setItem('pw',pw.value);

    var storepassword = localStorage.getItem('pw');
    var repassword = document.getElementById('repw');
    // localStorage.setItem('password',password.value);

   if(repassword.value == storepassword) {
        alert('Your password reset successfully.');
        window.open('pages-login-v2.html')
    } else {
        alert('Passwords do not match.');
    }

}