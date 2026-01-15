import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Detail() {
    const { id } = useParams(); //

    const getMovie = async () => {
        const json = await (
            await fetch(`/api/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log("영화 상세 정보:", json);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Detail - ID: {id}</h1>; //
}

export default Detail;