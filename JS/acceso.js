function check_form() {

    let email=document.querySelector("#email");
    let pass=document.querySelector("#pass");
    let check_form = true;

    email.style.border= "2px solid black";
    pass.style.border= "2px solid black";

    if(email.value=="") {
        email.style.border= "5px solid red";
        check_form = false;
    }
    if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)){
        email.style.border= "5px solid red";
        check_form = false;
    }
    if(pass.value=="") {
        pass.style.border= "5px solid red";
        check_form = false;
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(pass.value)) {
        pass.style.border= "5px solid red";
        check_form = false;
    }

    if(check_form){
        email.value="";
        email.style.border = "5px solid green";
        pass.value="";
        pass.style.border = "5px solid green";
    }
    return check_form;
}