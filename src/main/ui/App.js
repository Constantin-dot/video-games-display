// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom"
import { GamePage } from "../../features/GamePage";
import { MainPage } from "../../features/mainPage/MainPage";
// import { fetchGames } from "../bll/reducer";
import classes from "./App.module.scss"

const App = () => {
    // const dispatch = useDispatch()

    // useEffect( () => {
    //     dispatch(fetchGames())
    //     // eslint-disable-next-line
    // }, [])
        
    return <div className={classes.display}>
        <Switch>
            <Route path={'/'} exact render={() => <MainPage/>} />
            <Route path={'/game/:slug'} render={() => <GamePage/>} />
            <Route path={'*'} render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
    </div>
}

export default App
