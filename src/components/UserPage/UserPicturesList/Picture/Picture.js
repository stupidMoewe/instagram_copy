import React from 'react';

import classes from './Picture.module.css';

const Picture = props => {
    return(
        <div className={classes.Picture}>
            <img src={props.source}/>
        </div>
    )
}

export default Picture;