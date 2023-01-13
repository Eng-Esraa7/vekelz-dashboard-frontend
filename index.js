function addActiveToDashboard(e) {
    console.log("c");
    var elems = document.querySelector("a.active");
    if (elems != null) {
        elems.classList.remove('active');
    }
    e.target.className = "active";
}


function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    //type password
    if (x.type === "password") {
        //change type to text
        x.type = "text";
        show_eye.style.display = "none";
        hide_eye.style.display = "block";
        //type text
    } else {
        x.type = "password";
        show_eye.style.display = "block";
        hide_eye.style.display = "none";
    }
}