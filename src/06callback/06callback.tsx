import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const search = (event: MouseEvent<HTMLButtonElement>) => {
        
    }

    const onNameChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("name changed")
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }
    const focusLostHandler = () => {
        console.log("focus lost")
    }
    return (
        <div><textarea onChange={onNameChanged} onBlur={focusLostHandler}>Markha</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name="delete" onClick={search}>search</button>

        </div>)
}