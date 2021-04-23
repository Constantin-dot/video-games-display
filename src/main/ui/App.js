// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom"
import { GamePage } from "../../features/GamePage";
import { MainPageContainer } from "../../features/mainPage/MainPageContainer";
// import { fetchGames } from "../bll/reducer";
import classes from "./App.module.scss"

const App = () => {
        
    return <div className={classes.display}>
        <Switch>
            <Route path={'/'} exact render={() => <MainPageContainer/>} />
            <Route path={'/game/:slug'} render={() => <GamePage/>} />
            <Route path={'*'} render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
    </div>
}

export default App
