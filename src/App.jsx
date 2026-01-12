import {useState, useEffect} from 'react'

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
                'https://yts.lt/api/v2/list_movies.json?sort_by=year'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);

    return (
        <div>
            {loading ? (<h1>Loading...</h1>) :
                (
                    <div>
                        {movies.map((movie) => (
                            <div key={movie.id}>
                                <img src={movie.medium_cover_image} />
                                <h2>{movie.title}</h2>
                                <ul>
                                    {movie.genres.map((g) => (
                                        <li key={g}>{g}</li>
                                    ))}
                                    <hr/>
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
}

export default App
