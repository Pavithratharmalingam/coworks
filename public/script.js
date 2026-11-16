let formdata = document.getElementById("validation");

formdata.addEventListener("submit", (userdata) => {

    userdata.preventDefault();

    let username = document.getElementById("cname").value.trim();
    let usermobile = document.getElementById("ctel").value.trim();
    let useremail = document.getElementById("cemail").value.trim();
    let userreason = document.getElementById("creason").value.trim();
    let useraddress = document.getElementById("caddress").value.trim();

    let errormsg1 = document.getElementById("errorname");
    let errormsg2 = document.getElementById("errornumber");
    let errormsg3 = document.getElementById("errormail");
    let errormsg4 = document.getElementById("errorfeedback");
    let errormsg5 = document.getElementById("erroraddress");

    let details = {
        "username": username,
        "usermobile": usermobile,
        "useremail": useremail,
        "userreason": userreason,
        "useraddress": useraddress
    };

    let isvalid = true;


    if (!username) {
        errormsg1.innerHTML = "Please fill the name";
        isvalid = false;
    }
    else if (username.length < 3) {
        errormsg1.innerHTML = "Please enter a valid name, the character should be larger than 3";
        isvalid = false;
    }
    else {
        errormsg1.innerHTML = "";
    }


    const pattern = /^(\+91[-\s]?)?[6-9]\d{9}$/;

    if (!usermobile) {
        errormsg2.innerHTML = "Please enter the mobile number";
        isvalid = false;
    }
    else if (!pattern.test(usermobile)) {
        errormsg2.innerHTML = "Please enter a valid phone number";
        isvalid = false;
    }
    else {
        errormsg2.innerHTML = "";
    }

    const mailidp =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!useremail) {
        errormsg3.innerHTML = "Please enter a mail-id";
        isvalid = false;
    }
    else if (!mailidp.test(useremail)) {
        errormsg3.innerHTML = "Please enter a valid mail-id";
        isvalid = false;
    }
    else {
        errormsg3.innerHTML = "";
    }

    if (!useraddress) {
        errormsg5.innerHTML = "Please enter the address";
        isvalid = false;
    }
    else {
        errormsg5.innerHTML = "";
    }


    if (!userreason) {
        errormsg4.innerHTML = "Please enter the reason";
        isvalid = false;
    }
    else if (userreason.length < 150) {
        errormsg4.innerHTML =
            "Please give the feedback at least 150 characters";
        isvalid = false;
    }
    else {
        errormsg4.innerHTML = "";
    }


    if (isvalid) {

        alert("Form submitted successfully");

        console.log(details);

        localStorage.setItem(
            "userinformation",
            JSON.stringify(details)
        );

        formdata.reset();
    }
});


function tooglemenu() {
    let menus = document.getElementById("hiddenmenu");

    menus.classList.toggle("show");
}




