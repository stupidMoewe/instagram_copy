import React from 'react';

import classes from './Picture.module.css';

const Picture = props => {
    return(
        <div className={classes.Picture}>
            <img src={props.image.imageURL}/>
        </div>
    )
}

export default Picture;