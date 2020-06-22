/* eslint-disable jsx-a11y/alt-text */
import React, {useState, useEffect} from 'react';
import { API_KEY, API_URL } from '../config/api';
import moment from 'moment';
import { Link } from 'react-router-dom';

function PlayingNow(){

    const [data, setData] = useState([]);

    const getMovie = async() => {
        fetch(`${API_URL}/now_playing${API_KEY}`)
        .then((response) => response.json())
        .then((res) => {
            console.log(res);
            setData(res.results);
        });
    };

    useEffect(() => {
        getMovie();
    }, []);

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {data.map((item, key) => (
                <div className="shadow-xl rounded-lg">
                    <Link to={`/details/${item.id}`}>
                    <img 
                        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} 
                        className="rounded-t-lg hover:opacity-75 trasnsition erase-in-out duration-150"
                    />
                    </Link>
                       <div className="px-2 py-4">
                        <h2 className="text-1xl font-bold">{item.title}</h2>
                        <div className="flex text-gray-600 font-semibold">
                            <span>
                                <i className="lni lni-star-filled text-yellow-500"></i>
                            </span>
                            <span className="mx-2">{item.vote_average * 10}</span>
                            <span className="mx-1">|</span>
                            <span className="mx-1">{moment(item.release_date).format('MMM, DD, YYYY')}</span>
                        </div>
                   </div>
                </div>
            ))}
        </div>
    );
}

export default PlayingNow;