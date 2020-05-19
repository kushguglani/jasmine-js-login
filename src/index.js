authenticateLogin = () => {
    event.preventDefault();
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    console.log(username);
    console.log(password);
    let isUserNameValid = usernameValidate(username);
    let isPasswordValidate = passwordValidate(password);
    console.log(isUserNameValid);
    console.log(isPasswordValidate);

    if (!isUserNameValid) {
        document.querySelector("#error").innerHTML = "UserName is Inavlid";
    } else if (!isPasswordValidate) {
        document.querySelector("#error").innerHTML = "Password is Inavlid"
    }
    else {
        document.querySelector("#error").innerHTML = "";
        window.location.href="./dashboard.html"
    }

}

usernameValidate = (name) => {
    // Only contains alphanumeric characters, underscore and dot.
    // Underscore and dot can't be at the end or start of a username (e.g _username / username_ / .username / username.).
    // Underscore and dot can't be next to each other (e.g user_.name).
    // Underscore or dot can't be used multiple times in a row (e.g user__name / user..name).
    // Number of characters must be between 8 to 20.
    let reg = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    return reg.test(name);
}

passwordValidate = (password) => {
    /*password between 6 to 20 characters which contain 
     at least one numeric digit, one uppercase and one lowercase letter */
    let reg = /^[A-Za-z]\w{7,14}$/;
    return reg.test(password);
}