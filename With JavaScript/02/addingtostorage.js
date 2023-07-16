// Adding Elements
const keyInput = document.getElementById("keyInput");
const valueInput = document.getElementById("valueInput");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");
const clearButton = document.getElementById("clearButton");
const information = document.getElementById("information");
// ===================================


// Button Settings
addButton.addEventListener("click", addingValue);
deleteButton.addEventListener("click", deletingValue);
clearButton.addEventListener("click", clearingStorage);
// ===================================


// Function Part
function addingValue(){
    localStorage.setItem(keyInput.value, valueInput.value);
    setTimeout(function(){
        keyInput.value = "";
        valueInput.value = "";
    },3500);

    let addInf = document.createElement("h3");
    addInf.id = "addInf";
    addInf.style.color = "#000";
    addInf.style.fontSize = "25px";
    addInf.style.transition = "0.4s ease-in";
    addInf.style.color = "#F70776";
    addInf.textContent = "Value has been added succesfully!";
    information.appendChild(addInf);
    setTimeout(function(){
        addInf.remove();
    },6000);
};

function deletingValue(){
    localStorage.removeItem(keyInput.value);
    setTimeout(function(){
        keyInput.value = "";
        valueInput.value = "";
    },3500);

    let deleteInf = document.createElement("h3");
    deleteInf.id = "deleteInf";
    deleteInf.style.color = "#000";
    deleteInf.style.fontSize = "25px";
    deleteInf.style.transition = "0.4s ease-in";
    deleteInf.style.color = "#C3195D";
    deleteInf.textContent = "Value has been removed successfully!";
    information.appendChild(deleteInf);
    setTimeout(function(){
        deleteInf.remove();
    },6000);
};

function clearingStorage(){
    localStorage.clear();
    setTimeout(function(){
        keyInput.value = "";
        valueInput.value = "";
    },3500);

    let clearInf = document.createElement("h3");
    clearInf.id = "clearInf";
    clearInf.style.color = "#000";
    clearInf.style.fontSize = "25px";
    clearInf.style.transition = "0.4s ease-in";
    clearInf.style.color = "#680747";
    clearInf.textContent = "Local storage has been cleared completely!";
    information.appendChild(clearInf);
    setTimeout(function(){
        clearInf.remove();
    },6000);
};
// ===================================
