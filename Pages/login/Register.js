//errors list
const errors1 = ['Enter user name', 'name shorther than 4 letters', 'only letters and __ in name', 'Enter a password', 'password is too short, min size is 6', 'password too long, max size is 50', 'password nees to include at least 1 letter', 'enter confirm password', 'passwords dont match']
const errors2 = ['enter your email', 'no @', 'at least 2 characters between dot and @', 'dot cannot be last character', 'please select your gender']
const errors3 = []


function check1(jumpNull) {
    let name = document.getElementById("name").value;
    var password2 = document.getElementById("password2").value;
    var password1 = document.getElementById("password1").value;
    let x = true
    let count = 0;


    for (var i = 0; i < password1.length; i++)
        if ((password1[i] >= 'A') && (password1[i] <= 'z'))
            count++;

    for (var i = 0; i < name.length; i++)
        if (!((name[i] >= 'a' && name[i] <= 'z') || (name[i] >= 'A' && name[i] <= 'Z') || name[i] == "_"))
            x = false



    //checks
    if (!jumpNull || name != '') {
        if (name.length == 0) return 0
        if (name.length < 4) return 1
        if (!x) return 2
    }

    if (!jumpNull || password1 != '') {
        if (password1.length == 0) return 3
        if (password1.length < 6) return 4
        if (password1.length > 50) return 5
        if (count < 1) return 6
    }

    if (!jumpNull || password2 != '') {
        if (password2.length == 0) return 5
        if (password2 != password1) return 6
    }

    return true;
}


function check2(jumpNull) {
    var mail = document.getElementById("mail").value;
    var dot = mail.indexOf(".")
    var atSymbol = mail.indexOf("@");

    if (!jumpNull || mail.length != 0) {
        if (mail.length == 0) return 0
        if (atSymbol < 1) return 1
        if (dot <= atSymbol + 2 && dot > 0) return 2
        if (dot === mail.length - 1) return 3
    }

    if (!jumpNull) {
        if (!document.getElementById("male").checked && !document.getElementById("female").checked && !document.getElementById("other").checked) {
            return 4
        }
    }


    return true;
}


//error set
function errorSet1() {
    let x = check1(true)
    console.log(x);

    if (x === true) {
        document.getElementById("errorLog1").innerHTML = '';
    } else {
        TheErrorHendeler2000(1, x)
    }
}

function errorSet2() {
    let x = check2(true)
    console.log(x);

    if (x === true) {
        document.getElementById("errorLog2").innerHTML = '';
    } else {
        TheErrorHendeler2000(2, x)
    }
}



function TheErrorHendeler2000(part, index) {
    let log = document.getElementById("errorLog" + part);
    let errors;

    //get the right error list
    switch (part) {
        case 1:
            errors = errors1;
            break;

        case 2:
            errors = errors2;
            break;

        case 3:
            errors = errors3;
            break;
    }


    //add the error
    log.innerHTML = errors[index]

}



function register() {


    let x = check1(false)
    if (x === true) {
        document.getElementById("errorLog1").innerHTML = '';
    } else {
        TheErrorHendeler2000(1, x)
    }


    let y = check2(false)
    console.log(y);
    if (y === true) {
        document.getElementById("errorLog2").innerHTML = '';
    } else {
        TheErrorHendeler2000(2, y)
    }


    if (x === true && y === true) {

        console.log('yes');
        return true

    } else {

        console.log('no')
        return false
    }

}