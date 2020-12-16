<div id="all-trips">

    <div class="header">
        <div>
            <h1>All trips</h1>
            <p>0</p>
        </div>
    </div>

    <button class="desktop-create-trip-btn" onclick="openNewTripModal()">Create new trip</button>

    <?php require_once(__DIR__.'/new-trip-modal.php') ?>

    <div class="all-trips-cards"></div>

    <button class="mobile-create-trip-btn" onclick="openNewTripModal()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
    </button>
</div>