<?php

if( ! isset($_POST['signup-name']) ){
sendError(400, 'missing name', __LINE__);
}
if( ! isset($_POST['signup-email']) ){
sendError(400, 'missing email', __LINE__);
}
if( ! isset($_POST['signup-password']) ){
sendError(400, 'missing password', __LINE__);
}
if( ! isset($_POST['signup-confirm-password']) ){
sendError(400, 'missing passwordConfirmation', __LINE__);
}

if( strlen($_POST['signup-name']) < 2 ){
sendError(400, 'name must be at least 2 characters', __LINE__);
}
if( strlen($_POST['signup-name']) > 40 ){
sendError(400, 'name cannot be longer than 5 characters', __LINE__);
}

if( ! filter_var( $_POST['signup-email'], FILTER_VALIDATE_EMAIL ) ){
sendError(400, 'email is not valid', __LINE__);
}
if( strlen($_POST['signup-password']) < 2 ){
sendError(400, 'password must be at least 2 characters', __LINE__);
}
if( strlen($_POST['signup-password']) > 30 ){
sendError(400, 'password cannot be longer than 5 characters', __LINE__);
}
if( $_POST['signup-password'] !=  $_POST['signup-confirm-password'] ){
sendError(400, 'passwords do not match', __LINE__);
}

require_once( __DIR__.'/../private/db.php');

try{
    //check of email is already registered
    $query = $db->prepare('SELECT * FROM users WHERE userEmail = :email LIMIT 1');
    $query->bindValue(':email', $_POST['signup-email']);
    $query->execute();
    $aRow = $query->fetch();
    if( $aRow ){
        sendError(500, 'email already registered', __LINE__);
    }
    // INSERT INTO users VALUES (NULL, :user_fullname, :user_email, :user_password, :user_profile_picture_url, :user_number_of _trips)
    $query = $db->prepare('INSERT INTO users VALUES (:id, :userfullname, :useremail, :userpassword, :userprofilepictureurl, :usernumberoftrips)');
    $query->bindValue(':id', null);
    $query->bindValue(':userfullname', $_POST['signup-name']);
    $query->bindValue(':useremail', $_POST['signup-email']);
    $query->bindValue(':userpassword', password_hash($_POST['signup-password'], PASSWORD_DEFAULT));
    $query->bindValue(':userprofilepictureurl', "https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png");
    $query->bindValue(':usernumberoftrips', 0);
    $query->execute();
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
