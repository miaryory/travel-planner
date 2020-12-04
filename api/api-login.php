<?php

require_once( __DIR__.'/../private/db.php');

try{
    $query = $db->prepare('SELECT * FROM users WHERE userEmail = :userEmail LIMIT 1');
    $query->bindValue(':userEmail', $_POST['login-email']);
    $query->execute();
    $row = $query->fetch();
    if(password_verify($_POST['login-password'], $row->userPassword)){
        session_start();
        $_SESSION['userid'] = $row->userId;
        $_SESSION['username'] = $row->userFullname;
        header('location:../dashboard.php');
        exit();
    }
    http_response_code(401);
}
catch(Exception $ex){
    echo $ex;
    sendError(500, 'system under maintainance', __LINE__);
}

// #############################################
function sendError($iResponseCode, $sMessage, $iLine){
    http_response_code($iResponseCode);
    header('Content-Type: application/json');
    echo '{"message":"'.$sMessage.'", "error":'.$iLine.'}';
    exit();
}
