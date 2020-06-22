/* eslint-disable jsx-a11y/alt-text */
import React,{useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../config/api';
import moment from 'moment';

function MovieDetails(props){
    const [data, setData] = useState({});

    const getMovie = async() => {
        fetch(`${API_URL}/${props.match.params.id}${API_KEY}`)
        .then((response) => response.json())
        .then((res) => {
            setData(res)
        });
    };

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div className="container mx-auto py-20 px-20 flex">
            <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} 
            className="rounded-lg w-64" />

            <div className="md:ml-24">
                <h2 className="text-4xl font-semibold">{data.title}</h2>
                <div className="flex text-sm text-gray-700 font-semibold">
                    <span>
                        <i className="lni lni-star-filled text-yellow-500"></i>
                    </span>
                    <span className="mx-2">{data.vote_average * 10}/100</span>
                    <span className="mx-1">|</span>
                    <span>{moment(data.release_date).format('MMM, DD, YYYY')}</span>
                </div>

                <p className="mt-5 leading-text-gray-700 font-semibold">{data.overview}</p>
                <button className="mt-5 bg-orange-500 px-4 py-2 rounded-full w-56 hover:bg-orang-400">
                    <i class="lni lni-video"></i>Trailer
                </button>
            </div>
        </div>
    );
}

export default MovieDetails;