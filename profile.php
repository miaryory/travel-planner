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
<body id="profile-page">

    <?php require_once(__DIR__.'/components/navbar.php') ?>

    <div class="profile-info">
        <div class="header">
            <div>
                <h1>Profile</h1>
            </div>
        </div>

        <div class="profile-picture">
            <img src="images/profile.svg" alt="Profile picture">
        </div>

        <p class="full-name"><?= $_SESSION['username'] ?></p>

        <a href="#">Edit</a>
    </div>

</body>
</html>