getTrips();

function openTripDetails(){
    if(window.innerWidth < 988){
        location.href = "./mobile-trip-details.php";
    }
    else{
        return;
    }
}

function showTripInfo(){
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

function createTripDiv(id, title, destination){
    return tripDiv = `
    <div class="trip-card" onclick="openTripDetails()" data-id=${id}>

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