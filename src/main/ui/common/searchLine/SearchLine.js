import classes from "./SearchLine.module.scss";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { searchGames } from "../../../bll/reducer";

export const SearchLine = () => {
    const dispatch = useDispatch();

    const [lineValue, setLineValue] = useState("");

    useEffect( () => {
        debugger
        dispatch(searchGames(lineValue));
        console.log(lineValue);
        // eslint-disable-next-line
    }, [lineValue])

    return <div className={classes.lineBlock}>
        <input 
            className={classes.lineInput}
            type={'text'}
            value={lineValue}
            onChange={(e) => {setLineValue(e.target.value)}}
        />
        <button 
            className={classes.lineButton}
            onClick={() => setLineValue("")}
        >
           &times; 
        </button>
    </div>
};