import { Switch, Route } from "react-router-dom"
import { GamePage } from "../../features/GamePage";
import { MainPage } from "../../features/mainPage/MainPage";
import classes from "./App.module.scss"

const App = () => {
    return <div className={classes.display}>
        <Switch>
            <Route path={'/'} exact component={MainPage} />
            <Route path={'/game'} component={GamePage} />
            <Route path={'*'} render={ () => <div>404 NOT FOUND</div>} />
        </Switch>
    </div>
}

export default App

// const APIKey = '79d35934fcc04ca2ab10df0014b83ba0'