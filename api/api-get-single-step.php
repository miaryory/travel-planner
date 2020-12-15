<?php

session_start();

if (! isset($_SESSION['userid'])){
    sendError(400,"cannot fetch trips", __LINE__ );
}

//access DB
$sSteps = file_get_contents(__DIR__.'/../private/steps.txt');
$aSteps = json_decode($sSteps);

try{

    foreach($aSteps as $aStep){
        if($_GET['stepId'] == $aStep[0]){
            echo json_encode($aStep);
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