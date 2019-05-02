import React from 'react';

const nav = () => {
    return (
        <div id="navbar">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Wayfarer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link active" href="#">home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">log in</a>
                <a class="nav-item nav-link" href="#">sign up</a>
                </div>
            </div>
            </nav>
        </div>
  )
}

export default nav;