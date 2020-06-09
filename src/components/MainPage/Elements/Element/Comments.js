import React from 'react';

import classes from './Comments.module.css';

const Comments = props =>{
    let username;
    const displayComments = props.comments.map((com, index)=>{

        if (index%2==0){
            username = com;
        }
        else{
            return <div className={classes.Comment}><p><b>{username}</b> {com}</p></div>
        }
    })
    return <div className={classes.Comments}>{displayComments}</div>
}

export default Comments;