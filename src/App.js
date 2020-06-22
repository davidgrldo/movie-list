import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import MovieDetails from './components/MovieDetails';

function App() {
    return ( 
        <Router>
            <NavigationBar />
            <Route exact path="/" component={Home} />
            <Route path="/details/:id" component={MovieDetails} />
        </Router>
    );  
}

export default App;