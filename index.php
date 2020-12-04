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
<body id="login-page">

    <div id="login-left">

        <img src="images/standing.svg" alt="Logo">
        <h1>App name</h1>
        <p>small description</p>

    </div>

    <div id="login-right">
        
        <h1 id="login-intro-desktop">Log in to your account and start planning your future trips.</h1>

        <form id="login-form" method="POST" onsubmit="login(); return false">
            <div>
                <label for="login-email">Email</label>
                <input id="login-email" name="login-email" type="text">
            </div>
            <div>
                <label for="login-password">Password</label>
                <input id="login-password" name="login-password" type="password">
            </div>
            <button>Log in</button>
        </form>

        <div id="sign-up-link">
            <p>I'm a new user.</p>
            <a href="signup.php">Sign up.</a>
        </div>
    
    </div>
    
    <script src="js/app.js"></script>
</body>
</html>