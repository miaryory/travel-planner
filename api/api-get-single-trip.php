<?php

session_start();

$_SESSION['userid']=5;

if (! isset($_SESSION['userid'])){
    sendError(400,"cannot fetch trips", __LINE__ );
}

//access DB
$sTrips = file_get_contents(__DIR__.'/../private/trips.txt');
$aTrips = json_decode($sTrips);

try{

    foreach($aTrips as $aTrip){
        if($_GET['tripId'] == $aTrip[0]){
            echo json_encode($aTrip);
            exit();
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