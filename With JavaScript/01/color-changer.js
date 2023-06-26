const box = document.getElementById("box-1");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const button = document.getElementById("button-1");
const information = document.getElementById("information");

button.addEventListener("click", colorChange);


function colorChange(){

    // Input Settings
    box.style.backgroundColor = input1.value;
    box.style.borderRadius = input2.value
    // ==============================================================

    // Background Color Settings
    let colorInformation = document.createElement("h3");
    colorInformation.id = "color-information";
    colorInformation.style.transition = "0.4s ease";
    colorInformation.style.color = "#FF82BB"
    colorInformation.textContent = "Color changed!";
    information.appendChild(colorInformation);
    // ==============================================================

    // Border Radius Settings
    let borderRadiusInformation = document.createElement("h3");
    borderRadiusInformation.id = "borderRadius-information";
    borderRadiusInformation.style.transition = "0.4s ease";
    borderRadiusInformation.style.color = "#C782BB";
    borderRadiusInformation.textContent = "Border radius changed!";
    information.appendChild(borderRadiusInformation);
    // ==============================================================

    // Condition Settings
    if (input1.value == ""){
        colorInformation.remove();
    };

    if (input2.value == ""){
        borderRadiusInformation.remove();
    };
    // ==============================================================

    // Disappear Settings
    setTimeout(function(){
        colorInformation.remove();
        borderRadiusInformation.remove();
    },2000);

    setTimeout(function(){
        input1.value = "";
        input2.value = "";
    },5000);
    // ==============================================================

};

