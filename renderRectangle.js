
function renderRectangle(rectangle) {
    return `
        <div style="padding=50px; background-color:${rectangle.color};width:${rectangle.width}px;height:${rectangle.height}px" ;>
        
        

        </div>
    `
}

function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: 100,
        height: 200,
        color: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}