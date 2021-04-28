import classes from "./SearchLine.module.scss";

export const SearchLine = ({lineValue, setLineValue}) => {
    const setLineValueHandler = (e) => {
        setLineValue(e.target.value);
    };

    const clearLineHandler = () => {
        setLineValue("");
    };

    return <div className={classes.lineBlock}>
        <input 
            className={classes.lineInput}
            type={'text'}
            value={lineValue}
            onChange={setLineValueHandler}
        />
        <button 
            className={classes.lineButton}
            onClick={clearLineHandler}
        >
           &times; 
        </button>
    </div>
};