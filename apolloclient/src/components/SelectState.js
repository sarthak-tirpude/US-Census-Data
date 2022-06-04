import { useState } from 'react';

export default function SelectState({onAddClick}) {
    const [text, setText] = useState("");

    const handleClick = (event) => {
        event.preventDefault();
        onAddClick(text);
    }
    
    return (
            <form onSubmit={handleClick}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value="Submit Query"/>
            </form>
    );


}