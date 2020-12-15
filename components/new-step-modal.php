<div class="new-step-modal">

    <div class="modal-overlay" onclick="closeNewStepModal()"></div>

    <div class="modal-container">

        <div class="new-step">

            <div class="header">
                <div>
                    <svg onclick="closeNewStepModal()" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M12.452 4.516c.446.436.481 1.043 0 1.576L8.705 10l3.747 3.908c.481.533.446 1.141 0 1.574c-.445.436-1.197.408-1.615 0c-.418-.406-4.502-4.695-4.502-4.695a1.095 1.095 0 0 1 0-1.576s4.084-4.287 4.502-4.695c.418-.409 1.17-.436 1.615 0z"/></svg>
                    <h1>New trip</h1>
                </div>
            </div>
        
            <form class="new-step-form" method="POST" onsubmit="return false">
        
                <div class="step-budget">
                    <p class="label">Budget</p>
                    <div>
                        <input name="step-budget" type="text" placeholder="0">
                        <p>€</p>
                    </div>
                </div>
        
                <div class="step-destination">
                    <p class="label">Destination</p>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"/></svg>
                        <input name="step-destination" type="text">
                    </div>
                </div>
        
                <div class="step-date">
                    <p class="label">Date</p>
                    <input type="date" name="step-date">
                </div>

                <div class="step-note">
                    <p class="label">Note</p>
                    <input type="text" name="step-note">
                </div>

                <button type="submit" onclick="createStep(); closeNewStepModal()" class="create-step-btn">Create</button>
                <button onclick="updateStep(); closeNewStepModal()" class="save-step-btn">Save</button>

            </form>
        
        </div>

    </div>

</div>