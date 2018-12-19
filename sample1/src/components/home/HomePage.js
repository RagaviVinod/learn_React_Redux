import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
    render(){
        return(
            <div className="jumbotron">
                <h1>React corporation</h1>
                <p>we use React, Redux and React-Router in Es6 for ultra responsive web pages.</p>
                <Link to="/about" className="btn-btn-primary btn-lg">Learn a lot about React </Link>
            </div>

        );
    }
}
export default HomePage;