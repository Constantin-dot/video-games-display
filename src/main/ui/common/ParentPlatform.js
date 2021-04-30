export const ParentPlatform = ({id, checked, setParentPlatformChecked, name}) => {
    
    const setParentPlatformCheckedHandler = (e) => {
        setParentPlatformChecked(id, e.currentTarget.checked);
    }

    return <div>
        <input
            type={"checkbox"}
            name={"platrformParant"}
            id={id}
            checked={checked}
            onChange={setParentPlatformCheckedHandler}
        />
        {name}
    </div>
}