<?php

session_start();

//access DB
$sTrips = file_get_contents(__DIR__.'/../private/trips.txt');
$aTrips = json_decode($sTrips);

try{
    foreach($aTrips as $index=> $aTrip){
        if($_POST['tripId'] == $aTrip[0] ){
            array_splice($aTrips, $index, 1);
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
