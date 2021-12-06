function validate(){
    let xSel = document.getElementById("X_selection");
    let x = xSel.value;
    let yInput = document.getElementById("Y_input");
    let y = yInput.value.trim();
    let rSel = document.getElementById("R_selection");
    let r = rSel.value;

    if (validateX(x,xSel)&&validateY(y,yInput)&&validateR(r,rSel)){
        alert(validateX(x,xSel)  +" "+ validateY(y,yInput) +" "+ validateR(r,rSel))
        handle(x,y,r);
        return false;
    }
    alert(validateX(x,xSel)  +" "+ validateY(y,yInput) +" "+ validateR(r,rSel))
    return false;
}


function validateX(x,xSel){
    /*    x ∈ { -4, -3, -2, -1, 0, 1, 2, 3, 4}    */
    if (x==="-4"||x==="-3"||x==="-2"||x==="-1"||x==="0"||x==="1"||x==="2"||x==="3"||x==="4"){
        xSel.classList.remove("invalidInput");
        return true;
    }
    xSel.classList.add("invalidInput");
    return false;
}

function validateY(y,yInput){
    /*    x ∈ { -3, ..., 5}    */
    if (y.match("^-?[0-3](\\.\\d+)?$")||y.match("^-?5(\\.0+)?$")||y.match("^-?4(\\.\\d+)?$")) {
        yInput.classList.remove("invalidInput");
        return true;
    }
    yInput.classList.add("invalidInput");
    return false;
}

function validateR(r,rSel) {
    /*    x ∈ { 1, 1.5, 2, 2.5, 3}    */
    if (r==="1"||r==="1.5"||r==="2"||r==="2.5"||r==="3"){
        rSel.classList.remove("invalidInput");
        return true;
    }
    rSel.classList.add("invalidInput");
    return false;
}

function handle(x,y,r){
    let xhr = new XMLHttpRequest();
    xhr.open('POST','../PHP%20PreProcessor%20Script/computing_script.php')
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function (){
        console.log(xhr.response);
        let response = JSON.parse(xhr.response);
        console.log(response['ctime']);
        addRow(response);
    }
    xhr.send('X='+x+'&Y='+y+'&R='+r);

}

function addRow (response){
    let row = document.createElement('tr');
    row.innerHTML = `<td>${response['x']}</td>
                    <td>${response['y']}</td>
                    <td>${response['r']}</td>
                    <td>${response['result']}</td>
                    <td>${response['ctime']}</td>
                    <td>${response['etime']}</td>`;
    document.getElementById('result_table').appendChild(row);
}
