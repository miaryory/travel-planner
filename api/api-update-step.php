<?php

session_start();

if (! isset($_SESSION['userid'])){
    sendError(400,"cannot create trip", __LINE__ );
}
if( ! isset($_POST['step-title']) ){
    sendError(400, 'missing title', __LINE__);
}
if( ! isset($_POST['step-destination']) ){
    sendError(400, 'missing destination', __LINE__);
}

if( strlen($_POST['step-title']) < 2 ){
    sendError(400, 'title must be at least 2 characters', __LINE__);
}
if( strlen($_POST['step-destination']) < 2 ){
    sendError(400, 'destination must be at least 2 characters', __LINE__);
}

//access DB
$sSteps = file_get_contents(__DIR__.'/../private/steps.txt');
$aSteps = json_decode($sSteps);

try{

    foreach($aSteps as &$aStep){
        if($_POST['stepID'] == $aStep[0]){
            $aStep = [$_POST['stepID'], $_POST['step-title'], $_POST['step-budget'], $_POST['step-destination'], $_POST['step-date'] ?? date('d/m/Y'), $_POST['step-note'], $_SESSION['userid']];
            echo json_encode($aStep);
            break;
        }

    }
    file_put_contents(__DIR__.'/../private/steps.txt', json_encode($aSteps));
    
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
