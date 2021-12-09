<?php
function isHit($x, $y, $r)
{
    //Из-за оссобености варианта можно не проверять нижний левый угол. В него невозможно попасть.
    return (isRightTop($x, $y, $r) || isRightBottom($x, $y, $r) || isLeftTop($x, $y, $r));
}

function isRightTop($x, $y, $r)
{
    return ($x >= 0) && ($y >= 0) && ($x ** 2 + $y ** 2 <= $r ** 2);
}

function isRightBottom($x, $y, $r)
{
    return ($x >= 0) && ($y <= 0) && ($x - $y <= $r / 2);
}

function isLeftTop($x, $y, $r)
{
    return ($x <= 0) && ($y >= 0) && ($x >= -$r) && ($y <= $r);
}

function xIsValid($x)
{
    /** Выполняет валидацию поля X.
     * x ∈ { -4, -3, -2, -1, 0, 1, 2, 3, 4}
     **/

    //  preg_match("/^-?[0-4]&/", $x)
    return ($x == "-4" || $x == "-3" || $x == "-2" || $x == "-1" || $x == "0" || $x == "1" || $x == "2" || $x == "3" || $x == "4");
}

function yIsValid($y)
{
    /** Выполняет валидацию поля Y.
     * y ∈ { -3, ..., 5}
     **/

    $reg1 = "/^-3(\.0+)?$/";        //  [ -3.(0) ; -3 ]
    $reg2 = "/^-?[0-2](\.\d+)?$/";  //  ( -3 ; 3 )
    $reg3 = "/^[34](\.\d+)?$/";     //  [ 3 ; 5 )
    $reg4 = "/^5(\.0+)?$/";         //  [ 5 ; 5.(0) )
    $reg5 = "/^0+$/";               //  (0)

    return (preg_match($reg1, $y)
        || preg_match($reg2, $y)
        || preg_match($reg3, $y)
        || preg_match($reg4, $y)
        || preg_match($reg5, $y));
}

function rIsValid($r)
{
    /** Выполняет валидацию поля R.
     * x ∈ { 1, 1.5, 2, 2.5, 3}
     **/

    //preg_match("/^-?[1-3]$/", $r)
    //preg_match("/^-?[1-2]\.5$/", $r)
    return ($r == "1" || $r == "1.5" || $r == "2" || $r == "2.5" || $r == "3");
}
$x = "-";
$y = "-";
$r = "-";
$result = "ОШИБКА POST ЗАПРОСА";
$current_time = "-";
$processing_time = "-";

//====================================================================================================

if (!empty($_POST))  {

    //Проверка на установленность всех значений
    if (isset($_POST['X']) && isset($_POST['Y']) && isset($_POST['R'])) {
        $x = trim($_POST['X']);
        $y = trim($_POST['Y']);
        $r = trim($_POST['R']);

        //Проверка на валидность всех значений
        if (xIsValid($x)&&yIsValid($y)&&rIsValid($r)) {
            //Проверка на попадание
            if (isHit($x, $y, $r)) {
                $result = "Попадание";
            } else {
                $result = "Промах";
            }

            date_default_timezone_set('Europe/Moscow');
            $processing_time = round((microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"]), 6);
            $current_time = date('G:i:s', time());

        }else {
            $result = "Некорректные данные!";
        }
    } else {
        $result = "Не все поля заполнены!";
    }
}

$response = '{
                "x": "' . $x . '",
                "y": "' . $y . '",
                "r": "' . $r . '",
                "result": "' . $result . '",
                "ctime": "' . $current_time . '",
                "etime": "' . $processing_time . '"
                }';
echo $response;

