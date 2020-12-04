<?php

session_start();

if (! isset($_SESSION['userid'])){
    sendError(400,"cannot fetch trips", __LINE__ );
}

require_once( __DIR__.'/../private/db.php');

try{
    $query = $db->prepare('SELECT * FROM trips JOIN users ON trips.tripCreatorFk = users.userId');
    $query->execute();
    $aRows = $query->fetchAll();
    header('Content-Type:application/json');
    echo json_encode($aRows);
    exit();
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