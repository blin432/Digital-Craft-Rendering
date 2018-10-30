
function renderRestaurants(restaurants) {
    // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    var mappedRestaurants= restaurants.map(function(currentRestaurants){
        var price= "";
        for (var i =0; i<currentRestaurants.priceRating;i++){
            price+="$";
        }
        
        
        
        
        return `

            
                <div style="margin:10px auto; border: 1px solid black;height:90px; width:200px;background-color:#DCDCDC;">
                <h3 class="mb-1";">${currentRestaurants.name}</h3>
                <p class="mb-1" style="line-height:2px;">${currentRestaurants.type}</p>
                <div style="font-size:22px; color:green">${price}</div>
                </div>
                

                
            `


    });

    var newRestaurants= mappedRestaurants.join('');
    return `<div class="container">
                
    <div class="d-flex flex-row">
    ${newRestaurants}
    </div>
    </div>`;
    
    
    
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}