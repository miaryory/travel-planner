<div id="all-trips">

    <div class="header">
        <div>
            <h1>All trips</h1>
            <p>(3)</p>
        </div>
    </div>

    <button class="desktop-create-trip-btn" onclick="openNewTripModal()">Create new trip</button>

    <?php require_once(__DIR__.'/new-trip-modal.php') ?>

    <div class="all-trips-cards">

        <div class="trip-card" onclick="openTripDetails()">

            <div class="trip-title">
                <h1>Summer 2021</h1>
                <div class="participants-nb">
                    <p>5</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1408 1472"><path d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128z"/></svg>
                </div>
            </div>

            <p class="trip-destination">Madagascar</p>

            <div class="trip-date">
                <p>dd/</p>
                <p>mm/</p>
                <p>yyyy</p>
            </div>

        </div>

        <div class="trip-card">

            <div class="trip-title">
                <h1>Family trip</h1>
                <div class="participants-nb">
                    <p>5</p>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1408 1472"><path d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128z"/></svg>
                </div>
            </div>

            <p class="trip-destination">Grandma's</p>

            <div class="trip-date">
                <p>dd/</p>
                <p>mm/</p>
                <p>yyyy</p>
            </div>

        </div>

    </div>

    <button class="mobile-create-trip-btn" onclick="openNewTripModal()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
    </button>
</div>