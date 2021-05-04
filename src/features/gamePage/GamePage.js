import { NavLink } from "react-router-dom"

export const GamePage = ({checkedGame}) => {

    return <div>
        <h3>{checkedGame.name}</h3>
        <p>{checkedGame.description_raw}</p>
        <NavLink to="/">
            &larr;
            Back to catalog
        </NavLink>
    </div>
}