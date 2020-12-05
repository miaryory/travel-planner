<?php

session_start();

if (! isset($_SESSION['userid'])){
    sendError(400,"cannot create trip", __LINE__ );
}
if( ! isset($_POST['trip-title']) ){
    sendError(400, 'missing trip title', __LINE__);
}
if( ! isset($_POST['trip-destination']) ){
    sendError(400, 'missing trip destination', __LINE__);
}

if( strlen($_POST['trip-title']) < 2 ){
    sendError(400, 'title must be at least 2 characters', __LINE__);
}
if( strlen($_POST['trip-title']) > 255 ){
    sendError(400, 'name cannot be longer than 255 characters', __LINE__);
}
if( strlen($_POST['trip-destination']) < 2 ){
    sendError(400, 'destination must be at least 2 characters', __LINE__);
}
if( strlen($_POST['trip-destination']) > 255 ){
    sendError(400, 'destination cannot be longer than 255 characters', __LINE__);
}

// require_once( __DIR__.'/../private/db.php');

try{
    //INSERT INTO trips VALUES (:tripid, :triptitle, :tripdestination, :tripdate, :tripcreatorid, :tripbudget)
    // $query = $db->prepare('UPDATE trips SET tripTitle = :triptitle, tripDestination = :tripdestination WHERE tripId = :tripId');
    // $query->bindValue(':triptitle', $_POST['trip-title']);
    // $query->bindValue(':tripdestination', $_POST['trip-destination']);
    // $query->bindValue(':tripId', $_GET['tripId']);
    // $query->execute();

    // echo $iTweetId;
    // $query = $db->prepare('SELECT * FROM trips JOIN users ON trips.tripCreatorFk = users.userId WHERE tripId = :tripId LIMIT 1');
    // $query->bindValue(':tripId', $_GET['tripId']);
    // $query->execute();
    // $row = $query->fetch();
    // header('Content-Type: application/json');
    // echo json_encode($row);
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
