import React, { useState } from "react";

const Header = () => {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('Какой-то текст');

    function Increment (){
        setLikes (likes + 1);
    }

    function Decrement (){
        setLikes (likes - 1);
    }

    return (
        <div>
            <h1>{likes}</h1>
            <h1>{value}</h1>

            <input 
            type="text" 
            value={value}

            onChange = {(e) => {
                setValue (e.target.value)
            }}
            />

            <button onClick = {Increment}>Increment</button>
            <button onClick = {Decrement}>Decrement</button>
        </div>
    )
}

export default Header;