export default function MovieDisplay({movie}){
    const loaded = () => {
        return (
            <html>

                <head>
                    <meta charSet='UTF-8'/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>LadyBug | Bug Tracker</title>
                    <link rel="shortcut icon" href="/assets/ladybugLogo-plain-transparent.png"></link>
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
                </head>

                <body>
                    <main id="main-body">
                        <div className="card" style={{ width: "50%" }}>
                            <img src={movie.Poster} className="class-img-top" alt={movie.Title} id="movie-poster"/>
                            <div class="card-body">
                                <h1 id="movie-title" className="card-title">{movie.Title}</h1>
                                <h4 id="movie-genre" className="card-text">{movie.Genre}</h4>
                                <h4 id="movie-year" className="card-text">{movie.Year}</h4>
                                <p id="movie-plot" className="card-text">{movie.Plot}</p>
                            </div>
                        </div>
                    </main>


                    <footer>

                    </footer>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                </body>

            </html>
        )
    };

    const loading = () => {
        return <h1>No Movie to Display</h1>;
    };
    
    
    return movie && movie.Title ? loaded() : loading();
};

