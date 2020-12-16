<?php

session_start();

if( ! isset($_POST['signup-name']) ){
sendError(400,'name', 'missing name', __LINE__);
}
if( ! isset($_POST['signup-email']) ){
sendError(400,'email', 'missing email', __LINE__);
}
if( ! isset($_POST['signup-password']) ){
sendError(400,'password', 'missing password', __LINE__);
}
if( ! isset($_POST['signup-confirm-password']) ){
sendError(400,'password-confirmation', 'missing passwordConfirmation', __LINE__);
}

if( strlen($_POST['signup-name']) < 2 ){
sendError(400,'name', 'name must be at least 2 characters', __LINE__);
}
if( strlen($_POST['signup-name']) > 40 ){
sendError(400,'name', 'name cannot be longer than 5 characters', __LINE__);
}

if( ! filter_var( $_POST['signup-email'], FILTER_VALIDATE_EMAIL ) ){
sendError(400,'email', 'email is not valid', __LINE__);
}
if( strlen($_POST['signup-password']) < 2 ){
sendError(400,'password', 'password must be at least 2 characters', __LINE__);
}
if( strlen($_POST['signup-password']) > 30 ){
sendError(400,'password', 'password cannot be longer than 5 characters', __LINE__);
}
if( $_POST['signup-password'] !=  $_POST['signup-confirm-password'] ){
sendError(400,'password-confirmation', 'passwords do not match', __LINE__);
}

//access DB
$sUsers = file_get_contents(__DIR__.'/../private/users.txt');
$aUsers = json_decode($sUsers);

try{
    //check of email is already registered
    foreach($aUsers as $aUser){
        if($_POST['signup-email'] == $aUser[2]){
            sendError(400,'email', 'this email is already used', __LINE__);
            header('location: ../signup.php'); 
        }
    }

    //add user in DB
    $aUser=[uniqid(), $_POST['signup-name'], $_POST['signup-email'], password_hash($_POST['signup-password'], PASSWORD_DEFAULT), "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png", 0];

    array_push($aUsers, $aUser);
    file_put_contents(__DIR__.'/../private/users.txt', json_encode($aUsers));
    echo '{"message":"Signup successful. Log in to access your account."}';
    // header('location: ../signup.php');
    exit();
}
catch(Exception $ex){
    sendError(500,'password-confirmation', 'system under maintainance', __LINE__);
}

// #############################################
function sendError($iResponseCode, $element, $sMessage, $iLine){
    http_response_code($iResponseCode);
    header('Content-Type: application/json');
    echo '{"element":"'.$element.'","message":"'.$sMessage.'", "error":'.$iLine.'}';
    exit();
}
