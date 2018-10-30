
function renderNametags(nametags) {
    var mappedNameTags= nametags.map(function(currentNameTag){
        return `<div style=" text-align:center;">
                <div class="  mt-5 " style=" margin:0 auto;height:200px; width:300px; border:1px solid black">
               <h2 style="font-size:22px; padding-top:12px;background-color:blue;color:white; text-align:center; height:50px;">Hello, my name is:</h2>
               <h2 style="text-align; padding-top:40px;font-weight:normal;">${currentNameTag}</h2>
               </div>
               </div>
             `;

    });
    var newNameTags= mappedNameTags.join('');

    return  newNameTags;
   
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}