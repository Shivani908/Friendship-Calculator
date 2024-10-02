
// console.log("hello world");

function CalculateFriendship(){
    var yourName = document.getElementById("YourName").value;
    var partnerName = document.getElementById("PartnerName").value;
    var friendshipPercentage = Math.floor(Math.random() * 101);
    var resultElement = document.getElementById("result");

    resultElement.innerHTML = `${yourName} and ${partnerName} dosti : ${friendshipPercentage}% `;
}
