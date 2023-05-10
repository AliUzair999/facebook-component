import { useState } from "react"
import openMonkey from "../../images/monkey-open.jpg"
import closeMonkey from "../../images/monkey-close.jpg"

function Login(props) {
    const [loginImg, setLoginImg] = useState(true)
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPassword, setLoginPassword] = useState("")
    const [imgUrl, setImgUrl] = useState(openMonkey)


    const checkLogin = () => {
        // console.log("checkLogin clicked")

        // Email Authentication
        let loginEmailApproved = false

        if (loginEmail.includes('@')) {
            if (loginEmail.includes('.')) {
                loginEmailApproved = true;
            }
            else {
                alert("Please write a correct email")
            }
        }
        else {
            alert("Email must include '@' sign")
        }




        // Password Authetication
        let loginPasswordApproved = false;
        let loginPasswordCapital = false;
        let loginPasswordLower = false;
        let loginPasswordNumber = false;

        // console.log(loginPassword[0].charCodeAt)

        if (loginPassword.length >= 6) {
            if (loginPassword[0].charCodeAt() >= 48 && loginPassword[0].charCodeAt() <= 57) {
                alert("Password can not start with a number")
                // console.log("num if chala")
            }
            else {
                for (var i = 0; i < loginPassword.length; i++) {
                    // console.log("i ki loop " + i)
                    if (loginPassword[i].charCodeAt() >= 97 && loginPassword[i].charCodeAt() <= 122) {
                        loginPasswordLower = true
                        // console.log("small mil gaya" + i)
                        for (var j = 0; j < loginPassword.length; j++) {
                            // console.log("j ki loop" + i + j)
                            if (loginPassword[j].charCodeAt() >= 65 && loginPassword[j].charCodeAt() <= 90) {
                                loginPasswordCapital = true;
                                // console.log("cap mil gaya" + i + j)
                                for (var k = 0; k < loginPassword.length; k++) {
                                    // console.log(`k ki loop ${i} ${j} ${k}`)
                                    if (loginPassword[k].charCodeAt() >= 48 && loginPassword[k].charCodeAt() <= 57) {
                                        loginPasswordNumber = true;
                                        loginPasswordApproved = true;
                                        break;
                                    }
                                    if (k == loginPassword.length - 1 && loginPasswordNumber == false) {
                                        // console.log("number ka if chala")
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
                    // console.log(loginPassword[i])
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

        if (loginPasswordApproved == true && loginEmailApproved == true) {
            props.setLoginStatus(true)
            alert("Login Successful")
        }

        // if (props.loginStatus) {

        // }

    }

    return (<>
    <div className="mainDiv">
        
        <div id="loginImg">
            <img src={imgUrl} width={200} />
        </div>

        {/* <p>The email is {loginEmail}</p>
        <p>The password is {loginPassword}</p> */}

<div className="inputDiv">

        <label>
            Email:    
            <input type="email" id="loginEmail" onClick={() => { setImgUrl(openMonkey) }} onChange={event => setLoginEmail(event.target.value)} value={loginEmail} />
        </label>
        <br />
        <label>
            Password:
            <input type="password" id="loginPassword" onClick={() => { setImgUrl(closeMonkey) }} onChange={event => setLoginPassword(event.target.value)} value={loginPassword} />
        </label>

        <br />

</div>
        <button onClick={checkLogin}>Login</button>

        </div>

        <p>You can use any valid email and password should have atleast 6 characters with atleast one upperCase and one number.</p>

    </>)
}


export default Login