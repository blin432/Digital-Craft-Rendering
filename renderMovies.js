
function renderMovies(movies) {
    var newMovie= movies.map(function(currentMovie){
        return `
        <div  >

            <div class="row mt-5 " >
                
                <div  style="width:200px; height:250px;">
                    <img src=${currentMovie.poster}   style="height:100%; width:100%;">
                </div>
                <div class="ml-3" style="width:200px; height:250px;background-color:#DCDCDC; border: 2px solid black; border-radius:5px;">
                     <h4>${currentMovie.title}</h2>
                     <p>${currentMovie.year}</p>
                     <h4 style="font-weight:normal;">IMDB:</h2>
                     <h4 style="font-weight:normal">${currentMovie.imdbRating}/10</h2>
                     <h4 style="font-weight:normal">Rotten Tomatoes:</h2>
                     <h4 style="font-weight:normal">${currentMovie.rottenTomatoesRating*100}%</h2>
                </div>
            
            </div>
        </div>

        `;
        
    });

    var moviePoster= newMovie.join('');
    return `<div >
    ${moviePoster}
    </div>`;
}

function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}