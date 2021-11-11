function validate(){

    if (validateX()&&validateY()&&validateR()){
        alert(validateX() + validateY() + validateR())
        return true;
    }
    alert(validateX()  +" "+ validateY() +" "+ validateR())
    return false;
}
function validateX(){
    let xSel = document.getElementById("X_selection");
    let x = xSel.value;
    if (x!=""){
        console.log("X["+x+"] - is valid.");
        return true;
    }
    console.log("X["+x+"] - is invalid.");
    return false;
}

function validateY(){
    let yInput = document.getElementById("Y_input");
    let y = yInput.value.trim();
    if (y.match("^-?[0-4](\\.\\d+)?$")||y.match("^-?5(\\.0+)?$")) {
        return true;
    }
    return false;
}

function validateR() {
    let rSel = document.getElementById("R_selection");
    let r = rSel.value;
    if (r!=""){
        console.log("R["+r+"] - is valid.");
        return true;
    }
    console.log("R["+r+"] - is invalid.");
    return false;
}