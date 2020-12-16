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

    if(window.innerWidth < 988){
        document.querySelector(".trip-details").style.display="none";
    }
    else{
        return;
    }
}

async function openTripDetails(){
    document.querySelector(".add-step-btn").style.display="block";
    // let myDiv = document.getElementById("trip-details-container");
    // myDiv.scrollTop = myDiv.scrollHeight;
    let btn = document.querySelector(".trip-details #step-btn");
    btn.scrollIntoView();

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
    openTripDetailsMobile();
    getSteps();

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
    document.querySelector(".trip-details .trip-details-header .trip-details-title h1").innerText = title;
    document.querySelector(".trip-details .trip-details-header .trip-details-title a").setAttribute("data-id", tripId);
    document.querySelector(".trip-details .trip-details-header .trip-destination").innerText = destination;
    document.querySelector(".trip-details .trip-details-header .trip-date").innerText = date;
    document.querySelector(".trip-details").style.display="block";
    document.querySelector(".add-step-btn").style.display="block";
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
    document.querySelector("#new-trip-form-id").reset();
}

function closeNewTripModal(){
    document.querySelector(".new-trip-modal").style.display="none";
}

function openNewStepModal(stepName){
    closeNewCategoriesModal();
    document.querySelector(".new-step-modal").style.display="block";
    document.querySelector(".new-step-modal .new-step .header div h1").innerText=stepName;
    document.querySelector(".new-step-modal .create-step-btn").style.display="block";
    document.querySelector(".new-step-modal .save-step-btn").style.display="none";
}

function closeNewStepModal(){
    document.querySelector(".new-step-modal").style.display="none";
}

function openNewCategoriesModal(){
    document.querySelector(".categories-modal").style.display="block";
    document.querySelector(".new-step-modal #step-form").reset();
}

function closeNewCategoriesModal(){
    document.querySelector(".categories-modal").style.display="none";
}

async function signup(){
    let form = new FormData(event.target);
    let request =  await fetch('./api/api-signup.php', {method:"POST",body:form});
    let response = await request.text();
    let jResponse = JSON.parse(response);
    
    if( request.status != 200 ){
        let element = jResponse.element+"-error-message";
        document.querySelector("#signup-page ."+element).innerText = jResponse.message;
        return;
    }
    alert(jResponse.message);
    document.querySelector("#signup-form").reset();
}

async function login(){
    let form = new FormData(event.target);
    let request = await fetch('./api/api-login.php', {method:"POST", body:form});
    if( request.status == 200 ){
        location.href="./home.php";
     }
     else{erySelector("#login-page ."+element).innerText = jResponse.message;
         return;
     }
}

async function getTrips(){
    document.querySelector("#all-trips .all-trips-cards").innerHTML="";
    let nbOfTrips=0;

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
        nbOfTrips++;
    });

    document.querySelector("#all-trips .header p").innerText = "("+nbOfTrips+")";

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
    let tripId = event.target.getAttribute("data-id");
    let form = new FormData(event.target);

    let request = await fetch('./api/api-update-trip.php?tripId='+tripId, {method: "POST", body: form});
    if( request.status != 200 ){
        return;
    }

    let sTrip = await request.text();
    let aTrip = JSON.parse(sTrip);

    let tripCardOverlay = document.querySelector(".all-trips-cards").querySelector(`[data-id="${tripId}"]`);
    let tripCard = tripCardOverlay.parentNode;
    tripCard.querySelector(".trip-title h1").innerText = aTrip[1];
    tripCard.querySelector(".trip-destination").innerText = aTrip[2];
    tripCard.querySelector(".trip-date").innerText = aTrip[3];
}

function highlightCard(){
    let card = event.target.parentNode;
    card.classList.add("highlight");
    // card.style.background = "#F4F7FF";
}

function removeCardHighlight(){
    let card = event.target.parentNode;
    card.classList.remove("highlight");
}

function activateCard(){
    document.querySelectorAll(".card-item").forEach(card =>{
        card.classList.remove("highlight");
        card.classList.remove("clicked");
    })

    let card = event.target.parentNode;
    card.classList.add("clicked");

}

async function createStep(){
    let stepName = event.target.parentNode.previousElementSibling.querySelector("h1").innerText;
    let form = new FormData(event.target.parentNode);
    form.append("step-title", stepName);

    let request = await fetch('./api/api-create-step.php', {method:"POST", body:form});

    if( request.status != 200 ){
        return;
    }
    let aStep = await request.text();
    let jStep = JSON.parse(aStep);

    let d = new Date(jStep[4]);
    let month = d.getMonth()+1;
    let date = d.getDate()+"/"+month+"/"+d.getFullYear();
    let newStep = createTripStep(jStep[0], jStep[1], jStep[2], jStep[3], date)
    // document.querySelector(".trip-details-wrapper").innerHTML="";
    document.querySelector(".trip-details-wrapper").insertAdjacentHTML('beforeend', newStep);
}

async function getSteps(){
    document.querySelector(".trip-details-wrapper").innerHTML="";

    let request = await fetch('./api/api-get-steps.php');

    if( request.status != 200 ){
        return;
    }
    let sSteps = await request.text();
    let aSteps = JSON.parse(sSteps);

    aSteps.forEach(aStep=>{
        let d = new Date(aStep[4]);
        let month = d.getMonth()+1;
        let date = d.getDate()+"/"+month+"/"+d.getFullYear();
        let stepDiv = createTripStep(aStep[0], aStep[1], aStep[2], aStep[3], date);
        document.querySelector(".trip-details-wrapper").insertAdjacentHTML('beforeend', stepDiv);
    });
}

async function openStepEdit(){
    let stepId = event.target.getAttribute("data-id");
    let request = await fetch('./api/api-get-single-step.php?stepId='+stepId);
    if( request.status != 200 ){
        return;
    }
    let sStep = await request.text();
    let jStep = JSON.parse(sStep);

    document.querySelector(".new-step-modal .new-step .save-step-btn").setAttribute('data-id', stepId);
    document.querySelector(".new-step-modal .new-step .header h1").innerText=jStep[1];
    document.querySelector(".new-step-modal .new-step .new-step-form .step-budget input").value=jStep[2];
    document.querySelector(".new-step-modal .new-step .new-step-form .step-destination input").value=jStep[3];
    document.querySelector(".new-step-modal .new-step .new-step-form .step-date input").value=jStep[4];
    document.querySelector(".new-step-modal .new-step .new-step-form .step-note input").value=jStep[5];

    document.querySelector(".new-step-modal").style.display="block";
    document.querySelector(".new-step-modal .create-step-btn").style.display="none";
    document.querySelector(".new-step-modal .save-step-btn").style.display="block";
}

async function updateStep(){
    let stepId = event.target.getAttribute("data-id");
    let form = new FormData(event.target.parentNode);
    form.append('stepID', stepId);

    let request = await fetch('./api/api-update-step.php', {method: "POST", body: form});
    if( request.status != 200 ){
        return;
    }

    let sStep = await request.text();
    let aStep = JSON.parse(sStep);

    let stepCard = document.querySelector(".trip-step-card").querySelector(`[data-id="${stepId}"]`);
    stepCard.querySelector(".trip-step-info .trip-step-info-title h1").innerText = aStep[1];
    stepCard.querySelector(".trip-step-info .trip-step-info-title p").innerText = aStep[2];
    stepCard.querySelector(".trip-step-info .trip-destination").innerText = aStep[3];
    stepCard.querySelector(".trip-step-info .trip-date").innerText = aStep[4];
}

async function deleteTrip(){
    let tripId = event.target.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('data-id');
    let form = new FormData();
    form.append('tripId', tripId);

    let request = await fetch('./api/api-delete-trip.php', {method:"POST", body:form});
    if( request.status != 200 ){
        return;
    }

    let tripCard = document.querySelector(".trip-card").querySelector(`[data-id="${tripId}"]`);
    tripCard.parentNode.remove();
    location.reload();

}

function createTripDiv(id, title, destination, date){
    return tripDiv = `
    <div class="trip-card card-item">
        <div class="trip-card-overlay" onmouseover="highlightCard()" onmouseout="removeCardHighlight()" onclick="openTripDetails(); activateCard()" data-id=${id}></div>

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
                <button type="submit" onclick="deleteTrip()" class="delete-trip-btn">Delete trip</button>
            </div>
        
        </div>
    `;
}

function createTripStep(stepId, stepName, budget, destination, date){
    return stepDiv = `
    <div class="trip-step-card" data-id=${stepId}>

        <div class="trip-step-info">
            <div class="trip-step-info-title">
                <h1>${stepName}</h1>
                <p>: ${budget} €</p>
            </div>

            <p class="trip-destination">${destination}</p>

            <div class="trip-date">${date}</div>
        </div>

        <a href="#">
            <div data-id=${stepId} onclick="openStepEdit()" class="edit-step-overlay"></div>
            <svg class="edit-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3l-362.7 362.6l-88.9 15.7l15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"/></svg>
        </a>

    </div>

    <svg class="three-dots-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M10.001 7.8a2.2 2.2 0 1 0 0 4.402A2.2 2.2 0 0 0 10 7.8zm0-2.6A2.2 2.2 0 1 0 9.999.8a2.2 2.2 0 0 0 .002 4.4zm0 9.6a2.2 2.2 0 1 0 0 4.402a2.2 2.2 0 0 0 0-4.402z"/></svg>
    
    `;
}
