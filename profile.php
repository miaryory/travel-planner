<div id="profile-page" class="subpage">

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

</div>