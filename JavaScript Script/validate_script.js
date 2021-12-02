function validate(){
    if (validateX()&&validateY()&&validateR()){
        alert(validateX()  +" "+ validateY() +" "+ validateR())
        return true;
    }
    alert(validateX()  +" "+ validateY() +" "+ validateR())
    return false;
}
function validateX(){
    /*    x ∈ { -4, -3, -2, -1, 0, 1, 2, 3, 4}    */
    let xSel = document.getElementById("X_selection");
    let x = xSel.value;
    if (x==="-4"||x==="-3"||x==="-2"||x==="-1"||x==="0"||x==="1"||x==="2"||x==="3"||x==="4"){
        xSel.classList.remove("invalidInput");
        return true;
    }
    xSel.classList.add("invalidInput");
    return false;
}

function validateY(){
    /*    x ∈ { -3, ..., 5}    */
    let yInput = document.getElementById("Y_input");
    let y = yInput.value.trim();
    if (y.match("^-?[0-3](\\.\\d+)?$")||y.match("^-?5(\\.0+)?$")||y.match("^-?4(\\.\\d+)?$")) {
        yInput.classList.remove("invalidInput");
        return true;
    }
    yInput.classList.add("invalidInput");
    return false;
}

function validateR() {
    /*    x ∈ { 1, 1.5, 2, 2.5, 3}    */
    let rSel = document.getElementById("R_selection");
    let r = rSel.value;
    if (r==="1"||r==="1.5"||r==="2"||r==="2.5"||r==="3"){
        rSel.classList.remove("invalidInput");
        return true;
    }
    rSel.classList.add("invalidInput");
    return false;
}
