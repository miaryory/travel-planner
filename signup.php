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
<body id="signup-page">

    <div id="signup-left">

        <img src="images/standing.svg" alt="Logo">
        <h1>App name</h1>
        <p>small description</p>

    </div>

    <div id="signup-right">
        
        <h1>Create account</h1>

        <div id="signup-wrapper">

            <form id="signup-form">
                <div>
                    <label for="signup-name">Full name</label>
                    <input type="text">
                </div>
                <div>
                    <label for="signup-email">Email</label>
                    <input id="signup-email" name="signup-email" type="text">
                </div>
                <div>
                    <label for="signup-password">Password</label>
                    <input id="signup-password" name="signup-password" type="password">
                </div>
                <div>
                    <label for="signup-confirm-password">Confirm password</label>
                    <input id="signup-confirm-password" name="signup-confirm-password" type="password">
                </div>
                <button>Sign up</button>
            </form>

            <div id="signup-options">
                <button>Sign up with Google</button>
                    <p>or</p>
                <button>Sign up with Facebook</button>
            </div>

            <div id="log-in-link">
                <p>I already have an account.</p>
                <a href="index.php">Log in.</a>
            </div>

        </div>
    
    </div>
    
</body>
</html>