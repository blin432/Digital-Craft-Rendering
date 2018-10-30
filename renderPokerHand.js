
function renderPokerHand(pokerHand) {
    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    var pokerHands = pokerHand.map(function(currentPokerHand){
        return `
            <img src="cards/${currentPokerHand.value}${currentPokerHand.suit}.png"  style="height:200px;width:150px; margin:10px;">
            
        `

    });
    var newPokerHand= pokerHands.join('');

    return `
        <div class="d-flex flex-row justify-content-center " >
        ${newPokerHand}
        </div>`
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C"
        },
        {
            value: "K",
            suit: "D"
        },
        {
            value: "9",
            suit: "S"
        },
        {
            value: "2",
            suit: "H"
        },
        {
            value: "9",
            suit: "H"
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}