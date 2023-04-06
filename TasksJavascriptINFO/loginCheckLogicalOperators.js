let login = prompt ('Please enter you login', '');
if (login == "Admin") {
    let password = prompt ('Please enter your password', '');
    if (password == "TheMaster") {
        alert("Welcome")
    } else if (password == '' || password == null) {
        alert("Cancelled")
    } else {
        alert("Wrong password")
    }
} else if (login == '' || login == null) {
    alert("Cancelled")
} else {
    alert("I don't know you")
}