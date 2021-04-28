export const PlatformParant = ({id, checked, setPlatformParantChecked, name}) => {
    
    const setPlatformParantCheckedHandler = (e) => {
        setPlatformParantChecked(id, e.currentTarget.checked);
    }

    return <div>
        <input
            type={"checkbox"}
            name={"platrformParant"}
            id={id}
            checked={checked}
            onChange={setPlatformParantCheckedHandler}
        />
        {name}
    </div>
}