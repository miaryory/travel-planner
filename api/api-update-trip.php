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

//access DB
$sTrips = file_get_contents(__DIR__.'/../private/trips.txt');
$aTrips = json_decode($sTrips);

try{

    foreach($aTrips as &$aTrip){
        if($_GET['tripId'] == $aTrip[0]){
            $aTrip = [$_GET['tripId'], $_POST['trip-title'], $_POST['trip-destination'], $_POST['trip-date'] ?? date('d/m/Y'), $_SESSION['userid'], 0];
            echo json_encode($aTrip);
            break;
        }

    }
    file_put_contents(__DIR__.'/../private/trips.txt', json_encode($aTrips));
    
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
