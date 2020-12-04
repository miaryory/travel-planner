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
<body id="dashboard-page">

    <?php require_once(__DIR__.'/components/navbar.php') ?>
    <?php require_once(__DIR__.'/components/all-trips.php') ?>
    <?php require_once(__DIR__.'/components/trip-details.php') ?>
    <?= file_get_contents(__DIR__.'/components/trip-info.php') ?>

        
    

    <!-- <script>
        //select the template
        let modal = ``;
        let tripInfo = ``;
        console.log(modal);
        //add a placeholder in the template and replace it
        modal = modal.replace('{{modalcontent}}', tripInfo);
        console.log(modal);
    </script> -->
    <script src="js/app.js"></script>
</body>
</html>