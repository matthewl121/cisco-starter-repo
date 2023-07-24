import React from 'react';
import './Banner.css';

function Banner({textBanner}) {
    return (
        <div className="Banner">
            <h1>{textBanner}</h1>
        </div>
    );
}

export default Banner;