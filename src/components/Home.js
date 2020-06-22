import React from "react";
import PlayingNow from './PlayingNow';

function Home(){
    return (
        <div className="container mx-auto py-10 mt-10">
            <div>
                <h1 className="text-2xl text-orange-500 font-semibold uppercase mb-4">Playing Now</h1>
                <PlayingNow />
            </div>
        </div>
    );
}

export default Home;