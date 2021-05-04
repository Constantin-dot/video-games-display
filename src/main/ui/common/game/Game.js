import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from "./Game.module.scss";

export const Game = React.memo((props) => {
    const history = useHistory();

    const CardRedirectHandler = () => {
        history.push(`/game/${props.slug}`);
    };

    return <div className={classes.block} onClick={CardRedirectHandler}>
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
    </div>
})