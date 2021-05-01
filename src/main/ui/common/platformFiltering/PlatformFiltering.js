import classes from "./PlatformFiltering.module.scss"
import {ParentPlatform} from "./../ParentPlatform";

export const PlatformFiltering = ({platformsVisibleHandler, parentPlatforms, setParentPlatformChecked,
    chooseCheckedParentPlatformsHandler}) => {
    const buttonHandler = () => {
        platformsVisibleHandler();
        chooseCheckedParentPlatformsHandler();
    };
    
    return <div className={classes.wrapper}>
        <div className={classes.allPlatforms}>
            <div className={classes.block}>
                {parentPlatforms.map(pp => <ParentPlatform
                    key={pp.id}
                    id={pp.id} 
                    checked={pp.isChecked} 
                    name={pp.name} 
                    setParentPlatformChecked={setParentPlatformChecked} 
                />)}
            </div>
            <button 
                onClick={buttonHandler}
                className={classes.button}
            >
                &times;
            </button>
        </div>
    </div>
}