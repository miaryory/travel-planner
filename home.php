<?php

    session_start();

    if( !isset($_SESSION['userid'])){
        header('location: index.php');
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Planner</title>
    <link rel="stylesheet" href="css/mobile-style.css">
    <link rel="stylesheet" href="css/tablet-style.css">
    <link rel="stylesheet" href="css/desktop-style.css">
</head>
<body id="home-page" onload="getTrips()">

    <?php require(__DIR__.'/components/navbar.php') ?>

    <div class="page-container">
        <?php require_once(__DIR__.'/dashboard.php') ?>
        <?php require_once(__DIR__.'/profile.php') ?>
        <?php require_once(__DIR__.'/settings.php') ?>
    </div>

    <script src="js/app.js"></script>
</body>
</html>