<div id="settings-page" class="subpage">

    <?php require_once(__DIR__.'/components/navbar.php') ?>

    <div class="settings">
          
        <div class="header">
            <div>
                <h1>Settings</h1>
            </div>
        </div>

        <div class="settings-list">

            <div class="theme">
                <p class="label">Theme</p>
                <div>
                    <p>Dark</p>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <p>Light</p>
                </div>
            </div>

            <div class="notifications">
                <p class="label">Notifications</p>
                <div>
                    <p>Off</p>
                    <label class="switch">
                        <input type="checkbox">
                        <span class="slider round"></span>
                    </label>
                    <p>On</p>
                </div>
            </div>

            <div class="language">
                <p class="label">Language</p>
                <div>
                    <p>English</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0c-.446-.434-.481-1.041 0-1.574L11.295 10L7.548 6.092c-.481-.533-.446-1.141 0-1.576c.445-.436 1.197-.409 1.615 0z"/></svg>
                </div>
            </div>

            <div class="currency">
                 <p class="label">Currency</p>
                <div>
                    <p>Euro</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M9.163 4.516c.418.408 4.502 4.695 4.502 4.695a1.095 1.095 0 0 1 0 1.576s-4.084 4.289-4.502 4.695c-.418.408-1.17.436-1.615 0c-.446-.434-.481-1.041 0-1.574L11.295 10L7.548 6.092c-.481-.533-.446-1.141 0-1.576c.445-.436 1.197-.409 1.615 0z"/></svg>
                </div>
            </div>

            <div class="mobile-logout">
                <p class="label">Log out</p>
                <div>
                    <a href="./api/logout.php">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16z"/><path d="M459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62z"/></svg>        
                    </a>
                </div>
            </div>

            <div class="delete-profile">
                <p class="label">Delete profile</p>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path d="M2 5v10c0 .55.45 1 1 1h9c.55 0 1-.45 1-1V5H2zm3 9H4V7h1v7zm2 0H6V7h1v7zm2 0H8V7h1v7zm2 0h-1V7h1v7z"/><path d="M13.25 2H10V.75A.753.753 0 0 0 9.25 0h-3.5A.753.753 0 0 0 5 .75V2H1.75a.752.752 0 0 0-.75.75V4h13V2.75a.752.752 0 0 0-.75-.75zM9 2H6v-.987h3V2z"/></svg>
                </div>
            </div>

            <div class="terms">
                <p>Terms and privacy</p>
            </div>

        </div>
    
    </div>

</div>