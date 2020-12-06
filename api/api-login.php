<?php

//access DB
$sUsers = file_get_contents(__DIR__.'/../private/users.txt');
$aUsers = json_decode($sUsers);

try{

    foreach( $aUsers as $aUser ){
        if( $_POST['login-email']  == $aUser[2] && $_POST['login-password'] == password_verify($_POST['login-password'],$aUser[3]) ){
            session_start();
            $_SESSION['userid'] = $aUser[0];
            $_SESSION['username'] = $aUser[1];
            header('location: ../home.php');
            exit();
        }
        else{
            http_response_code(401);
        }   
    }
    
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
