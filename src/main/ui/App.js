import { Switch, Route } from "react-router-dom";
import { GamePageContainer } from "../../features/gamePage/GamePageContainer";
import { MainPageContainer } from "../../features/mainPage/MainPageContainer";
import classes from "./App.module.scss";

const App = () => {
        
    return <div className={classes.display}>
        <Switch>
            <Route path={'/'} exact render={() => <MainPageContainer/>} />
            <Route path={'/game/:slug'} render={() => <GamePageContainer/>} />
            <Route path={'*'} render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
    </div>
};

export default App;
