import { PlatformParant } from "../PlatformParant"
import classes from "./PlatformFiltering.module.scss"

export const PlatformFiltering = ({platformsVisibleHandler, platformParants, setPlatformParantChecked}) => {
    

    return <div className={classes.wrapper}>
        <div className={classes.allPlatforms}>
        <div className={classes.block}>
            {platformParants.map(pp => <PlatformParant 
                key={pp.id}
                id={pp.id} 
                checked={pp.isChecked} 
                name={pp.name} 
                setPlatformParantChecked={setPlatformParantChecked} 
            />)}
        </div>
        <button 
            onClick={platformsVisibleHandler}
            className={classes.button}
        >
            &times;
        </button>
    </div>
    </div>
}