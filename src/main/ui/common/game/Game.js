import React from 'react';
import classes from "./Game.module.scss";

export const Game = React.memo((props) => {
    return <div className={classes.block}>
        <img 
            src={props.background}
            alt={'background'}
            className={classes.back}
        />
        <div className={classes.description}>
            <div className={classes.heading4}>
                {props.name}
            </div>
            <div className={classes.releasedAndRating}>
                <div className={classes.released}>{props.released}</div>
                {props.rating && <div className={classes.rating}>{props.rating}</div>}
            </div>
        </div>
        {/* <NavLink to={'/game'} className={classes.link}>OPEN</NavLink> */}
    </div>
})