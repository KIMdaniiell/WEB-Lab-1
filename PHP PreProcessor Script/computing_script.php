<?php
    function isHit($x,$y,$r) {
        if (isRightTop($x,$y,$r)||isRightBottom($x,$y,$r)||isLeftTop($x,$y,$r)){
            return true;
        }
        return false;
    }

    function isRightTop($x,$y,$r) {
        if (($x>=0)&&($y>=0)&&($x**2 +   $y**2 <= $r**2)){
            return true;
        }
        return false;
    }

    function isRightBottom($x,$y,$r) {
        if (($x>=0)&&($y<=0)&&($x-$y<=$r/2)){
            return true;
        }
        return false;
    }

    function isLeftTop($x,$y,$r) {
        if (($x<=0)&&($y>=0)&&($x>=-$r)&&($y<=$r)){
            return true;
        }
        return false;
    }

    function xIsValid( $x){
        if (preg_match("/^-?[0-4]$/", $x)){
            return true;
        }
        return false;
    }
    function yIsValid($y){
        if (!preg_match("/^-?[0-4](\.\d+)?$/", $_POST["R"]) && !preg_match("/^-?5(\.0+)?$/", $_POST["R"])) {
            return false;
        }
        return true;
    }
    function rIsValid($r){
        if (preg_match("/^[1-3](\\.5)?$/", $_POST["R"])) {
            return true;
        }
        return false;
    }

    $start = microtime(true);
    date_default_timezone_set('Europe/Moscow');
    global $x;
    global $y;
    global $r;
    if (isset($_POST['X']) && isset($_POST['Y']) && isset($_POST['R'])) {
        $x = trim($_POST['X']);
        $y = trim($_POST['Y']);
        $r = trim($_POST['R']);
    }
    $current_time = date('G:i:s', time());
    $result = "";
    if (xIsValid($x)&&yIsValid($y)&&rIsValid($r)){
        if (isHit($x,$y,$r)){
            $result = "Попадание";
        } else {
            $result = "Промах";
        }
    } else{
        $result = "Ошибка ввода";
    }
    $processing_time = round((microtime(true) - $start) * 10000, 6);
?>