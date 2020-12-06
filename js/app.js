function showPage(pageTitle){
    document.querySelectorAll(".subpage").forEach(page =>{
        page.style.display="none";
    })

    if(pageTitle=="dashboard"){
        document.querySelector("#dashboard-page").style.display="grid";
    }
    else{
        document.querySelector("#"+pageTitle+"-page").style.display="block";
    }

    document.querySelectorAll(".menu-container").forEach(menu =>{
        menu.classList.remove("active")
    })
    document.querySelector("#"+pageTitle+"-menu").classList.add("active");
}

async function openTripDetails(){
    openTripDetailsMobile();
    document.querySelector(".trip-info-modal").innerHTML="";
    let tripId = event.target.getAttribute("data-id");
    let request = await fetch('./api/api-get-single-trip.php?tripId='+tripId);
    if( request.status != 200 ){
        return;
    }
    let sTrip = await request.text();
    let jTrip = JSON.parse(sTrip);

    let d = new Date(jTrip[3]);
    let month = d.getMonth()+1;
    let date = d.getDate()+"/"+month+"/"+d.getFullYear();
    let tripInfo = createTripInfo(jTrip[0], jTrip[1], jTrip[2], jTrip[3]);
    document.querySelector(".trip-info-modal").insertAdjacentHTML('afterbegin', tripInfo);

    if(window.innerWidth < 988){
        //display block trip details modal only on mobile
        openTripDetailsMobile(jTrip[0],jTrip[1], jTrip[2], date);
        // location.href = "./mobile-trip-details.php";
    }
    else{
        return;
    }
}

async function openTripDetailsMobile(tripId, title, destination, date){
    document.querySelector(".trip-details-wrapper").innerHTML="";
    let tripStep = createTripStep(tripId, title, destination, date);
    document.querySelector(".trip-details-wrapper").insertAdjacentHTML('afterbegin', tripStep);
    document.querySelector(".trip-details").style.display="block";
}

async function showTripInfo(){
    document.querySelector(".trip-info-modal").innerHTML="";
    let tripId = event.target.getAttribute("data-id");
    let request = await fetch('./api/api-get-single-trip.php?tripId='+tripId);
    if( request.status != 200 ){
        return;
    }
    let sTrip = await request.text();
    let jTrip = JSON.parse(sTrip);

    let tripInfo = createTripInfo(jTrip[0], jTrip[1], jTrip[2], jTrip[3]);
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

    // let ajTrip = await request.json();
    let sjTrip = await request.text();
    let ajTrip = JSON.parse(sjTrip);

    ajTrip.forEach(jTrip=>{
        let d = new Date(jTrip[3]);
        let month = d.getMonth()+1;
        let date = d.getDate()+"/"+month+"/"+d.getFullYear();
        let tripDiv = createTripDiv(jTrip[0], jTrip[1], jTrip[2], date);
        document.querySelector("#all-trips .all-trips-cards").insertAdjacentHTML('afterbegin', tripDiv);
    });

}

async function createTrip(){
    let form = new FormData(event.target);
    let request = await fetch('./api/api-create-trip.php', {method:"POST", body:form});

    if( request.status != 200 ){
        return;
    }
    let aTrip = await request.text();
    let jTrip = JSON.parse(aTrip);

    let d = new Date(jTrip[3]);
    let month = d.getMonth()+1;
    let date = d.getDate()+"/"+month+"/"+d.getFullYear();
    let tripDiv = createTripDiv(jTrip[0], jTrip[1], jTrip[2], date);
    document.querySelector("#all-trips .all-trips-cards").insertAdjacentHTML('afterbegin', tripDiv);
    closeNewTripModal();
}

async function updateTrip(){
    // let tripId = event.target.getAttribute("data-id");
    // let form = new FormData(event.target);

    // let request = await fetch('./api/api-update-trip.php?tripId='+tripId, {method: "POST", body: form});

    // if( request.status != 200 ){
    //     alert('contact system admin');
    //     return;
    // }

    // let jTrip = await request.json();

    // let tripCardOverlay = document.querySelector(".all-trips-cards").querySelector(`[data-id="${tripId}"]`);
    // let tripCard = tripCardOverlay.parentNode;
    // tripCard.querySelector(".trip-title h1").innerText = jTrip.tripTitle;
    // tripCard.querySelector(".trip-destination").innerText = jTrip.tripDestination;

}

function highlightCard(){
    let card = event.target.parentNode;
    card.style.background = "#F4F7FF";
}

function removeCardHighlight(){
    let card = event.target.parentNode;
    card.style.background = "#ffffff";
}

function createTripDiv(id, title, destination, date){
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
            ${date}
        </div>

    </div>
    `;
}

function createTripInfo(id, title, destination, date){
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
                    <input type="date" name="trip-date" value=${date}>
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

function createTripStep(id, title, destination, date){
    return stepDiv = `
    <div class="trip-details-header">
        <div class="trip-details-title">
            <h1>${title}</h1>
            <a data-id=${id} onclick="showTripInfo()">Edit</a>
        </div>

        <p class="trip-destination">${destination}</p>

        <div class="trip-date">
            ${date}
        </div>
    </div>

    <div class="trip-step-card">

        <div class="trip-step-info">
            <div class="trip-step-info-title">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M8.1 13.34l2.83-2.83L3.91 3.5a4.008 4.008 0 0 0 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38c1.91-1.91 2.28-4.65.81-6.12c-1.46-1.46-4.2-1.1-6.12.81c-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88l1.41-1.41L13.41 13l1.47-1.47z"/></svg>
                <h1>Food</h1>
                <p>: budget</p>
            </div>

            <p class="trip-destination">Destination</p>

            <div class="trip-date">
                <p>dd/</p>
                <p>mm/</p>
                <p>yyyy</p>
            </div>
        </div>

        <a href="#">
            <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3l-362.7 362.6l-88.9 15.7l15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"/></svg>
        </a>

    </div>

    <svg class="three-dots-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z"/></svg>

    <button class="add-step-btn" onclick="openNewCategoriesModal()">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/></svg>
    </button>
    
    `;
}