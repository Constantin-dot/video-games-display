import classes from "./SortingPanel.module.scss"

export const SortingPanel = ({sortingVisibleHandler, sortGames}) => {

    const inputHandler = (e) => {
        sortGames(e.currentTarget.value);
    };

    return <div className={classes.wrapper}>
        <div className={classes.panel}>
            <div className={classes.itemsBlock}>
                <input 
                    type={"radio"}
                    name={"sorting"}
                    value={"rating"}
                    onClick={inputHandler}
                />Max rating
                <input 
                    type={"radio"}
                    name={"sorting"}
                    value={"-rating"}
                    onClick={inputHandler}
                />Min rating
                <input 
                    type={"radio"}
                    name={"sorting"}
                    value={"released"}
                    onClick={inputHandler}
                />New
                <input 
                    type={"radio"}
                    name={"sorting"}
                    value={"-released"}
                    onClick={inputHandler}
                />Old
            </div>
            <button 
                onClick={sortingVisibleHandler}
                className={classes.button}
            >
                &times;
            </button>
        </div>
    </div>
}