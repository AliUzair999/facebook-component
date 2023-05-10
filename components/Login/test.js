let loginPasswordApproved = false;
let loginPasswordCapital = false;
let loginPasswordLower = false;
let loginPasswordNumber = false;

// console.log(loginPassword[0].charCodeAt)

if (loginPassword.length >= 6) {
    if (loginPassword[0].charCodeAt() >= 48 && loginPassword[0].charCodeAt() <= 57) {
        alert("Password can not start with a number")
        console.log("num if chala")
    }
    else {
        for (var i = 0; i < loginPassword.length; i++) {
            console.log("i ki loop " + i)
            if (loginPassword[i].charCodeAt() >= 97 && loginPassword[i].charCodeAt() <= 122) {
                loginPasswordLower = true
                console.log("small mil gaya" + i)
                for (var j = 0; j < loginPassword.length; j++) {
                    console.log("j ki loop" + i + j)
                    if (loginPassword[j].charCodeAt() >= 65 && loginPassword[j].charCodeAt() <= 90) {
                        loginPasswordCapital = true;
                        console.log("cap mil gaya" + i + j)
                        for (var k = 0; k < loginPassword.length; k++) {
                            console.log(`k ki loop ${i} ${j} ${k}`)
                            if (loginPassword[k].charCodeAt() >= 48 && loginPassword[k].charCodeAt() <= 57) {
                                loginPasswordNumber = true;
                                loginPasswordApproved = true;
                                break;
                            }
                            if (k == loginPassword.length - 1 && loginPasswordNumber == false) {
                                console.log("number ka if chala")
                                j = loginPassword.length
                                i = loginPassword.length
                            }
                        }
                    }
                    if (loginPasswordApproved === true) {
                        break;
                    }
                    if (j == loginPassword.length - 1 && loginPasswordCapital == false) {
                        i = loginPassword.length
                    }
                }
            }
            if (loginPasswordApproved == true) {
                break;
            }
            console.log(loginPassword[i])
        }

        if (loginPasswordLower == false) {
            alert("Please enter atleat one lowercase character")
        }
        else if (loginPasswordCapital == false) {
            alert("Please enter atleat one uppercase character")
        }
        else if (loginPasswordNumber == false) {
            alert("Please enter atleat one number")
        }
    }
}
else {
    alert("minimun password length is 6 characters")
}

if (loginPasswordApproved == true) {
    alert("password accepted")
}