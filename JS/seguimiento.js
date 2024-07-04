function check_form() {

    let codigo=document.querySelector("#codigo");
    let check_form = true;

    codigo.style.border= "2px solid black";

    if(codigo.value=="") {
        codigo.style.border= "5px solid red";
        check_form = false;
    }
    if(!/^USP+\d{7}[0-9]$/.test(codigo.value)){
        codigo.style.border= "5px solid red";
        check_form = false;
    }

    if(check_form){
        codigo.value="";
        codigo.style.border = "5px solid green";
    }
    return check_form;
}