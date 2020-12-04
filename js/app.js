// if(window.screen.width < 988){
//     document.querySelector(".trip-info-modal").style.display="none";
// }
// else if(window.screen.width > 988){
//     document.querySelector(".trip-info-modal").style.display="block";
// }

// if(screen.width < 988){
//     let tripCards = document.querySelectorAll(".all-trip-cards .trip-card");

//     tripCards.forEach(card=>{
//         card.addEventListener("click", openTripDetails);
//     });
// }

function openTripDetails(){
    if(window.innerWidth < 988){
        location.href = "./mobile-trip-details.php";
    }
    else{
        location.href = "./dashboard.php";
    }
}

function showTripInfo(){

    document.querySelector(".trip-info-modal").style.display="block";

    // let tripInfoModal=`
    //     <div class="modal-overlay"></div>
    //     <div class="modal-container">
            
    //         <div class="trip-info">

    //             <div class="header">
    //                 <div>
    //                     <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574c-.445.436-1.197.408-1.615 0c-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 0 1 0-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/></svg>
    //                     <h1>Info</h1>
    //                 </div>
    //             </div>
            
    //             <form class="trip-info-form">
            
    //                 <div class="trip-info-title">
    //                     <input name="trip-title" type="text" value="Summer 2021">
    //                 </div>
            
    //                 <div class="trip-info-destination">
    //                     <p class="label">Destination</p>
    //                     <div>
    //                         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
    //                         <input name="trip-destination" type="text" value="Madagascar">
    //                     </div>
    //                 </div>
            
    //                 <div class="trip-info-date">
    //                     <p class="label">Date</p>
    //                     <input type="date" name="trip-date">
    //                 </div>
            
    //                 <button class="save-trip-info-btn">Save</button>
            
    //             </form>
            
    //             <div>
    //                 <p class="label">Total budget</p>
    //                 <p>170 €</p>
    //             </div>
            
    //             <div class="trip-participants">
    //                 <p class="label">Participants</p>
    //                 <div>
    //                     <p>Narindra</p>
    //                     <p>Bodo</p>
    //                     <p>Haja</p>
    //                 </div>
    //             </div>
            
    //             <div class="trip-info-btn">
    //                 <button class="add-participants-btn">Add participants</button>
    //                 <button class="copy-link-btn">Copy link</button>
    //                 <button class="delete-trip-btn">Delete trip</button>
    //             </div>
            
    //         </div>

    //     </div>
    // `;

    // document.querySelector("#dashboard-page").insertAdjacentHTML("beforeend", tripInfoModal);
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