
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
    var mappedCircle= circles.map(function(currentCircle){
        
        return `<div style="width:${currentCircle.radius}px; height:${currentCircle.radius}px;
         border-radius:${currentCircle.radius}px; background-color:${currentCircle.color};margin:10px auto;"></div>
         `;
    });
    
    var newCircle= mappedCircle.join('');
    
    return newCircle;
   
    
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}