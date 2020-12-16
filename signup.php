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

        <img class="logo" src="images/logo.svg" alt="Logo">
        <h1></h1>
        <p>plan where to spend you future trip</p>
        <img class="front-page-illustration" src="images/front-page-illust.svg" alt="Illustration">

    </div>

    <div id="signup-right">
        
        <h1>Create account</h1>

        <div id="signup-wrapper">

            <form id="signup-form" method="POST" onsubmit="signup(); return false">
                <div>
                    <label for="signup-name">Full name</label>
                    <input type="text" name="signup-name">
                    <p class="error name-error-message"></p>
                </div>
                <div>
                    <label for="signup-email">Email</label>
                    <input id="signup-email" name="signup-email" type="text">
                    <p class="error email-error-message"></p>
                </div>
                <div>
                    <label for="signup-password">Password</label>
                    <input id="signup-password" name="signup-password" type="password">
                    <p class="error password-error-message"></p>
                </div>
                <div>
                    <label for="signup-confirm-password">Confirm password</label>
                    <input id="signup-confirm-password" name="signup-confirm-password" type="password">
                    <p class="error password-confirmation-error-message"></p>
                </div>
                <button>Sign up</button>
            </form>

            <div id="signup-options">
                <button>
                    <img class="some-icon" src="images/search.svg" alt="Google icon"> 
                    <p>Sign up with Google</p>
                </button>
                    <p>or</p>
                <button>
                    <img class="some-icon" src="images/facebook.svg" alt="Google icon">
                    <p>Sign up with Facebook</p> 
                </button>
            </div>

            <div id="log-in-link">
                <p>I already have an account.</p>
                <a href="index.php">Log in.</a>
            </div>

        </div>
    
    </div>

    <script src="js/app.js"></script>
    
</body>
</html>