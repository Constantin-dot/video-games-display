import classes from "./SortingPanel.module.scss"

export const SortingPanel = ({sortingVisibleHandler, sortGames}) => {

    const inputHandler = (e) => {
        sortGames(e.currentTarget.value);
    };

    return <div className={classes.wrapper}>
        <div className={classes.panel}>
            <div className={classes.itemsBlock}>
                <div className={classes.item}>
                    <input 
                        type={"radio"}
                        name={"sorting"}
                        value={"rating"}
                        onClick={inputHandler}
                    />Max rating
                </div>
                <div className={classes.item}>
                    <input 
                        type={"radio"}
                        name={"sorting"}
                        value={"-rating"}
                        onClick={inputHandler}
                    />Min rating
                </div>
                <div className={classes.item}>
                    <input 
                        type={"radio"}
                        name={"sorting"}
                        value={"released"}
                        onClick={inputHandler}
                    />New
                </div>
                <div className={classes.item}>
                    <input 
                        type={"radio"}
                        name={"sorting"}
                        value={"-released"}
                        onClick={inputHandler}
                    />Old
                </div>
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