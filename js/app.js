async function openTripDetails(){
    document.querySelector(".trip-info-modal").innerHTML="";
    let tripId = event.target.getAttribute("data-id");
    let request = await fetch('./api/api-get-single-trip.php?tripId='+tripId);
    if( request.status != 200 ){
        alert('contact system admin');
        return;
    }
    let jTrip = await request.json();

    let tripInfo = createTripInfo(jTrip.tripId, jTrip.tripTitle, jTrip.tripDestination);
    document.querySelector(".trip-info-modal").insertAdjacentHTML('afterbegin', tripInfo);

    if(window.innerWidth < 988){
        location.href = "./mobile-trip-details.php";
    }
    else{
        return;
    }
}

async function showTripInfo(){
    document.querySelector(".trip-info-modal").innerHTML="";
    let tripId = event.target.getAttribute("data-id");
    let request = await fetch('./api/api-get-single-trip.php?tripId='+tripId);
    if( request.status != 200 ){
        alert('contact system admin');
        return;
    }
    let jTrip = await request.json();

    let tripInfo = createTripInfo(jTrip.tripId, jTrip.tripTitle, jTrip.tripDestination);
    document.querySelector(".trip-info-modal").insertAdjacentHTML('afterbegin', tripInfo);

    document.querySelector(".trip-info-modal").style.display="block";
}

function closeTripInfo(){
    document.querySelector(".trip-info-modal").style.display="none";
}

function openNewTripModal(){
    document.querySelector(".new-trip-modal").style.display="block";
}

function closeNewTripModal(){
    document.querySelector(".new-trip-modal").style.display="none";
}

function openNewCategoriesModal(){
    document.querySelector(".categories-modal").style.display="block";
}

function closeNewCategoriesModal(){
    document.querySelector(".categories-modal").style.display="none";
}

async function signup(){
    let form = new FormData(event.target);
    let request =  await fetch('./api/api-signup.php', {method:"POST",body:form});

    if( request.status != 200 ){
      alert('contact system admin');
      return;
    }

}

async function login(){
    let form = new FormData(event.target);
    let request = await fetch('./api/api-login.php', {method:"POST", body:form});

    if( request.status == 200 ){
        location.href="./dashboard.php";
     }
     else{
         return;
     }
}

async function getTrips(){
    document.querySelector("#all-trips .all-trips-cards").innerHTML="";

    let request = await fetch('./api/api-get-all-trips.php');

    if( request.status != 200 ){
        alert('contact system admin');
        return;
    }

    let ajTrip = await request.json();

    ajTrip.forEach(jTrip=>{
        let tripDiv = createTripDiv(jTrip.tripId, jTrip.tripTitle, jTrip.tripDestination);
        document.querySelector("#all-trips .all-trips-cards").insertAdjacentHTML('afterbegin', tripDiv);
    });
    
}

async function createTrip(){
    let form = new FormData(event.target);
    let request = await fetch('./api/api-create-trip.php', {method:"POST", body:form});

    if( request.status != 200 ){
        alert('contact system admin');
        return;
    }

    let jTrip = await request.json();

    let tripDiv = createTripDiv(jTrip.tripId, jTrip.tripTitle, jTrip.tripDestination);
    document.querySelector("#all-trips .all-trips-cards").insertAdjacentHTML('afterbegin', tripDiv);
    closeNewTripModal();
}

async function updateTrip(){
    let tripId = event.target.getAttribute("data-id");
    let form = new FormData(event.target);

    let request = await fetch('./api/api-update-trip.php?tripId='+tripId, {method: "POST", body: form});

    if( request.status != 200 ){
        alert('contact system admin');
        return;
    }

    let jTrip = await request.json();

    let tripCardOverlay = document.querySelector(".all-trips-cards").querySelector(`[data-id="${tripId}"]`);
    let tripCard = tripCardOverlay.parentNode;
    tripCard.querySelector(".trip-title h1").innerText = jTrip.tripTitle;
    tripCard.querySelector(".trip-destination").innerText = jTrip.tripDestination;

}

function highlightCard(){
    let card = event.target.parentNode;
    card.style.background = "#F4F7FF";
}

function removeCardHighlight(){
    let card = event.target.parentNode;
    card.style.background = "#ffffff";
}

function createTripDiv(id, title, destination){
    return tripDiv = `
    <div class="trip-card">
        <div class="trip-card-overlay" onmouseover="highlightCard()" onmouseout="removeCardHighlight()" onclick="openTripDetails()" data-id=${id}></div>

        <div class="trip-title">
            <h1>${title}</h1>
            <div class="participants-nb">
                <p>0</p>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1408 1472"><path d="M704 128q-144 0-225 106t-81 271q-1 205 132 325q17 16 12 41l-23 48q-11 24-32.5 37.5T396 995q-3 1-126.5 41T138 1080q-84 35-110 73q-28 63-28 319h1408q0-256-28-319q-26-38-110-73q-8-4-131.5-44T1012 995q-69-25-90.5-38.5T889 919l-23-48q-5-25 12-41q133-120 132-325q0-165-81-271T704 128z"/></svg>
            </div>
        </div>

        <p class="trip-destination">${destination}</p>

        <div class="trip-date">
            <p>dd/</p>
            <p>mm/</p>
            <p>yyyy</p>
        </div>

    </div>
    `;
}

function createTripInfo(id, title, destination){
    return tripInfo=`
        <div class="trip-info">

            <div class="header">
                <div>
                    <svg onclick="closeTripInfo()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574c-.445.436-1.197.408-1.615 0c-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 0 1 0-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/></svg>
                    <h1>Info</h1>
                </div>
            </div>
        
            <form class="trip-info-form" method="POST" onsubmit="updateTrip(); return false" data-id=${id}>
        
                <div class="trip-info-title">
                    <input name="trip-title" type="text" value=${title}>
                </div>
        
                <div class="trip-info-destination">
                    <p class="label">Destination</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
                        <input name="trip-destination" type="text" value=${destination}>
                    </div>
                </div>
        
                <div class="trip-info-date">
                    <p class="label">Date</p>
                    <input type="date" name="trip-date">
                </div>
        
                <button type="submit" class="save-trip-info-btn">Save</button>
        
            </form>
        
            <div>
                <p class="label">Total budget</p>
                <p>170 €</p>
            </div>
        
            <div class="trip-participants">
                <p class="label">Participants</p>
                <div>
                    <p>Narindra</p>
                    <p>Bodo</p>
                    <p>Haja</p>
                </div>
            </div>
        
            <div class="trip-info-btn">
                <button class="add-participants-btn">Add participants</button>
                <button class="copy-link-btn">Copy link</button>
                <button class="delete-trip-btn">Delete trip</button>
            </div>
        
        </div>
    `;
}