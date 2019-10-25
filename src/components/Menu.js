import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return(
        <div>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">CATMASH</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <Link to="/" class="nav-link">Home<span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/score" class="nav-link">Scores</Link>
                    </li>
                    </ul>
                </div>
            </nav>

        </div>
    )}

    export default Menu;