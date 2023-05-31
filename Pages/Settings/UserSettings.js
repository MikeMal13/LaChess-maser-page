
var nameFlag = false;
var password1Flag = false;
var password2Flag = false;
var mailFlag = false;
var radioFlag = false;
var checkBoxFlag = false;
var birthdayFlag = false;
var selectFlag = false;





function checkRegister() {

    checkName();
    checkPassword1();
    checkPassword2();
    checkMail();
    checkRadio();
    checkCheckBox();
    checkBirthday();

    if (nameFlag && password1Flag && password2Flag && mailFlag && radioFlag && checkBoxFlag && birthdayFlag) {
        return true;
    }

    return false;
}


//style="font-weight:900"
function checkName() {
    var name = document.getElementById("name").value;
    var nameDiv = document.getElementById("nameDiv");
    nameDiv.style.fontSize = "x-large";
    nameDiv.style.color = "red";
    if (name.length < 4) {
        nameDiv.innerHTML = "name less than 4";
        nameFlag = false;
        return;
    }
    for (var i = 0; i < name.length; i++) {
        if (!((name[i] >= 'a' && name[i] <= 'z') || name[i] == " ")) {
            nameDiv.innerHTML = "only small letters and spaces";
            nameFlag = false;
            return;
        }
    }
    nameFlag = true;
    nameDiv.innerHTML = "";
}


function checkPassword1() {
    var password1 = document.getElementById("password1").value;
    var password1Div = document.getElementById("password1Div");
    password1Div.style.fontSize = "x-large";
    password1Div.style.color = "red";
    //var a = password1.split(".");
    if (password1.length < 8) {
        password1Div.innerHTML = "password less than 8";
        password1Flag = false;
        return;
    }
    var numcount = 0;
    var speccount = 0;
    var smalllcount = 0;
    var bigcount = 0;
    for (var i = 0; i < password1.length; i++) {
        if (password1[i] >= '0' && password1[i] <= '9') {
            numcount++;
        }
        if (password1[i] == '#' || password1[i] == '!' || password1[i] == '*' || password1[i] == '&' || password1[i] == '?' || password1[i] == '@' || password1[i] == '$') {
            speccount++;
        }
        if (password1[i] >= 'a' && password1[i] <= 'z') {
            smalllcount++;
        }
        if (password1[i] >= 'A' && password1[i] <= 'Z') {
            bigcount++;
        }
    }
    if (numcount < 1) {
        password1Div.innerHTML = "please enter one number character";
        return;
    }
    if (speccount < 1) {
        password1Div.innerHTML = "please enter one special character";
        return;
    }
    if (smalllcount < 1) {
        password1Div.innerHTML = "please enter one small letter";
        return;
    }
    if (bigcount < 1) {
        password1Div.innerHTML = "please enter one big letter";
        return;
    }
    if (password1.length > 50) {
        password1Div.innerHTML = "please enter 50 or less characters"
        return;
    }
    password1Div.innerHTML = "";
    password1Flag = true;
}


function checkPassword2() {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var password2Div = document.getElementById("password2Div");

    password2Div.style.fontSize = "x-large";
    password2Div.style.color = "red";

    if (password2.length == 0) {
        password2Div.innerHTML = "field is empty";
        password2Flag = false;
        return;
    }

    if (password2 != password1) {
        password2Div.innerHTML = "password dont match";
        password2Flag = false;
        return;
    }
    password2Flag = true;
    password2Div.innerHTML = "";
}


function checkMail() {
    var mail = document.getElementById("mail").value;
    var mailDiv = document.getElementById("mailDiv");
    mailDiv.style.fontSize = "x-large";
    mailDiv.style.color = "red";

    // check for @ sign
    var atSymbol = mail.indexOf("@");
    if (atSymbol < 1) {
        mailDiv.innerHTML = "no @";
        mailFlag = false;
        return;
    }

    var dot = mail.indexOf(".");
    if (dot <= atSymbol + 2 && dot > 0) {
        mailDiv.innerHTML = "at least 2 characters between dot and @";
        mailFlag = false;
        return;
    }

    // check that the dot is not at the end
    if (dot == mail.length - 1) {
        mailDiv.innerHTML = "dot cannot be last character";
        mailFlag = false;
        return;
    }
    mailDiv.innerHTML = "";
    mailFlag = true;
}


function checkRadio() {

    radioDiv.style.fontSize = "x-large";
    radioDiv.style.color = "red";
    if (!document.getElementById("male").checked && !document.getElementById("female").checked && !document.getElementById("other").checked) {
        radioFlag = false;
        radioDiv.innerHTML = "please select one of the radio";
        return;
    }
    radioFlag = true;
    radioDiv.innerHTML = "";
}



function checkCheckBox() {
    checkBoxDiv.style.fontSize = "x-large";
    checkBoxDiv.style.color = "red";

    if (!document.getElementById("action").checked && !document.getElementById("horror").checked && !document.getElementById("comedy").checked && !document.getElementById("romance").checked && !document.getElementById("drama").checked && !document.getElementById("fantasy").checked) {
        checkBoxFlag = false;
        checkBoxDiv.innerHTML = "please select one of the check boxes";
        return;
    }
    checkBoxFlag = true;
    checkBoxDiv.innerHTML = "";
}


function checkBirthday() {
    var birthdayDiv = document.getElementById("birthdayDiv");
    var year = document.getElementById("birthday").value.split("-")[0];
    birthdayDiv.style.color = "red";
    birthdayDiv.style.fontSize = "x-large";

    if (year == "") {
        birthdayDiv.innerHTML = "enter birthday";
        birthdayFlag = false;
        return;
    }

    if (year > 2008) {
        birthdayDiv.innerHTML = "you are too young";
        birthdayFlag = false;
        return;
    }

    birthdayDiv.innerHTML = "";
    birthdayFlag = true;
}

