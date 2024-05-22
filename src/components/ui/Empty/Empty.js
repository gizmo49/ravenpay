import React from 'react';
import "./Empty.scss";


const Empty = ({headline, content= `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id pulvinar nullam sit imperdiet pulvinar.`}) => {
    return (
        <div className='empty__wrapper'>
            <h6>{headline}</h6>
            <p>{content}</p>
        </div>
    );
};

export default Empty;