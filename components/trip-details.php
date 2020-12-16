<div class="trip-details">

    <div class="trip-details-header">
        <div class="trip-details-title">
            <h1></h1>
            <a data-id=${id} onclick="showTripInfo()">Edit</a>
        </div>

        <p class="trip-destination"></p>

        <div class="trip-date"></div>
    </div>

    <div class="trip-details-wrapper"></div>

    <button id="step-btn" class="add-step-btn" onclick="openNewCategoriesModal()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
    </button>

    <?php require(__DIR__.'/navbar.php') ?>
    <?php require_once(__DIR__.'/categories-modal.php') ?>

</div>