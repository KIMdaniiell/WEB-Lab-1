function validate(){

    let dataIsCorrect = true;
    let x;
    let y;
    let r;
    console.log("Валидация...");
    console.log("\tX равен:" + x);
    console.log("\tY равен:" + y);
    console.log("\tR равен:" + r);
    Array.from(document.getElementsByClassName("formfield"))
        .forEach(node => {
                switch (node.id) {
                    case 'X_selection' :
                        {let v = validateX(node);
                        dataIsCorrect = dataIsCorrect * v;
                        console.log("\tВалидность X = "+v);
                        x = node.value;
                        break;}
                    case 'Y_input' :
                        {let v = validateY(node);
                        dataIsCorrect = dataIsCorrect * v;
                        console.log("\tВалидность Y = "+v);
                        y = node.value;
                        break;}
                    case 'R_selection' :
                        {let v = validateR(node);
                        dataIsCorrect = dataIsCorrect * v;
                        console.log("\tВалидность R = "+v);
                        r = node.value;
                        break;}
                }
            }
        );
    console.log("Результат проверки:" + dataIsCorrect);
    if (dataIsCorrect) {
        console.log("Формируется POST запрос.");
        handle(x,y,r);
    }
    return false;
}


function markField (field) {
    /** Выделяет выбранное поле как некорректно введенное  */
    field.classList.add("invalidInput");
    Array.from(field.parentElement.getElementsByClassName("error"))
        .forEach(o =>
            o.innerHTML = "<br>*Please input correct Y value");
}

function unmarkField (field) {
    /** Убирает выделение (см. markField) с выбранного поля */
    field.classList.remove("invalidInput");
    Array.from(field.parentElement.getElementsByClassName("error")).forEach(o =>
        o.innerHTML = "");
}

function validateX(xSel){
    /** Выполняет валидацию поля X.
     * x ∈ { -4, -3, -2, -1, 0, 1, 2, 3, 4}
     * @param xSel HTML элемент - т.е. фоле формы.
     * **/
    let x = xSel.value;
    //let reg1 = /^-?[0-4]&/;

    if (x==="-4"||x==="-3"||x==="-2"||x==="-1"||x==="0"||x==="1"||x==="2"||x==="3"||x==="4"){
        unmarkField(xSel);
        return true;
    }
    markField(xSel);
    return false;
}

function validateY(yInput){
    /** Выполняет валидацию поля Y.
     * y ∈ { -3, ..., 5}
     * @param yInput HTML элемент - т.е. фоле формы.
     * **/
    let y = yInput.value;

    let reg1 = /^-?[0-2](\.\d+)?$/;
    let reg2 = /^-3(\.0+)?$/;
    let reg3 = /^5(\.0+)?$/;
    let reg4 = /^[34](\.\d+)?$/;

    if (reg1.test(y)||reg2.test(y)||reg3.test(y)||reg4.test(y)) {
        unmarkField(yInput);
        return true;
    }
    markField(yInput);
    return false;
}

function validateR(rSel) {
    /** Выполняет валидацию поля R.
     * x ∈ { 1, 1.5, 2, 2.5, 3}
     * @param rSel HTML элемент - т.е. фоле формы.
     * **/

    let r = rSel.value;
    //let reg1 = /^-?[1-3]&/;
    //let reg2 = /^-?[1-2]\.5&/;

    if (r==="1"||r==="1.5"||r==="2"||r==="2.5"||r==="3"){
        unmarkField(rSel);
        return true;
    }
    markField(rSel);
    return false;
}

function handle(x,y,r){
    /**
     * Формирует POST запрос и отправляет на обработку.
     * @param x,y,r Данные введенные пользователем в форму .
    **/

    let xhr = new XMLHttpRequest();
    xhr.open('POST','../PHP%20PreProcessor%20Script/computing_script.php')
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function (){
        let response = JSON.parse(xhr.response);
        addRow(response);
    }

    xhr.send('X='+x+'&Y='+y+'&R='+r);
    //Т.к. искользуется метод POST, данные передаются в теле запроса.
}

function addRow (response){
    /**
     * Добавляет в HTML таблицу данные о результате вычисления и вводные данные.
     * @param response Расспаршенный (см. handle) ассоциативный массив с данными.
     */

    let row = document.createElement('tr');

    row.innerHTML = `<td>${response['x']}</td>
                    <td>${response['y']}</td>
                    <td>${response['r']}</td>
                    <td>${response['result']}</td>
                    <td>${response['ctime']}</td>
                    <td>${response['etime']}</td>`;

    document.getElementById('result_table').appendChild(row);
}
